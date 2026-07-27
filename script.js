const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

function setMenuState(isOpen) {
  if (!navToggle || !navLinks) {
    return;
  }

  navLinks.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

if (navToggle && navLinks) {
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    setMenuState(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('click', event => {
    if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
      setMenuState(false);
    }
  });
}

function updateActiveNav() {
  let currentSection = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.id;
    }
  });

  sectionLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    const delay = Number(entry.target.dataset.delay || 0);
    window.setTimeout(() => {
      entry.target.classList.add('visible');
    }, delay * 60);
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -8% 0px',
});

document.querySelectorAll('[data-reveal]').forEach((element, index) => {
  element.classList.add('reveal');
  element.dataset.delay = String(index % 6);
  revealObserver.observe(element);
});
