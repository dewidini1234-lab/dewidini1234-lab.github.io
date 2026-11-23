
"use strict";

/* =====================================================
   DEWI PERSONAL PORTFOLIO
   Bilingual System & Interactive Navigation
   HTML5 | CSS3 | Vanilla JavaScript
===================================================== */


/* =====================================================
   01. WEBSITE CONFIGURATION
===================================================== */

// Masukkan alamat website asli ketika sudah tersedia.

const WEBSITE_URLS = {
    website01: "",
    website02: ""
};

// Judul resmi skripsi
const THESIS_TITLE =
    "Sistem Informasi Analisis Aktivitas Media Sosial Polres Subang";


/* =====================================================
   02. TRANSLATION DICTIONARY
===================================================== */

const TRANSLATIONS = {

    /* =================================================
       BAHASA INDONESIA
    ================================================= */

    id: {

        pageTitle:
            "Dewi Embun Permata Dini | Portofolio Profesional",

        languageLabel: "BAHASA",
        languageSwitcherLabel: "Pilihan bahasa",
        selectIndonesian: "Pilih Bahasa Indonesia",
        selectEnglish: "Ganti ke Bahasa Inggris",

        brandHomeAria: "Kembali ke Beranda",
        menuOpen: "Buka menu navigasi",
        menuClose: "Tutup menu navigasi",
        mainNavigationLabel: "Navigasi utama",
        professionalFocusLabel:
            "Bidang profesional yang diminati",

        /* NAVIGATION */

        navHome: "Beranda",
        navAbout: "Tentang Saya",
        navExperience: "Pengalaman",
        navEducation: "Pendidikan",
        navSkills: "Keahlian & Tools",
        navProjects: "Proyek",
        navCertifications: "Sertifikasi",
        navContact: "Kontak",

        downloadCV: "Unduh CV",


        /* =============================================
           HOME - APPROVED
        ============================================= */

        heroLabel: "LULUSAN SISTEM INFORMASI",
        heroGreeting: "Halo, saya",

        taglineLine1: "Merancang Sistem,",
        taglineLine2: "Membangun Solusi Digital.",

        heroDescription:
            "Lulusan Sistem Informasi dari Universitas Mandiri yang tertarik pada IT Project Development, System Analysis, dan System Design untuk mengembangkan solusi digital sesuai kebutuhan nyata.",

        buttonWebsite01: "Jelajahi Website 01",
        buttonWebsite02: "Jelajahi Website 02",

        websiteLinkNote:
            "Tautan website proyek akan dihubungkan di sini.",

        basedIn: "Berbasis di Indonesia",
        degreeField: "Sistem Informasi",

        profileAlt:
            "Foto profil Dewi Embun Permata Dini",


        /* HOME - PROFESSIONAL FOCUS */

        focusEyebrow: "BIDANG MINAT PROFESIONAL",

        focusTitlePrefix: "Bidang yang Saya",
        focusTitleAccent: "Minati.",

        focusDescription:
            "Saya tertarik menghubungkan kebutuhan bisnis dengan analisis, perancangan, dan penerapan solusi teknologi.",

        focus1Description:
            "Tertarik mengembangkan proyek teknologi, mulai dari memahami kebutuhan hingga proses implementasi.",

        focus2Description:
            "Memahami kebutuhan pengguna dan proses bisnis, mengidentifikasi masalah, serta merumuskannya menjadi kebutuhan sistem.",

        focus3Description:
            "Merancang struktur sistem, alur kerja aplikasi, kebutuhan fungsional, dan database berdasarkan kebutuhan yang telah dianalisis.",

        focus4Description:
            "Mencari peluang pemanfaatan teknologi untuk membuat proses bisnis lebih efektif dan terstruktur.",


        /* =============================================
           ABOUT ME - INTRODUCTION
        ============================================= */

        aboutEyebrow:
            "01 | INTRODUCTION",

        aboutTitle:
            "Mengenal Saya.",

        aboutIntro:
            "Saya Dewi Embun Permata Dini, S.Kom., lulusan Sistem Informasi Universitas Mandiri. Saya memiliki ketertarikan pada pengembangan sistem informasi, analisis kebutuhan bisnis, dan perancangan solusi teknologi untuk mendukung proses kerja yang lebih efektif.",

        aboutProfileAlt:
            "Foto Dewi Embun Permata Dini pada halaman About Me.",

        aboutPhotoLabel:
            "LULUSAN SISTEM INFORMASI",

        aboutEducationLabel:
            "PENDIDIKAN",

        aboutDegree:
            "Sistem Informasi",

        aboutUniversity:
            "Universitas Mandiri",


        /* =============================================
           ABOUT ME - MY PERSPECTIVE
        ============================================= */

        aboutIdentityLabel:
            "02 | MY PERSPECTIVE",

        aboutIdentityTitle:
            "Teknologi Dimulai dari Memahami Kebutuhan.",

        aboutIdentityDescription:
            "Saya percaya bahwa teknologi bukan sekadar tentang membangun aplikasi, tetapi tentang bagaimana sebuah sistem dapat menjawab kebutuhan dan menyelesaikan permasalahan. Itulah mengapa saya selalu berusaha memahami proses bisnis, kebutuhan pengguna, dan permasalahan yang ada sebelum menentukan solusi.",


        /* =============================================
           ABOUT ME - MY APPROACH
        ============================================= */

        aboutApproachLabel:
            "03 | MY APPROACH",

        aboutApproachTitle:
            "Dari Analisis Menjadi Solusi.",

        aboutApproachAria:
            "Understand | Analyze | Design | Develop",

        aboutApproachDescription:
            "Saya menerapkan pendekatan yang terstruktur dalam mengembangkan sistem, mulai dari memahami kebutuhan, menganalisis proses, merancang solusi, hingga mengimplementasikannya menjadi sebuah sistem yang fungsional.",


        /* =============================================
           ABOUT ME - CAREER DIRECTION
        ============================================= */

        aboutCareerLabel:
            "04 | CAREER DIRECTION",

        aboutCareerTitle:
            "Membangun Langkah di Dunia IT.",

        aboutCareerDescription:
            "Saya ingin mengembangkan karier di bidang IT Project Development, System Analysis, dan IT Business Analysis. Saya tertarik pada peran yang menghubungkan kebutuhan bisnis dengan solusi teknologi, serta memberikan kesempatan untuk terlibat dalam pengembangan dan peningkatan sistem secara berkelanjutan.",


        /* =============================================
           ABOUT ME - FEATURED PROJECT
        ============================================= */

        aboutSystemEyebrow:
            "05 | FEATURED PROJECT",

        aboutSystemTitle:
            "Mengubah Permasalahan Menjadi Solusi Digital.",

        aboutSystemIntro:
            "Salah satu proyek yang merepresentasikan kemampuan saya dalam pengembangan sistem informasi dan analisis data adalah:",

        aboutSystemName:
            "Sistem Rekapitulasi dan Klasterisasi Aktivitas Media Sosial",

        aboutSystemAlt:
            "Tampilan Sistem Rekapitulasi Viralisasi Sosial Media Humas Polres Subang.",

        aboutThesisBadge:
            "PROYEK SKRIPSI",

        aboutSystemCategory:
            "SISTEM INFORMASI",

        aboutThesisLabel:
            "Skripsi:",

        aboutSystemDescription:
            "Dikembangkan sebagai proyek skripsi untuk membantu proses rekapitulasi dan pemantauan aktivitas media sosial Polsek di lingkungan Humas Polres Subang. Sistem ini mengintegrasikan pengelolaan data aktivitas media sosial dengan algoritma K-Means untuk mengelompokkan aktivitas berdasarkan tingkat viralisasi.",


        /* FOOTER */

        footerRights: "Hak Cipta Dilindungi.",

        footerDesigned:
            "Dirancang dengan ♡ dan tujuan.",


        /* INTERACTION MESSAGES */

        websiteUrlMissing:
            "URL Website {number} belum diatur. Silakan isi di script.js.",

        websiteUrlInvalid:
            "Alamat website tidak valid.",

        websiteProtocolInvalid:
            "Gunakan URL dengan protokol HTTP atau HTTPS.",

        websitePopupBlocked:
            "Browser memblokir tab baru. Izinkan pop-up untuk website ini.",

        languageChanged:
            "Bahasa diubah ke Bahasa Indonesia."

    },


    /* =================================================
       ENGLISH
    ================================================= */

    en: {

        pageTitle:
            "Dewi Embun Permata Dini | Professional Portfolio",

        languageLabel: "LANGUAGE",
        languageSwitcherLabel: "Language selection",
        selectIndonesian: "Switch to Bahasa Indonesia",
        selectEnglish: "Select English",

        brandHomeAria: "Return to Home",
        menuOpen: "Open navigation menu",
        menuClose: "Close navigation menu",
        mainNavigationLabel: "Main navigation",
        professionalFocusLabel:
            "Professional areas of interest",

        /* NAVIGATION */

        navHome: "Home",
        navAbout: "About Me",
        navExperience: "Experience",
        navEducation: "Education",
        navSkills: "Skills & Tools",
        navProjects: "Projects",
        navCertifications: "Certifications",
        navContact: "Contact",

        downloadCV: "Download CV",


        /* =============================================
           HOME - APPROVED
        ============================================= */

        heroLabel: "INFORMATION SYSTEMS GRADUATE",
        heroGreeting: "Hello, I'm",

        taglineLine1: "Designing Systems,",
        taglineLine2: "Building Digital Solutions.",

        heroDescription:
            "An Information Systems graduate from Universitas Mandiri interested in IT Project Development, System Analysis, and System Design, with a focus on developing digital solutions that address real-world needs.",

        buttonWebsite01: "Explore Website 01",
        buttonWebsite02: "Explore Website 02",

        websiteLinkNote:
            "Project website links will be connected here.",

        basedIn: "Based in Indonesia",
        degreeField: "Information Systems",

        profileAlt:
            "Profile photo of Dewi Embun Permata Dini",


        /* HOME - PROFESSIONAL FOCUS */

        focusEyebrow:
            "PROFESSIONAL AREAS OF INTEREST",

        focusTitlePrefix:
            "My Areas of",

        focusTitleAccent:
            "Interest.",

        focusDescription:
            "I am interested in connecting business needs with system analysis, system design, and technology implementation.",

        focus1Description:
            "Interested in developing technology projects, from understanding requirements to implementation.",

        focus2Description:
            "Understanding user needs and business processes, identifying problems, and translating them into system requirements.",

        focus3Description:
            "Designing system structures, application workflows, functional requirements, and databases based on analyzed needs.",

        focus4Description:
            "Exploring technology-driven opportunities to make business processes more effective and structured.",


        /* =============================================
           ABOUT ME - INTRODUCTION
        ============================================= */

        aboutEyebrow:
            "01 | INTRODUCTION",

        aboutTitle:
            "Get to Know Me.",

        aboutIntro:
            "I'm Dewi Embun Permata Dini, a graduate in Information Systems from Universitas Mandiri. I'm interested in IT project development, business requirements analysis, and system design to create technology solutions that improve business processes.",

        aboutProfileAlt:
            "Portrait of Dewi Embun Permata Dini on the About Me page.",

        aboutPhotoLabel:
            "INFORMATION SYSTEMS GRADUATE",

        aboutEducationLabel:
            "EDUCATIONAL BACKGROUND",

        aboutDegree:
            "Information Systems",

        aboutUniversity:
            "Universitas Mandiri",


        /* =============================================
           ABOUT ME - MY PERSPECTIVE
        ============================================= */

        aboutIdentityLabel:
            "02 | MY PERSPECTIVE",

        aboutIdentityTitle:
            "Technology Starts with Understanding.",

        aboutIdentityDescription:
            "I believe technology is not just about building applications. It's about creating systems that address real needs and solve actual problems. That's why I focus on understanding business processes, user requirements, and existing challenges before developing a solution.",


        /* =============================================
           ABOUT ME - MY APPROACH
        ============================================= */

        aboutApproachLabel:
            "03 | MY APPROACH",

        aboutApproachTitle:
            "Turning Analysis into Solutions.",

        aboutApproachAria:
            "Understand | Analyze | Design | Develop",

        aboutApproachDescription:
            "I follow a structured approach to system development, starting with understanding requirements, analyzing processes, designing solutions, and implementing them into functional systems.",


        /* =============================================
           ABOUT ME - CAREER DIRECTION
        ============================================= */

        aboutCareerLabel:
            "04 | CAREER DIRECTION",

        aboutCareerTitle:
            "Building My Career in IT.",

        aboutCareerDescription:
            "I'm looking to grow my career in IT Project Development, System Analysis, and IT Business Analysis. I'm particularly interested in roles that connect business needs with technology solutions and contribute to continuous system improvement.",


        /* =============================================
           ABOUT ME - FEATURED PROJECT
        ============================================= */

        aboutSystemEyebrow:
            "05 | FEATURED PROJECT",

        aboutSystemTitle:
            "Turning Problems into Digital Solutions.",

        aboutSystemIntro:
            "One of my projects that demonstrates my experience in system development and data analysis is:",

        aboutSystemName:
            "Social Media Activity Reporting and Clustering System",

        aboutSystemAlt:
            "Screenshot of the social media activity reporting system developed for Subang Police Public Relations.",

        aboutThesisBadge:
            "THESIS PROJECT",

        aboutSystemCategory:
            "INFORMATION SYSTEM",

        aboutThesisLabel:
            "Thesis:",

        aboutSystemDescription:
            "Developed as my undergraduate thesis to support the reporting and monitoring of social media activities across police sectors under the Subang Police Public Relations Division. The system integrates social media activity management with the K-Means algorithm to classify activities based on their virality levels.",


        /* FOOTER */

        footerRights: "All Rights Reserved.",

        footerDesigned:
            "Designed with ♡ and purpose.",


        /* INTERACTION MESSAGES */

        websiteUrlMissing:
            "The URL for Website {number} has not been configured. Add it in script.js.",

        websiteUrlInvalid:
            "The website address is invalid.",

        websiteProtocolInvalid:
            "Please use an HTTP or HTTPS website address.",

        websitePopupBlocked:
            "The browser blocked the new tab. Please allow pop-ups for this website.",

        languageChanged:
            "Language changed to English."

    }

};


