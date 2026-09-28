// Abstract toggles and the "First author" filter.
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-abs]');
  if (!b) return;
  const open = b.getAttribute('aria-expanded') === 'true';
  b.setAttribute('aria-expanded', String(!open));
  b.closest('article').querySelector('.abs').hidden = open;
});

document.querySelectorAll('.filter').forEach((group) => {
  const section = group.closest('section');
  const buttons = group.querySelectorAll('button[data-f]');
  buttons.forEach((b) => b.addEventListener('click', () => {
    buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const onlyFirst = b.dataset.f === 'first';
    section.querySelectorAll('.pub').forEach((p) => {
      p.hidden = onlyFirst && p.dataset.first !== 'true';
    });
    section.querySelectorAll('.year-group').forEach((g) => {
      g.hidden = !g.querySelector('.pub:not([hidden])');
    });
  }));
});
