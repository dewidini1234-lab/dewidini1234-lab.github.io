"use strict";
/* Contact page translations. Shared navbar, footer, and language switch are not modified. */
(function () {
  const CONTACT = {
    id: {
      pageTitle: 'Kontak | Dewi Embun Permata Dini',
      title: 'Mari Terhubung.',
      description: 'Saya terbuka untuk kesempatan kerja, kolaborasi, maupun diskusi seputar teknologi dan pengembangan sistem. Jika Anda tertarik untuk mengenal lebih jauh tentang saya atau ingin berdiskusi mengenai peluang profesional, silakan hubungi saya melalui kontak berikut.',
      whatsappSubtitle: 'Kirim Pesan',
      emailSubtitle: 'Hubungi via Email',
      githubSubtitle: 'Lihat Proyek Saya',
      linkedinSubtitle: 'Kunjungi Profil',
      thankYou: 'Terima kasih sudah meluangkan waktu untuk mengenal saya melalui portofolio ini.',
      channelsAria: 'Pilihan kanal kontak',
      whatsappAria: 'Buka WhatsApp Dewi di tab baru',
      emailAria: 'Kirim email kepada Dewi Embun Permata Dini',
      githubAria: 'Lihat proyek Dewi melalui GitHub di tab baru',
      linkedinAria: 'Buka profil LinkedIn Dewi di tab baru'
    },
    en: {
      pageTitle: 'Contact | Dewi Embun Permata Dini',
      title: "Let's Connect.",
      description: "I'm open to career opportunities, collaborations, and discussions about technology and system development. If you'd like to learn more about my background or discuss potential opportunities, feel free to reach out through the contacts below.",
      whatsappSubtitle: 'Send a Message',
      emailSubtitle: 'Send an Email',
      githubSubtitle: 'Explore My Projects',
      linkedinSubtitle: 'View My Profile',
      thankYou: 'Thank you for taking the time to explore my portfolio.',
      channelsAria: 'Contact channels',
      whatsappAria: "Open Dewi's WhatsApp in a new tab",
      emailAria: 'Send an email to Dewi Embun Permata Dini',
      githubAria: "Explore Dewi's projects on GitHub in a new tab",
      linkedinAria: "Open Dewi's LinkedIn profile in a new tab"
    }
  };

  function getLanguage() {
    if (window.DewiPortfolio && typeof window.DewiPortfolio.getLanguage === 'function') {
      return window.DewiPortfolio.getLanguage();
    }
    return document.documentElement.lang === 'en' ? 'en' : 'id';
  }

  function translate(language) {
    const dictionary = CONTACT[language] || CONTACT.id;
    document.querySelectorAll('[data-ct-i18n]').forEach(function (element) {
      const value = dictionary[element.dataset.ctI18n];
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-ct-aria]').forEach(function (element) {
      const value = dictionary[element.dataset.ctAria];
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    document.title = dictionary.pageTitle;
  }

  function revealContent() {
    const page = document.getElementById('contact');
    if (!page) return;
    const items = Array.from(page.querySelectorAll('[data-ct-reveal]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    const mobile = window.matchMedia('(max-width: 760px)').matches;
    const root = mobile ? null : document.getElementById('main-content');
    const observer = new IntersectionObserver(function (entries, instance) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('ct-visible');
        instance.unobserve(entry.target);
      });
    }, { root: root, threshold: 0.07, rootMargin: '0px 0px -12px 0px' });
    page.classList.add('ct-motion-ready');
    items.forEach(function (item) { observer.observe(item); });
  }

  document.addEventListener('dewi:languagechange', function (event) {
    translate(event.detail && event.detail.language);
  });
  document.addEventListener('DOMContentLoaded', function () {
    translate(getLanguage());
    revealContent();
  });
})();
