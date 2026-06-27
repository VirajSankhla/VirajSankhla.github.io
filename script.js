const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 90;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// --- Fade-in on scroll ---
const fadeEls = document.querySelectorAll(
  '.tl-item, .research-card, .skill-group, .edu-card, .contact-link'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 60 * (entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el, i) => {
  el.dataset.delay = i % 4;
  observer.observe(el);
});

// --- Stagger siblings in grid ---
document.querySelectorAll('.research-grid .research-card').forEach((card, i) => {
  card.dataset.delay = i;
});

document.querySelectorAll('.skills-grid .skill-group').forEach((g, i) => {
  g.dataset.delay = i;
});