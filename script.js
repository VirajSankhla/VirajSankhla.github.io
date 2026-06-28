/* =========================================================
   VIRAJ PATEL SANKHLA — script.js
   Do not edit unless you know what you are doing.
   All content changes go in index.html only.
   ========================================================= */

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Active nav highlight on scroll
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Scroll fade-in for all animated elements
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

function observeGroup(selector) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-in');
    el.dataset.delay = i % 5;
    io.observe(el);
  });
}

observeGroup('.tl-item');
observeGroup('.rc-card');
observeGroup('.skill-col');
observeGroup('.edu-entry');
observeGroup('.cert-row');
observeGroup('.stat-item');
document.querySelectorAll('.research-empty').forEach(el => {
  el.classList.add('fade-in');
  io.observe(el);
});