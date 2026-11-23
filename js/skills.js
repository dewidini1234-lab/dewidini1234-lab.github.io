"use strict";
/* Skills page: bilingual text, icon-load fallbacks, accessible scroll reveals. */
(function () {
  const CONTENT = {
    id: {
      pageTitle: 'Keahlian & Tools | Dewi Embun Permata Dini',
      eyebrow: '05 | KEAHLIAN & TOOLS',
      heroLead: 'Keahlian, Tools &',
      heroAccent: 'Teknologi.',
      heroDescription: 'Kompetensi, perangkat kerja, dan teknologi yang mendukung proses analisis, perancangan, serta pengembangan solusi sistem informasi berbasis web.',
      jumpNavLabel: 'Navigasi bagian keahlian',
      jumpSkills: 'Keahlian', jumpTools: 'Tools', jumpTechnologies: 'Teknologi',
      statsSkills: 'Keahlian', statsTechnologies: 'Teknologi',
      sectionSkills: 'SKILLS', sectionTechnologies: 'TECHNOLOGIES',
      skillsTitle: 'Keahlian Utama.', toolsTitle: 'Tools yang Saya Gunakan.',
      technologiesTitle: 'Teknologi Pengembangan.',
      toolGroup1: 'Development Tools', toolGroup2: 'Productivity & Documentation',
      techGroup1: 'Programming Languages', techGroup2: 'Database',
      techGroup3: 'Frameworks & Libraries', techGroup4: 'Development Environment'
    },
    en: {
      pageTitle: 'Skills & Tools | Dewi Embun Permata Dini',
      eyebrow: '05 | SKILLS & TOOLS',
      heroLead: 'Skills, Tools &',
      heroAccent: 'Technologies.',
      heroDescription: 'A collection of skills, tools, and technologies that support my approach to analyzing, designing, and developing web-based information systems.',
      jumpNavLabel: 'Skills section navigation',
      jumpSkills: 'Skills', jumpTools: 'Tools', jumpTechnologies: 'Technologies',
      statsSkills: 'Skills', statsTechnologies: 'Technologies',
      sectionSkills: 'SKILLS', sectionTechnologies: 'TECHNOLOGIES',
      skillsTitle: 'Core Skills.', toolsTitle: 'Tools I Use.',
      technologiesTitle: 'Development Technologies.',
      toolGroup1: 'Development Tools', toolGroup2: 'Productivity & Documentation',
      techGroup1: 'Programming Languages', techGroup2: 'Database',
      techGroup3: 'Frameworks & Libraries', techGroup4: 'Development Environment'
    }
  };

  function chosenLanguage() {
    if (window.DewiPortfolio && typeof window.DewiPortfolio.getLanguage === 'function') {
      return window.DewiPortfolio.getLanguage();
    }
    return document.documentElement.lang === 'en' ? 'en' : 'id';
  }

  function translate(lang) {
    const data = CONTENT[lang] || CONTENT.id;
    document.querySelectorAll('[data-skl-i18n]').forEach(function (item) {
      const text = data[item.dataset.sklI18n];
      if (typeof text === 'string') item.textContent = text;
    });
    document.querySelectorAll('[data-skl-i18n-aria]').forEach(function (item) {
      const text = data[item.dataset.sklI18nAria];
      if (typeof text === 'string') item.setAttribute('aria-label', text);
    });
    document.title = data.pageTitle;
  }

  function initLogos() {
    document.querySelectorAll('.skl-tool-image').forEach(function (img) {
      const box = img.closest('.skl-logo-stage');
      if (!box) return;
      const show = function () { if (img.naturalWidth > 0) box.classList.add('has-logo'); };
      img.addEventListener('load', show);
      img.addEventListener('error', function () { box.classList.remove('has-logo'); });
      if (img.complete) show();
    });
  }

  function initReveal() {
    const page = document.getElementById('skills');
    if (!page || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = page.querySelectorAll('[data-skl-reveal]');
    const desktop = !window.matchMedia('(max-width: 760px)').matches;
    const root = desktop ? document.getElementById('main-content') : null;
    const observer = new IntersectionObserver(function (entries, observerInstance) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('skl-visible');
        observerInstance.unobserve(entry.target);
      });
    }, { root: root, threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
    page.classList.add('skl-motion-ready');
    items.forEach(function (item) { observer.observe(item); });
  }

  document.addEventListener('dewi:languagechange', function (event) {
    translate(event.detail && event.detail.language);
  });
  document.addEventListener('DOMContentLoaded', function () {
    translate(chosenLanguage());
    initLogos();
    initReveal();
  });
})();
