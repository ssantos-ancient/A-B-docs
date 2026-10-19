/* ==========================================================================
   Card zoom — clicking a .section-card[data-file] opens it large with its
   images (Desktop / Mobile sliders) and tips.
   Tips: window.SECTION_DETAILS (js/sections-details.js) and
         window.NAV_BLOCK_DETAILS (js/navigation-details.js), keyed by data-file.
   Shareable link: page.html#section=<data-file>
   ========================================================================== */

(function () {
  'use strict';

  const { esc } = window.ABDocs;
  const DETAILS = Object.assign({}, window.SECTION_DETAILS, window.NAV_BLOCK_DETAILS);
  const USAGE = window.SECTION_USAGE || {};
  const BLOCKS = window.SECTION_BLOCKS || {};

  // Blocks the section accepts, with what can go inside each builder block
  function blockTree(list, top = false) {
    // Up to 3 columns; extra blocks stack under each other
    const cols = top ? ` style="--cols: ${Math.min(list.length, 3)}"` : '';
    return `<ul class="block-tree${top ? ' block-tree--top' : ''}"${cols}>${list.map(b => `
      <li class="block-tree__item${b.children ? ' has-children' : ''}">
        <span class="block-tree__name">${esc(b.name)}</span>
        ${b.children ? `<div class="block-tree__inside">${blockTree(b.children)}</div>` : ''}
      </li>`).join('')}</ul>`;
  }

  function blocksPanel(file) {
    const list = BLOCKS[file];
    if (!list) return '';
    if (!list.length) return ''; // no blocks: the images use the full height
    return `
      <section class="section-modal__blocks" aria-label="Blocks you can add">
        <h3 class="section-modal__blocks-title">
          Blocks you can add
          <span class="info-tip" tabindex="0" aria-label="In the Theme editor, click Add block in this section. Blocks with a green line hold other blocks.">i
            <span class="info-tip__text" role="tooltip">In the Theme editor, click <strong>Add block</strong> in this section. Blocks with a green line hold other blocks.</span>
          </span>
        </h3>
        ${blockTree(list, true)}
      </section>`;
  }

  // Latest release (js/updates.js) lines for this card, shown once in the note box
  function updateLines(file) {
    const latest = (window.DOC_UPDATES || [])[0];
    return latest ? (latest.items || []).filter(i => i.section === file).map(i => i.note || i.text) : [];
  }

  // "Used on" with the page names (scrolls when the list is long)
  function usageList(file, fallback) {
    const pages = USAGE[file];
    if (!pages) return fallback ? `<p class="section-modal__meta">${esc(fallback)}</p>` : '';
    if (!pages.length) return '<p class="section-modal__meta">Not used on any page yet.</p>';
    return `
      <div class="section-modal__usage">
        <p class="section-modal__meta">Used on ${pages.length} page${pages.length === 1 ? '' : 's'}:</p>
        <ul>${pages.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>`;
  }

  // The group name is the h2 above the card's gallery
  function groupOf(card) {
    let el = card.closest('.section-gallery');
    while (el && el.tagName !== 'H2') el = el.previousElementSibling;
    return el ? el.firstChild.textContent.trim() : '';
  }

  const modal = document.createElement('div');
  modal.className = 'section-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="section-modal__backdrop"></div>
    <div class="section-modal__panel" role="dialog" aria-modal="true" aria-labelledby="section-modal-title">
      <button class="section-modal__step section-modal__step--prev" type="button" aria-label="Previous section">‹</button>
      <button class="section-modal__step section-modal__step--next" type="button" aria-label="Next section">›</button>
      <button class="section-modal__close" type="button" aria-label="Close">${window.ABDocs.icons.close}</button>
      <div class="section-modal__media"></div>
      <div class="section-modal__info"></div>
      <div class="section-modal__blocks-wrap"></div>
    </div>`;
  document.body.append(modal);

  const media = modal.querySelector('.section-modal__media');
  const panel = modal.querySelector('.section-modal__panel');
  panel.tabIndex = -1;
  const info = modal.querySelector('.section-modal__info');
  const blocksEl = modal.querySelector('.section-modal__blocks-wrap');
  let lastCard = null;
  let sliders = [];

  // Tips can mention class names in `backticks`
  // Tips are written "Label – text"; show them as "**Label**: text"
  const formatTip = t => {
    const code = x => esc(x).replace(/`([^`]+)`/g, '<code>$1</code>');
    const m = t.match(/^(.{1,45}?) – (.*)$/);
    return m ? `<strong>${code(m[1])}</strong>: ${code(m[2])}` : code(t);
  };

  function shot(fig) {
    const caption = fig.dataset.caption || 'Image';
    const images = fig.images || [];
    const wrap = document.createElement('div');
    wrap.className = `section-modal__shot section-modal__shot--${caption.toLowerCase()}`;
    // Editor: slider, reorder thumbnails, add images, draw boxes
    const editor = window.ABDocs.buildEditor(fig, { alt: fig.dataset.label || caption });
    sliders.push(editor);
    wrap.append(editor);
    return wrap;
  }

  function open(card) {
    sliders.forEach(sl => sl.destroy && sl.destroy());
    lastCard = card;
    sliders = [];
    // Only show the images that exist; one image alone takes the full width.
    // An empty slot (e.g. no mobile image yet) gets a small "+ Add" button instead.
    const figs = [...card.querySelectorAll('figure')];
    const withImages = figs.filter(f => f.images && f.images.length);
    const shown = withImages.length ? withImages : figs.slice(0, 1);
    media.replaceChildren(...shown.map(shot));
    const empty = window.ABDocs.isLocal ? figs.filter(f => !shown.includes(f) && f.api) : [];
    if (empty.length) {
      const bar = document.createElement('div');
      bar.className = 'section-modal__add-missing';
      empty.forEach(f => {
        const label = (f.dataset.caption || 'image').toLowerCase();
        const input = Object.assign(document.createElement('input'), { type: 'file', accept: 'image/*', multiple: true, hidden: true });
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'img-editor__btn';
        btn.textContent = `+ Add ${label} image`;
        btn.addEventListener('click', () => input.click());
        input.addEventListener('change', () => {
          const files = [...input.files];
          input.value = '';
          if (!files.length) return;
          // Re-open this card once the image is saved, so it shows next to the other one
          f.addEventListener('slotchange', () => setTimeout(() => open(card), 50), { once: true });
          f.api.add(files);
        });
        bar.append(btn, input);
      });
      media.append(bar);
    }
    blocksEl.innerHTML = blocksPanel(card.dataset.file);

    const title = card.querySelector('.section-card__title').textContent;
    const desc = card.querySelector('.section-card__desc').textContent;
    const metaEl = card.querySelector('.section-card__meta');
    const meta = metaEl ? metaEl.textContent : '';
    const group = groupOf(card);
    const tips = DETAILS[card.dataset.file] || [];
    // Tips written "Note – …" go in their own box under the tips
    const notesList = tips.filter(t => t.startsWith('Note – '));
    const tipsList = tips.filter(t => !t.startsWith('Note – '));
    const updates = updateLines(card.dataset.file);
    info.innerHTML = `
      ${group ? `<p class="section-modal__eyebrow">${esc(group)}</p>` : ''}
      <h2 class="section-modal__title" id="section-modal-title">${esc(title)}</h2>
      <p class="section-modal__desc">${esc(desc)}</p>
      ${tipsList.length ? `<ul class="section-modal__tips">${tipsList.map(t => `<li>${formatTip(t)}</li>`).join('')}</ul>` : ''}
      ${notesList.length || updates.length ? `<div class="section-modal__notes"><p class="section-modal__notes-title">Note</p>${
        updates.map(u => `<p><strong>Update</strong>: ${esc(u)}</p>`).join('')}${
        notesList.map(t => `<p>${formatTip(t.replace(/^Note – /, ''))}</p>`).join('')}</div>` : ''}`;

    modal.hidden = false;
    document.body.classList.add('palette-open');
    try { history.replaceState(null, '', location.pathname + location.search + '#section=' + card.dataset.file); } catch (e) { /* file:// */ }
    // Focus the panel (not the close button) so the X keeps its normal colour
    panel.focus({ preventScroll: true });
  }

  function close() {
    sliders.forEach(s => s.destroy());
    modal.hidden = true;
    document.body.classList.remove('palette-open');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* file:// */ }
    if (lastCard) lastCard.focus();
  }

  document.querySelectorAll('.section-card[data-file]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('button, input, a')) return;
      open(card);
    });
    card.addEventListener('keydown', e => {
      if (e.target === card && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        open(card);
      }
    });
  });

  modal.querySelector('.section-modal__backdrop').addEventListener('click', close);

  // ‹ › sit on the backdrop, outside the panel
  modal.append(modal.querySelector('.section-modal__step--prev'), modal.querySelector('.section-modal__step--next'));

  // ‹ › go to the previous / next section card (only the ones visible on the page)
  const visibleCards = () => [...document.querySelectorAll('.section-card[data-file]')].filter(c => c.offsetParent !== null || c === lastCard);
  function step(dir) {
    const list = visibleCards();
    const i = list.indexOf(lastCard);
    if (i < 0 || !list.length) return;
    sliders.forEach(s => s.destroy());
    open(list[(i + dir + list.length) % list.length]);
  }
  modal.querySelector('.section-modal__step--prev').addEventListener('click', () => step(-1));
  modal.querySelector('.section-modal__step--next').addEventListener('click', () => step(1));
  modal.querySelector('.section-modal__close').addEventListener('click', close);
  // Esc closes; ← and → move every slider in the zoom view
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      sliders.filter(sl => sl.count() > 1).forEach(sl => (e.key === 'ArrowRight' ? sl.next() : sl.prev()));
    }
  });

  // Open a card when the link changes on the same page (e.g. the sidebar dot)
  window.addEventListener('hashchange', () => {
    const file = (location.hash.match(/^#section=(.+)$/) || [])[1];
    const card = file && document.querySelector(`.section-card[data-file="${CSS.escape(decodeURIComponent(file))}"]`);
    if (card) open(card);
  });

  // Open a card from a shared link: sections.html#section=<file>
  const linked = (location.hash.match(/^#section=(.+)$/) || [])[1];
  const linkedCard = linked && document.querySelector(`.section-card[data-file="${CSS.escape(decodeURIComponent(linked))}"]`);
  if (linkedCard) {
    // Wait for its images to be found so the large view has them
    let pending = linkedCard.querySelectorAll('figure').length;
    const ready = () => { if (--pending <= 0) open(linkedCard); };
    linkedCard.addEventListener('slotchange', ready);
    setTimeout(() => { if (modal.hidden) open(linkedCard); }, 1500);
  }
})();