/* =====================================================
   MULTI-PAGE BOOTSTRAP
   Shared components, language, navigation and reveal.
   Preserve the original translations in TRANSLATIONS.
===================================================== */

let currentLanguage = "id";
try {
    const savedLanguage = localStorage.getItem("dewiPortfolioLanguage");
    if (savedLanguage && TRANSLATIONS[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
} catch (error) {
    // Private browsing and restricted storage are supported.
}

window.DewiPortfolio = {
    getLanguage: () => currentLanguage,
    translate: (key) => TRANSLATIONS[currentLanguage][key] || "",
    websiteUrls: WEBSITE_URLS
};

function applyPortfolioLanguage(language, announce = false) {
    if (!TRANSLATIONS[language]) return;
    currentLanguage = language;
    const dictionary = TRANSLATIONS[language];

    document.documentElement.lang = language;
    document.title = dictionary.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const translation = dictionary[element.dataset.i18n];
        if (translation !== undefined) element.textContent = translation;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
        const translation = dictionary[element.dataset.i18nAria];
        if (translation !== undefined) {
            element.setAttribute("aria-label", translation);
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
        const translation = dictionary[element.dataset.i18nAlt];
        if (translation !== undefined) element.setAttribute("alt", translation);
    });

    const thesisLine = document.querySelector(".about-thesis-name");
    if (thesisLine) {
        thesisLine.textContent = dictionary.aboutThesisLabel + " " + THESIS_TITLE;
    }

    document.querySelectorAll("[data-language]").forEach(function (button) {
        const selected = button.dataset.language === language;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
        const open = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute(
            "aria-label",
            dictionary[open ? "menuClose" : "menuOpen"]
        );
    }

    const websiteNote = document.getElementById("website-link-note");
    if (websiteNote) websiteNote.textContent = dictionary.websiteLinkNote;

    try {
        localStorage.setItem("dewiPortfolioLanguage", language);
    } catch (error) {
        // Language remains active for the current page.
    }

    const languageStatus = document.getElementById("language-status");
    if (announce && languageStatus) {
        languageStatus.textContent = dictionary.languageChanged;
    }

    // Every page-specific module can react to a single language event.
    document.dispatchEvent(new CustomEvent("dewi:languagechange", {
        detail: { language: language }
    }));
}

function initSharedNavigation() {
    const navigation = document.getElementById("primary-navigation");
    const toggle = document.getElementById("menu-toggle");
    const header = document.querySelector(".site-header");
    const currentPage = document.body.dataset.page;

    document.querySelectorAll(".nav-link").forEach(function (item) {
        const selected = item.dataset.section === currentPage;
        item.classList.toggle("active", selected);
        if (selected) item.setAttribute("aria-current", "page");
        else item.removeAttribute("aria-current");
    });

    function closeMenu() {
        if (!toggle || !navigation) return;
        toggle.classList.remove("is-open");
        navigation.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", TRANSLATIONS[currentLanguage].menuOpen);
    }

    if (toggle && navigation) {
        toggle.addEventListener("click", function () {
            const open = toggle.getAttribute("aria-expanded") === "true";
            navigation.classList.toggle("is-open", !open);
            toggle.classList.toggle("is-open", !open);
            toggle.setAttribute("aria-expanded", String(!open));
            toggle.setAttribute("aria-label", TRANSLATIONS[currentLanguage][open ? "menuOpen" : "menuClose"]);
        });
    }

    document.querySelectorAll(".nav-link[href]").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });
    document.addEventListener("click", function (event) {
        if (header && !header.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1100) closeMenu();
    });

    document.querySelectorAll("[data-language]").forEach(function (button) {
        button.addEventListener("click", function () {
            applyPortfolioLanguage(button.dataset.language, true);
        });
    });
}

