import { siteData } from '../content/site-data.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const chips = items => items.map(item => `<span class="chip">${escapeHtml(item)}</span>`).join('');
const bullets = items => `<ul class="bullet-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;

export function renderSite() {
  const { profile, navigation, about, education, certificates, experience, skills = [] } = siteData;
  document.title = `${profile.name} | Finance Portfolio`;
  document.querySelector('[data-site="brand"]').innerHTML = `<span class="brand-name brand-name--solo">${escapeHtml(profile.name)}</span>`;
  document.querySelector('[data-site="nav"]').innerHTML = `${navigation.map((item, index) => `<li><a href="${escapeHtml(item.href)}"${index === 0 ? ' class="active"' : ''}>${escapeHtml(item.label)}</a></li>`).join('')}<li><a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>${profile.github ? `<li><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">GitHub</a></li>` : ''}`;
  document.querySelector('[data-site="hero"]').innerHTML = `<div class="hero-grid container"><div class="hero-copy" data-reveal><h1 class="hero-title">${escapeHtml(profile.name)}</h1><p class="hero-headline">${escapeHtml(profile.role)}</p><p class="hero-summary">${escapeHtml(profile.summary)}</p><div class="hero-actions"><a class="btn btn-tertiary" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></div></div><aside class="hero-panel" data-reveal><div class="hero-photo-card"><div class="hero-photo-frame"><img src="${escapeHtml(profile.image)}" alt="${escapeHtml(profile.imageAlt)}" class="hero-photo" loading="eager" decoding="async"></div><div class="hero-photo-copy"><p class="hero-photo-kicker mono">Profile</p><p class="hero-photo-name">${escapeHtml(profile.name)}</p><p class="hero-photo-role">${escapeHtml(profile.cardBio)}</p></div></div><div class="hero-note">${escapeHtml(profile.cardFocus)}</div></aside></div>`;
  document.querySelector('[data-site="about"]').innerHTML = `<header class="section-header section-header--wide" data-reveal><p class="section-kicker mono">About</p><h2 class="section-title section-title--single-line">${escapeHtml(about.heading)}</h2><p class="section-lead">${escapeHtml(about.lead)}</p></header><div class="about-grid"><article class="content-card content-card--large" data-reveal><h3>How I approach analysis</h3>${about.overview.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</article><article class="content-card" data-reveal><h3>Approach</h3>${bullets(about.strengths)}</article><article class="content-card" data-reveal><h3>Areas of interest</h3>${bullets(about.direction)}</article></div>`;
  document.querySelector('[data-site="education"]').innerHTML = `<header class="section-header" data-reveal><p class="section-kicker mono">Education</p><h2 class="section-title">Education and credentials</h2><p class="section-lead">Study and certifications in finance, markets and risk.</p></header><div class="timeline">${education.map(item => timeline(item)).join('')}</div><div class="cert-grid">${certificates.map(item => `<article class="cert-card" data-reveal><p class="cert-year mono">${escapeHtml(item.year)}</p><h3>${escapeHtml(item.title)}</h3><p class="muted">${escapeHtml(item.summary)}</p></article>`).join('')}</div>`;
  document.querySelector('[data-site="experience"]').innerHTML = `<header class="section-header" data-reveal><p class="section-kicker mono">Experience</p><h2 class="section-title">Professional experience</h2><p class="section-lead">Research, operations and client-facing experience that shapes how I work.</p></header><div class="timeline timeline--experience">${experience.map(item => timeline(item, true)).join('')}</div>`;
  document.querySelector('[data-site="coursework"]').innerHTML = courseworkMarkup(siteData.coursework);
  document.querySelector('[data-site="skills"]').innerHTML = `<header class="section-header section-header--wide" data-reveal><p class="section-kicker mono">Skills</p><h2 class="section-title section-title--single-line">Skills for investment research and analysis</h2><p class="section-lead">Finance, data and communication skills developed through coursework, research and work experience.</p></header><div class="skills-grid">${skills.map(item => `<article class="skill-card ${item.tone ? `skill-card--${item.tone}` : ''}" data-reveal><p class="skill-label mono">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><div class="chip-row">${chips(item.items)}</div></article>`).join('')}</div>`;
  initialiseReveal();
}

function timeline(item, includeBullets = false) {
  return `<article class="timeline-item" data-reveal><div class="timeline-marker" aria-hidden="true"><span></span></div><div class="timeline-card"><div class="timeline-head"><div><p class="timeline-date mono">${escapeHtml(item.date)}</p><h3>${escapeHtml(item.title)}</h3><p class="timeline-org">${escapeHtml(item.organisation)}</p></div>${item.badge ? `<span class="badge badge--${escapeHtml(item.tone || 'ghost')}">${escapeHtml(item.badge)}</span>` : ''}</div>${includeBullets ? bullets(item.bullets) : ''}</div></article>`;
}

function courseworkMarkup(items) {
  const header = `<header class="section-header section-header--wide" data-reveal><p class="section-kicker mono">Academic Coursework</p><h2 class="section-title">Financial research in practice</h2><p class="section-lead">Reports that apply financial theory to markets, risk and equity returns.</p></header>`;
  if (!items.length) return `${header}<div class="empty-state" data-reveal><span class="empty-state-icon" aria-hidden="true">✦</span><h3>Coursework reports will appear here</h3><p>The first verified report can be added by uploading its PDF and completing one object in <code>content/site-data.js</code>.</p></div>`;
  return `${header}<div class="project-grid">${items.map(item => `<article class="project-card ${item.highlighted ? 'project-card--highlighted' : ''}" data-reveal>${item.thumbnail ? `<img class="project-media" src="${escapeHtml(item.thumbnail)}" alt="${escapeHtml(item.title)} thumbnail">` : ''}<div class="project-body"><div class="project-top"><p class="project-kicker mono">${escapeHtml(item.topic)}</p>${item.highlighted ? '<span class="badge badge--highlight">✦ Highlighted Coursework</span>' : ''}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><dl class="report-meta"><div><dt>Software</dt><dd>${escapeHtml(item.software.join(', '))}</dd></div><div><dt>Research area</dt><dd>${escapeHtml(item.researchArea)}</dd></div></dl><div class="report-tags"><div><span>Skills</span>${chips(item.skills)}</div><div><span>Models &amp; methods</span>${chips(item.technologies)}</div></div><div class="card-actions"><a href="${escapeHtml(item.pdf)}" target="_blank" rel="noopener">Read report</a><a href="pages/coursework.html?id=${encodeURIComponent(item.id)}">View details</a></div></div></article>`).join('')}</div>`;
}

export function initialiseReveal() {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    window.setTimeout(() => entry.target.classList.add('visible'), Number(entry.target.dataset.revealDelay || 0));
    observer.unobserve(entry.target);
  }), { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((element, index) => {
    element.classList.add('reveal');
    element.dataset.revealDelay = String((index % 4) * 55);
    observer.observe(element);
  });
}

export { escapeHtml, chips };
