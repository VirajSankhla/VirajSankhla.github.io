import { siteData } from '../content/site-data.js';
import { escapeHtml, chips, initialiseReveal } from '../components/renderers.js';

const id = new URLSearchParams(window.location.search).get('id');
const item = siteData.coursework.find(report => report.id === id);
const root = document.querySelector('[data-coursework-detail]');

if (!item) {
  root.innerHTML = '<div class="container detail-page"><a class="back-link" href="../index.html#coursework">← Back to Academic Coursework</a><div class="empty-state"><h1>Report not found</h1><p>This report may have been renamed or is not yet in the coursework data.</p></div></div>';
} else {
  document.title = `${item.title} | Viraj Patel Sankhla`;
  const pdfPath = `../${item.pdf}`;
  const rows = [['Research Question', item.researchQuestion], ['Objectives', item.objectives], ['Dataset', item.dataset], ['Methodology', item.methodology], ['Models Used', item.modelsUsed], ['Software', item.software], ['Key Findings', item.keyFindings], ['Skills Demonstrated', item.skills]];
  root.innerHTML = `<div class="container detail-page"><a class="back-link" href="../index.html#coursework">← Back to Academic Coursework</a><header class="detail-hero" data-reveal><p class="section-kicker mono">${escapeHtml(item.topic)}</p><h1 class="section-title">${escapeHtml(item.title)}</h1><p class="section-lead">${escapeHtml(item.summary)}</p><a class="btn btn-primary" href="${escapeHtml(pdfPath)}" download>Download report</a></header><section class="detail-overview" data-reveal><h2>Overview</h2><p>${escapeHtml(item.overview)}</p></section><div class="detail-grid">${rows.map(([label, value]) => `<section class="detail-card" data-reveal><h2>${label}</h2>${Array.isArray(value) ? `<div class="chip-row">${chips(value)}</div>` : `<p>${escapeHtml(value)}</p>`}</section>`).join('')}</div></div>`;
  initialiseReveal();
}
