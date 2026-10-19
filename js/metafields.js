/* Metafields & metaobjects — filter table rows by search */
(function () {
  'use strict';

  const input = document.getElementById('field-search');
  const empty = document.getElementById('fields-empty');
  const tables = [...document.querySelectorAll('.filter-table')];

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    let shown = 0;
    tables.forEach(table => {
      let inTable = 0;
      table.querySelectorAll('tbody tr').forEach(row => {
        const match = !q || row.dataset.search.includes(q);
        row.hidden = !match;
        if (match) inTable++;
      });
      // Hide the whole group (heading, intro and table) when nothing matches
      const wrap = table.closest('.table-wrap');
      const intro = wrap.previousElementSibling;
      const heading = intro.previousElementSibling;
      [wrap, intro, heading].forEach(el => { el.hidden = !inTable; });
      shown += inTable;
    });
    empty.hidden = shown > 0;
  });
})();
