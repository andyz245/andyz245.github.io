const root = document.documentElement;
const toggle = document.querySelector('.theme');
const bar = document.querySelector('.bar');

// The head script picks the initial theme; this only mirrors it into the button.
const sync = (theme) => {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(theme === 'light'));
};

sync(root.dataset.theme);

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  sync(next);
  localStorage.setItem('theme', next);
});

const shade = () => bar.classList.toggle('is-scrolled', window.scrollY > 8);

shade();
window.addEventListener('scroll', shade, { passive: true });
