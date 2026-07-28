const bar = document.querySelector('.bar');

const shade = () => bar.classList.toggle('is-scrolled', window.scrollY > 8);

shade();
window.addEventListener('scroll', shade, { passive: true });
