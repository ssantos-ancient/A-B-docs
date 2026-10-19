/* ==========================================================================
   Sections library
   - Search filters the cards
   - ★ favourite / − avoid marks come from js/sections-picks.js
   - Drag cards to reorder (saved in this browser)
   - Each card lists the blocks it accepts (js/sections-blocks.js)
   (Clicking a card opens it large: see js/card-zoom.js)
   ========================================================================== */

(function () {
  'use strict';

  const { esc, copy, toast } = window.ABDocs;
  const BLOCKS = window.SECTION_BLOCKS || {};
  const STAR_KEY = 'ab-docs-section-stars';
  const ORDER_KEY = 'ab-docs-section-order';

  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    },
  };

  const galleries = [...document.querySelectorAll('.section-gallery')];
  const cards = [...document.querySelectorAll('.section-card[data-file]')];
  const byFile = new Map(cards.map(c => [c.dataset.file, c]));

  // The h2 id above a gallery names its group
  function groupId(gallery) {
    let el = gallery.previousElementSibling;
    while (el && el.tagName !== 'H2' && !el.matches('.heading-row')) el = el.previousElementSibling;
    if (el && el.matches('.heading-row')) el = el.querySelector('h2');
    return el ? el.id : '';
  }

  // ── Block chips on each card ──────────────────────────────────────────────
  cards.forEach(card => {
    const list = BLOCKS[card.dataset.file] || [];
    const meta = card.querySelector('.section-card__meta');
    if (meta) meta.textContent = list.length ? `${list.length} block${list.length === 1 ? '' : 's'} available` : 'No blocks available';
    card.classList.toggle('has-no-blocks', !list.length);
    if (!list.length) return;
    const shown = list.slice(0, 4);
    const more = list.length - shown.length;
    card.querySelector('.section-card__body').insertAdjacentHTML('beforeend', `
      <div class="section-card__blocks" aria-label="Blocks you can add">
        ${shown.map(b => `<span class="block-chip${b.children ? ' block-chip--nested' : ''}">${esc(b.name)}</span>`).join('')}
        ${more > 0 ? `<span class="block-chip block-chip--more">+${more}</span>` : ''}
      </div>`);
  });

  // ── Picks: ★ favourite choice, − avoid using (not editable here) ─────────
  // Saved for everyone in js/sections-picks.js. Until that file has picks,
  // each browser still shows the stars and minus marks made earlier.
  const BAKED = window.SECTION_PICKS || { stars: [], minus: [] };
  const hasBaked = !!((BAKED.stars || []).length || (BAKED.minus || []).length);
  // (the live site only shows the saved picks, never a browser's own)
  const own = !hasBaked && window.ABDocs.isLocal;
  const stars = new Set(own ? store.get('ab-docs-section-stars', []) : BAKED.stars || []);
  const minus = new Set(own ? store.get('ab-docs-section-minus', []) : BAKED.minus || []);
  stars.forEach(f => minus.delete(f));

  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/></svg>';
  const MINUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8 12h8"/></svg>';

  cards.forEach(card => {
    const file = card.dataset.file;
    const body = card.querySelector('.section-card__body');
    if (stars.has(file)) {
      card.classList.add('is-starred');
      body.insertAdjacentHTML('afterbegin', `<span class="pick-mark pick-mark--star" tabindex="0" data-tip="Favourite choice" aria-label="Favourite choice">${STAR}</span>`);
    } else if (minus.has(file)) {
      card.classList.add('is-minus');
      body.insertAdjacentHTML('afterbegin', `<span class="pick-mark pick-mark--minus" tabindex="0" data-tip="Avoid: outdated, or another section does it better." aria-label="Avoid: outdated, or another section does it better.">${MINUS}</span>`);
    }
  });

  // ── Saved order ────────────────────────────────────────────────────────────
  function restoreOrder() {
    const local = window.ABDocs.isLocal ? store.get(ORDER_KEY, null) : null;
    const baked = (window.SECTION_PICKS || {}).order || {};
    const saved = local || (Object.keys(baked).length ? baked : null);
    if (!saved) return;
    galleries.forEach(g => {
      (saved[groupId(g)] || []).forEach(file => {
        const card = byFile.get(file);
        if (card) g.append(card);
      });
    });
  }

  function currentOrder() {
    const order = {};
    galleries.forEach(g => {
      order[groupId(g)] = [...g.querySelectorAll('.section-card[data-file]')].map(c => c.dataset.file);
    });
    return order;
  }

  restoreOrder();

  // ── Drag to reorder ────────────────────────────────────────────────────────
  let dragged = null;

  if (window.ABDocs.isLocal) cards.forEach(card => {
    card.draggable = true;
    card.querySelectorAll('img').forEach(img => { img.draggable = false; });

    card.addEventListener('dragstart', e => {
      dragged = card;
      card.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.dataset.file);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      dragged = null;
      store.set(ORDER_KEY, currentOrder());
      updateTools();
    });
  });

  galleries.forEach(g => {
    g.addEventListener('dragover', e => {
      if (!dragged) return;
      e.preventDefault();
      const over = e.target.closest('.section-card');
      if (!over) {
        if (e.target === g) g.append(dragged);
        return;
      }
      if (over === dragged) return;
      const r = over.getBoundingClientRect();
      const after = (e.clientX - r.left) > r.width / 2;
      after ? over.after(dragged) : over.before(dragged);
    });
    g.addEventListener('drop', e => e.preventDefault());
  });

  // ── Tools: starred only (+ copy picks until they're saved for everyone) ───
  const header = document.querySelector('.page-header');
  const localPicks = !hasBaked && (stars.size || minus.size);
  header.insertAdjacentHTML('beforeend', `
    <div class="library-tools">
      <span class="library-tools__hint">
        <span class="legend-item"><span class="pick-mark pick-mark--star pick-mark--inline" aria-hidden="true">${STAR}</span>Favourite choice</span>
        <span class="legend-item"><span class="pick-mark pick-mark--minus pick-mark--inline" aria-hidden="true">${MINUS}</span>Avoid</span>
      </span>
      <label class="switch"><input type="checkbox" id="starred-only"> Starred only</label>
      ${window.ABDocs.isLocal ? '<button class="btn btn--ghost btn--sm" type="button" id="copy-order">Copy order and picks</button>' : ''}
    </div>`);
  const starredOnly = document.getElementById('starred-only');

  function updateTools() { applyFilter(); }

  const copyBtn = document.getElementById('copy-order');
  if (copyBtn) copyBtn.addEventListener('click', () => {
    const data = { stars: [...stars], minus: [...minus], order: currentOrder() };
    copy(JSON.stringify(data, null, 1)).then(() => toast('Copied. Paste it to Claude to make it the default for everyone.'));
  });

  // ── Search + starred filter ────────────────────────────────────────────────
  const input = document.getElementById('section-search');
  const empty = document.getElementById('sections-empty');
  const total = cards.length;
  input.insertAdjacentHTML('afterend', '<span class="gallery-search__count" aria-live="polite"></span>');
  const countEl = input.nextElementSibling;

  function applyFilter() {
    const q = input.value.toLowerCase().trim();
    const onlyStars = starredOnly.checked;
    let shown = 0;
    galleries.forEach(g => {
      let inGroup = 0;
      g.querySelectorAll('.section-card').forEach(card => {
        const match = (!q || card.dataset.search.includes(q)) && (!onlyStars || stars.has(card.dataset.file));
        card.hidden = !match;
        if (match) inGroup++;
      });
      g.hidden = !inGroup;
      // The category h2 (the first one shares a row with the search box)
      const prev = g.previousElementSibling;
      (prev.matches('.heading-row') ? prev.querySelector('h2') : prev).hidden = !inGroup;
      shown += inGroup;
    });
    empty.hidden = shown > 0;
    countEl.textContent = shown === total ? `${total} sections` : `${shown} of ${total}`;
  }

  input.addEventListener('input', applyFilter);
  starredOnly.addEventListener('change', applyFilter);
  updateTools();
})();