async function loadSharedComponent(path, mountId) {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Unable to load " + path + ": HTTP " + response.status);
    const html = await response.text();
    const mount = document.getElementById(mountId);
    if (mount) mount.outerHTML = html;
}

function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal="up"]');
    if (!elements.length) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
        elements.forEach(function (element) {
            element.style.animation = "none";
            element.style.opacity = "1";
            element.style.transform = "none";
        });
        return;
    }

    const mainContent = document.getElementById("main-content");
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const observer = new IntersectionObserver(function (entries, currentObserver) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            currentObserver.unobserve(entry.target);
        });
    }, { root: mobile ? null : mainContent, threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    elements.forEach(function (element, index) {
        element.style.animation = "none";
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 700ms ease, transform 700ms ease";
        element.style.transitionDelay = Math.min(index * 100, 300) + "ms";
        observer.observe(element);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // The existing About heading is translatable without changing its HTML.
    const projectHeading = document.querySelector(".about-system-content h3");
    if (projectHeading) projectHeading.dataset.i18n = "aboutSystemName";

    // Translate main content while the shared header/footer are loading.
    applyPortfolioLanguage(currentLanguage);
    initScrollReveal();

    Promise.all([
        loadSharedComponent("components/navbar.html", "site-header-mount"),
        loadSharedComponent("components/footer.html", "site-footer-mount")
    ]).then(function () {
        initSharedNavigation();
        applyPortfolioLanguage(currentLanguage);
        document.dispatchEvent(new CustomEvent("dewi:ready"));
    }).catch(function (error) {
        console.error("Shared website components could not load:", error);
    });
});
