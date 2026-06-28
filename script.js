/* =========================================================
   VIRAJ PATEL SANKHLA — script.js
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

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Active nav link on scroll
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 90) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Scroll fade-in
const fadeTargets = document.querySelectorAll(
  '.tl-item, .skill-col, .research-empty, .edu-entry, .cert-row, .stat-item'
);

fadeTargets.forEach(el => {
  if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

// stagger siblings in the same parent
function staggerGroup(selector) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.dataset.delay = i % 5;
    io.observe(el);
  });
}

staggerGroup('.tl-item');
staggerGroup('.skill-col');
staggerGroup('.edu-entry');
staggerGroup('.cert-row');
staggerGroup('.stat-item');
document.querySelectorAll('.research-empty').forEach(el => io.observe(el));