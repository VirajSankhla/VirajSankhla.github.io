import { renderSite } from './components/renderers.js';

renderSite();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

function setMenuState(isOpen) {
  navLinks.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', () => setMenuState(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuState(false)));
document.addEventListener('click', event => { if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) setMenuState(false); });

function updateActiveNav() {
  let current = 'home';
  sections.forEach(section => { if (window.scrollY >= section.offsetTop - 120) current = section.id; });
  sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
