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

// Light/dark toggle. The initial theme is set by an inline script in the head.
document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
  const root = document.documentElement;
  const dark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
}));

// Some browsers ignore the autoplay attribute; nudge muted teaser videos to start.
document.querySelectorAll('.thumb video').forEach((v) => {
  v.muted = true;
  const p = v.play();
  if (p) p.catch(() => {});
});
