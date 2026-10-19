// Moves images downloaded with "Download added images" into assets/images.
// "sections__hero-desktop-2.jpg" in ~/Downloads → assets/images/sections/hero-desktop-2.jpg
// Usage: npm run import-images            (looks in ~/Downloads)
//        npm run import-images -- <folder>
import { readdirSync, renameSync, copyFileSync, unlinkSync, existsSync, mkdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'images');
const from = process.argv[2] || join(homedir(), 'Downloads');
const pattern = /^([a-z0-9-]+)__([a-z0-9_-]+?)\.(jpg|jpeg|png|webp|gif)$/i;

// Same as fingerprint() in js/site.js: data URL length + FNV-1a hash
function fingerprint(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return s.length + ':' + h.toString(16);
}

let moved = 0;
for (const file of readdirSync(from)) {
  const m = file.match(pattern);
  if (!m) continue;
  const [, folder, name, ext] = m;
  const dir = join(root, folder);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const target = join(dir, `${name}.${ext.toLowerCase() === 'jpeg' ? 'jpg' : ext.toLowerCase()}`);
  const src = join(from, file);
  const twin = readdirSync(dir).find(f => readFileSync(join(dir, f)).equals(readFileSync(src)));
  if (twin) { console.log(`= ${file} is the same as ${folder}/${twin}, skipped`); continue; }
  try {
    renameSync(join(from, file), target);
  } catch {
    copyFileSync(join(from, file), target);
    unlinkSync(join(from, file));
  }
  console.log(`${file} → ${target.replace(root, 'assets/images')}`);
  moved++;
}
// The exported edits file (newest "image-edits*.js") replaces js/image-edits.js
const edits = readdirSync(from)
  .filter(f => /^image-edits( ?\(\d+\))?\.js$/.test(f))
  .map(f => ({ f, t: statSync(join(from, f)).mtimeMs }))
  .sort((a, b) => b.t - a.t)[0];
if (edits) {
  const target = join(root, '..', '..', 'js', 'image-edits.js');
  copyFileSync(join(from, edits.f), target);
  console.log(`${edits.f} → js/image-edits.js`);
}

// Bundle from "Export edits": ab-docs-edits.json (images + boxes + order in one file)
const bundles = readdirSync(from)
  .filter(f => /^ab-docs-edits( ?\(\d+\))?\.json$/.test(f))
  .map(f => ({ f, t: statSync(join(from, f)).mtimeMs }))
  .sort((a, b) => b.t - a.t);
if (bundles.length) {
  const b = JSON.parse(readFileSync(join(from, bundles[0].f), 'utf8'));
  const siteRoot = join(root, '..', '..');
  const editsFile = join(siteRoot, 'js', 'image-edits.js');
  // Fingerprints of images already imported, per slot (see fingerprint() in js/site.js)
  const prev = existsSync(editsFile) ? readFileSync(editsFile, 'utf8').match(/window\.IMAGE_IMPORTED = ([\s\S]*?);\n/) : null;
  const imported = prev ? JSON.parse(prev[1]) : {};
  // Renamed/deleted saved images: kept so browsers still holding old names update
  const renamedBlock = existsSync(editsFile) ? (readFileSync(editsFile, 'utf8').match(/\n\/\* Saved images renamed[\s\S]*$/) || [''])[0] : '';
  const edits = b.edits || {};
  const rename = (from, to) => Object.values(edits).forEach(e => {
    if (e.order) e.order = [...new Set(e.order.map(s => s === from ? to : s))];
    if (e.hidden) e.hidden = e.hidden.map(s => s === from ? to : s);
    if (e.boxes && e.boxes[from]) { e.boxes[to] = e.boxes[from]; delete e.boxes[from]; }
  });
  for (const img of b.images || []) {
    const data = Buffer.from(String(img.data).split(',')[1] || '', 'base64');
    const slot = img.path.replace(/^assets\/images\//, '').replace(/\.\w+$/, '').replace(/-\d+$/, '');
    const dir = join(siteRoot, dirname(img.path));
    const stem = slot.split('/').pop();
    // Same picture already saved in this slot: point to it instead of adding a copy
    const twin = existsSync(dir) && readdirSync(dir)
      .filter(f => f.replace(/\.\w+$/, '').replace(/-\d+$/, '') === stem)
      .find(f => readFileSync(join(dir, f)).equals(data));
    const path = twin ? join(dirname(img.path), twin) : img.path;
    (imported[slot] = imported[slot] || {})[fingerprint(String(img.data))] = path;
    if (twin) {
      if (path !== img.path) rename(img.path, path);
      console.log(`= ${img.path} (already there as ${twin})`);
      continue;
    }
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(siteRoot, img.path), data);
    console.log(`+ ${img.path}`);
    moved++;
  }
  writeFileSync(editsFile,
    '/* Image edits saved for everyone (order, hidden images, boxes). Imported from ab-docs-edits.json. */\n'
    + 'window.IMAGE_EDITS = ' + JSON.stringify(edits, null, 2) + ';\n'
    + '\n/* Images already saved, per image slot, by fingerprint of the copy a browser\n   may still hold from "+". That browser shows the saved file instead. */\n'
    + 'window.IMAGE_IMPORTED = ' + JSON.stringify(imported, null, 2) + ';\n'
    + renamedBlock);
  console.log(`${bundles[0].f} → js/image-edits.js (${Object.keys(b.edits || {}).length} image slots)`);
}

console.log(moved || edits || bundles.length ? `\nDone. Once the site shows them, clear this browser's edits (DevTools › Application › IndexedDB › ab-docs-images).` : `Nothing to import in ${from}`);
