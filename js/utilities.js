/* ==========================================================================
   Utility classes — page logic
   Needs: js/site.js (window.ABDocs) and js/utilities-data.js (CLASSES)
   ========================================================================== */

(function () {
  'use strict';

  const { copy, toast, esc, highlight } = window.ABDocs;

  const RESP_LABELS = { mobile: 'Mobile', desktop: 'Desktop', tablet: 'Tablet', both: 'Responsive' };

  // ── Elements ───────────────────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const searchInput = $('search');
  const filterRow = $('filter-row');
  const resultsEl = $('results');
  const noResults = $('no-results');
  const countEl = $('results-count');
  const cssToggle = $('toggle-css');

  // ── State (restored from the URL so filtered views can be shared) ─────────
  const params = new URLSearchParams(location.search);
  const allCats = [...new Set(CLASSES.map(c => c.cat))];
  let activeFilter = allCats.includes(params.get('cat')) ? params.get('cat') : 'all';
  let query = (params.get('q') || '').toLowerCase().trim();
  searchInput.value = params.get('q') || '';

  function syncUrl() {
    const p = new URLSearchParams();
    if (searchInput.value.trim()) p.set('q', searchInput.value.trim());
    if (activeFilter !== 'all') p.set('cat', activeFilter);
    const qs = p.toString();
    try {
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    } catch (e) { /* not allowed on some file:// setups */ }
  }

  // ── Filter chips ───────────────────────────────────────────────────────────
  function chip(filter, label, count) {
    return `<button class="chip" type="button" data-filter="${esc(filter)}" aria-pressed="false">${esc(label)}<span class="chip__count">${count}</span></button>`;
  }

  filterRow.innerHTML = chip('all', 'All', CLASSES.length)
    + allCats.map(cat => chip(cat, cat, CLASSES.filter(c => c.cat === cat).length)).join('');

  function syncChips() {
    filterRow.querySelectorAll('.chip').forEach(b => {
      const on = b.dataset.filter === activeFilter;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on);
    });
  }

  function setFilter(cat) {
    activeFilter = cat;
    syncChips();
    syncUrl();
    render();
  }

  filterRow.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (b) setFilter(b.dataset.filter);
  });

  // ── Search ─────────────────────────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    query = searchInput.value.toLowerCase().trim();
    syncUrl();
    render();
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape' && searchInput.value) {
      e.stopPropagation();
      searchInput.value = '';
      query = '';
      syncUrl();
      render();
    }
  });

  $('clear-filters').addEventListener('click', () => {
    searchInput.value = '';
    query = '';
    setFilter('all');
    searchInput.focus();
  });

  // ── Show all CSS ───────────────────────────────────────────────────────────
  cssToggle.addEventListener('change', () => {
    resultsEl.classList.toggle('show-all-css', cssToggle.checked);
  });

  // ── Render ─────────────────────────────────────────────────────────────────
  function cardHTML(c) {
    const badge = c.resp
      ? `<span class="resp-badge resp-badge--${c.resp}">${RESP_LABELS[c.resp]}</span>`
      : '';
    return `
      <article class="class-card" tabindex="0" role="button" aria-expanded="false" data-name="${esc(c.name)}" title="Click to show CSS · Double-click to copy">
        <div class="class-card__head">
          <code class="class-card__name">${highlight(c.name, query)}</code>
          ${badge}
          <button class="copy-btn class-card__copy" type="button" data-copy="${esc(c.name)}" aria-label="Copy ${esc(c.name)}">Copy</button>
        </div>
        <p class="class-card__desc">${highlight(c.desc, query)}</p>
        <pre class="class-card__css">${highlight(c.css, query)}</pre>
      </article>`;
  }

  function render() {
    const filtered = CLASSES.filter(c => {
      const matchesCat = activeFilter === 'all' || c.cat === activeFilter;
      const matchesQ = !query
        || c.name.toLowerCase().includes(query)
        || c.desc.toLowerCase().includes(query)
        || c.css.toLowerCase().includes(query)
        || c.sub.toLowerCase().includes(query);
      return matchesCat && matchesQ;
    });

    countEl.textContent = filtered.length === CLASSES.length
      ? `${CLASSES.length} classes`
      : `${filtered.length} of ${CLASSES.length}`;

    noResults.hidden = filtered.length > 0;
    if (!filtered.length) {
      resultsEl.innerHTML = '';
      return;
    }

    // Group: cat → sub → items
    const groups = {};
    filtered.forEach(c => {
      ((groups[c.cat] = groups[c.cat] || {})[c.sub] = groups[c.cat][c.sub] || []).push(c);
    });

    resultsEl.innerHTML = Object.entries(groups).map(([cat, subs]) => {
      const total = Object.values(subs).reduce((n, arr) => n + arr.length, 0);
      return `
        <section class="cat-block">
          <h2 class="cat-block__header">${esc(cat)} <span class="cat-block__count">${total} ${total === 1 ? 'class' : 'classes'}</span></h2>
          ${Object.entries(subs).map(([sub, items]) => `
            <div class="subcat-block">
              <h3 class="subcat-block__header"><span>${esc(sub)}</span><span class="subcat-block__count">${items.length}</span></h3>
              <div class="classes-grid">${items.map(cardHTML).join('')}</div>
            </div>`).join('')}
        </section>`;
    }).join('');
  }

  // ── Card interactions (delegated, bound once) ──────────────────────────────
  function toggleCard(card) {
    const wasOpen = card.classList.contains('is-expanded');
    card.closest('.classes-grid').querySelectorAll('.class-card.is-expanded').forEach(c => {
      c.classList.remove('is-expanded');
      c.setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      card.classList.add('is-expanded');
      card.setAttribute('aria-expanded', 'true');
    }
  }

  function copyName(name, btn) {
    copy(name).then(() => {
      toast(`.${name} copied`);
      if (!btn) return;
      btn.textContent = 'Copied';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('is-copied');
      }, 1600);
    });
  }

  resultsEl.addEventListener('click', e => {
    const btn = e.target.closest('.copy-btn');
    if (btn) return copyName(btn.dataset.copy, btn);
    if (e.target.closest('.class-card__css')) return; // let people select the CSS
    const card = e.target.closest('.class-card');
    if (card && e.detail < 2) toggleCard(card);
  });

  resultsEl.addEventListener('dblclick', e => {
    const card = e.target.closest('.class-card');
    if (!card || e.target.closest('.copy-btn, .class-card__css')) return;
    window.getSelection().removeAllRanges();
    copyName(card.dataset.name, card.querySelector('.copy-btn'));
  });

  resultsEl.addEventListener('keydown', e => {
    const card = e.target.closest('.class-card');
    if (!card || e.target !== card) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard(card);
    } else if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey) {
      copyName(card.dataset.name, card.querySelector('.copy-btn'));
    }
  });

  syncChips();
  render();
})();
