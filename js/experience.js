
"use strict";

/* =====================================================
   DEWI PORTFOLIO | EXPERIENCE MODULE
   Role Gallery | Lightbox | Bilingual | Animation
===================================================== */

const EXPERIENCE_TRANSLATIONS = {

    id: {

        pageEyebrow: "03 | EXPERIENCE",
        pageHeading: "Pengalaman Proyek.",

        projectTwoName:
            "Sistem Rekapitulasi dan Klasterisasi Aktivitas Media Sosial",

        period: "November 2026 – Sekarang",
        status: "Dalam Pengembangan",

        overviewHeading: "Ringkasan Proyek",
        highlightsHeading: "Keunggulan Sistem",
        galleryHeading: "Jelajahi Tampilan Sistem",
        galleryInstruction:
            "Pilih peran untuk melihat tampilannya.",
        enlargeImage: "Perbesar Gambar",
        closeImage: "Tutup Gambar",
        contributionsHeading: "Kontribusi Saya",
        timelineHeading: "Perjalanan Pengembangan",

        overviewOne:
            "ProcureSync merupakan proyek independen yang saya inisiasi, rancang, dan kembangkan secara mandiri dari tahap awal.",

        overviewTwo:
            "Proyek ini diawali dengan riset mengenai ekosistem procurement dalam inbound logistics untuk memahami alur proses bisnis secara menyeluruh. Saya kemudian mengidentifikasi dan mengelompokkan berbagai permasalahan sebagai dasar dalam merancang solusi sistem yang sesuai dengan kebutuhan proses bisnis.",

        overviewThree:
            "Sebelum memasuki tahap implementasi, saya menyusun blueprint sistem yang mencakup analisis kebutuhan pengguna, perancangan UI/UX, struktur database, dan Software Requirements Specification (SRS).",

        overviewFour:
            "Saat ini, ProcureSync masih dalam tahap pengembangan aplikasi dan penyempurnaan fitur.",

        multiUserHeading:
            "Sistem Pengadaan Terintegrasi Berbasis Peran",

        multiUserOne:
            "ProcureSync dirancang untuk mendukung proses pengadaan barang melalui ruang kerja yang disesuaikan dengan peran dan kewenangan setiap pengguna.",

        multiUserTwo:
            "Pengajuan Purchase Requisition (PR) terutama dilakukan oleh bagian Produksi untuk memenuhi kebutuhan operasional. Selain itu, Manajer Divisi juga memiliki kewenangan untuk mengajukan kebutuhan barang bagi divisinya masing-masing.",

        multiUserThree:
            "Seluruh proses pengadaan melibatkan beberapa peran utama, yaitu Purchasing, Finance, Warehouse, dan Super Admin. Setiap peran memiliki fungsi dan tanggung jawab yang disesuaikan dengan tahapan proses pengadaan.",

        multiUserFour:
            "Untuk mendukung kemudahan penggunaan, ProcureSync juga menyediakan antarmuka dalam dua bahasa, yaitu Bahasa Indonesia dan English.",

        inboundOne:
            "ProcureSync dikembangkan dengan fokus pada alur pengadaan barang dan <em>inbound logistics</em>, mulai dari pengajuan kebutuhan, pemesanan ke vendor, penerimaan barang fisik di gudang, hingga verifikasi dokumen sebelum pembayaran.",

        inboundTwo:
            "Salah satu mekanisme utama yang diterapkan adalah <strong><em>three-way matching</em></strong>, yaitu pencocokan tiga dokumen lintas divisi: <strong>Purchase Order (PO)</strong> dari Purchasing, <strong>Goods Receipt Note (GRN)</strong> dari Warehouse, dan <strong>Invoice Vendor</strong> pada Finance, untuk memastikan kesesuaian kuantitas, harga, dan akurasi data transaksi sebelum pembayaran disetujui.",

        contributionOne:
            "Mempelajari ekosistem procurement dan alur inbound logistics secara menyeluruh.",

        contributionTwo:
            "Mengidentifikasi, menganalisis, dan mengelompokkan permasalahan berdasarkan kebutuhan proses bisnis.",

        contributionThree:
            "Menyusun blueprint sistem, menganalisis kebutuhan pengguna, serta merancang UI/UX, struktur database, dan SRS.",

        contributionFour:
            "Mengimplementasikan rancangan sistem ke dalam aplikasi secara bertahap.",

        timelineOne: "Riset Proses Bisnis",
        timelineTwo: "Perancangan Sistem",
        timelineThree: "Pengembangan & Penyempurnaan"

    },

    en: {

        pageEyebrow: "03 | EXPERIENCE",
        pageHeading: "Project Experience",

        projectTwoName:
            "Social Media Activity Reporting and Clustering System",

        period: "November 2026 – Present",
        status: "In Development",

        overviewHeading: "Project Overview",
        highlightsHeading: "Project Highlights",
        galleryHeading: "Explore System Interfaces",
        galleryInstruction:
            "Select a role to explore its interface.",
        enlargeImage: "Enlarge Image",
        closeImage: "Close Image",
        contributionsHeading: "My Contributions",
        timelineHeading: "Development Timeline",

        overviewOne:
            "ProcureSync is an independent project that I initiated, designed, and have been developing from the ground up.",

        overviewTwo:
            "The project began with research into the procurement ecosystem within inbound logistics to gain a comprehensive understanding of its end-to-end business processes. I then identified and categorized various operational challenges as the foundation for designing solutions that address business process requirements.",

        overviewThree:
            "Before moving into implementation, I developed a system blueprint covering user requirements analysis, UI/UX design, database structure, and Software Requirements Specification (SRS).",

        overviewFour:
            "ProcureSync is currently under active development, with several features still being refined.",

        multiUserHeading:
            "Integrated Role-Based Procurement System",

        multiUserOne:
            "ProcureSync is designed to support procurement processes through dedicated workspaces tailored to each user's role and access permissions.",

        multiUserTwo:
            "Purchase Requisitions (PRs) are primarily initiated by the Production department to meet operational needs. In addition, Division Managers are also authorized to submit purchase requests for the needs of their respective divisions.",

        multiUserThree:
            "The overall procurement process involves several key roles, including Purchasing, Finance, Warehouse, and Super Admin. Each role has specific functions and responsibilities aligned with different stages of the procurement process.",

        multiUserFour:
            "To improve usability, ProcureSync also provides a bilingual interface in Indonesian and English.",

        inboundOne:
            "ProcureSync is developed with a focus on procurement workflows and <em>inbound logistics</em>, covering the process from purchase requisitions and vendor ordering to physical goods receiving at the warehouse and document verification before payment.",

        inboundTwo:
            "One of its key mechanisms is <strong><em>three-way matching</em></strong>, which compares three documents across departments: the <strong>Purchase Order (PO)</strong> from Purchasing, the <strong>Goods Receipt Note (GRN)</strong> from Warehouse, and the <strong>Vendor Invoice</strong> handled by Finance. This process helps verify quantity, pricing, and transaction data accuracy before payment approval.",

        contributionOne:
            "Studied the procurement ecosystem and end-to-end inbound logistics processes.",

        contributionTwo:
            "Identified, analyzed, and categorized operational challenges based on business process requirements.",

        contributionThree:
            "Developed the system blueprint, analyzed user requirements, and designed the UI/UX, database structure, and SRS.",

        contributionFour:
            "Implementing the system design into an application through incremental development.",

        timelineOne: "Business Process Research",
        timelineTwo: "System Design",
        timelineThree: "Development & Refinement"

    }

};


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const experiencePage =
        document.getElementById("experience");

    if (!experiencePage) return;

    const roleButtons =
        experiencePage.querySelectorAll(".exp-role-button");

    const previewImage =
        document.getElementById("exp-preview-image");

    const enlargeButton =
        document.getElementById("exp-image-enlarge");

    const imageModal =
        document.getElementById("exp-image-modal");

    const modalImage =
        document.getElementById("exp-modal-image");

    const modalClose =
        document.getElementById("exp-modal-close");

    const mainContent =
        document.getElementById("main-content");

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    let currentLanguage = "id";


    /* =================================================
       LANGUAGE
    ================================================= */

    function applyExperienceLanguage(language) {

        if (!EXPERIENCE_TRANSLATIONS[language]) return;

        currentLanguage = language;

        const dictionary =
            EXPERIENCE_TRANSLATIONS[language];


        experiencePage
            .querySelectorAll("[data-exp-i18n]")
            .forEach(function (element) {

                const key = element.dataset.expI18n;

                if (dictionary[key] !== undefined) {

                    element.textContent = dictionary[key];

                }

            });


        // HTML translations are limited to trusted
        // static content defined above.

        experiencePage
            .querySelectorAll("[data-exp-i18n-html]")
            .forEach(function (element) {

                const key = element.dataset.expI18nHtml;

                if (dictionary[key] !== undefined) {

                    element.innerHTML = dictionary[key];

                }

            });


        experiencePage
            .querySelectorAll("[data-exp-i18n-aria]")
            .forEach(function (element) {

                const key = element.dataset.expI18nAria;

                if (dictionary[key] !== undefined) {

                    element.setAttribute(
                        "aria-label",
                        dictionary[key]
                    );

                }

            });

    }


    // The shared header is loaded asynchronously. Listen for its
    // language-change event rather than binding to not-yet-inserted buttons.
    document.addEventListener("dewi:languagechange", function (event) {
        applyExperienceLanguage(event.detail.language);
    });

    currentLanguage = window.DewiPortfolio
        ? window.DewiPortfolio.getLanguage()
        : (document.documentElement.lang === "en" ? "en" : "id");


    /* =================================================
       ROLE-BASED SCREENSHOT GALLERY
    ================================================= */

    function selectRole(button, animate = true) {

        const fileName = button.dataset.expImage;

        const roleName = button.dataset.expRole;

        roleButtons.forEach(function (item) {

            const selected = item === button;

            item.classList.toggle(
                "is-selected",
                selected
            );

            item.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });


        previewImage.classList.remove("is-switching");

        // Restart CSS animation when image changes.
        void previewImage.offsetWidth;

        previewImage.src =
            "assets/images/" + fileName;

        previewImage.alt =
            "ProcureSync - " + roleName;


        if (animate && !reducedMotion.matches) {

            previewImage.classList.add("is-switching");

        }

    }


    roleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectRole(button);

        });

    });


    /* =================================================
       IMAGE LIGHTBOX
    ================================================= */

    if (
        enlargeButton &&
        imageModal &&
        modalImage
    ) {

        enlargeButton.addEventListener(
            "click",
            function () {

                modalImage.src = previewImage.src;

                modalImage.alt = previewImage.alt;

                if (!imageModal.open) {

                    imageModal.showModal();

                }

            }
        );

    }


    if (modalClose && imageModal) {

        modalClose.addEventListener(
            "click",
            function () {

                imageModal.close();

            }
        );

    }


    // Close when the dark backdrop is clicked.

    if (imageModal) {

        imageModal.addEventListener(
            "click",
            function (event) {

                if (event.target === imageModal) {

                    imageModal.close();

                }

            }
        );

    }


    // Close modal if the visitor changes section.

    document
        .querySelectorAll(".nav-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (imageModal && imageModal.open) {

                        imageModal.close();

                    }

                }
            );

        });


    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    function initializeExperienceAnimations() {

        const elements =
            experiencePage.querySelectorAll(
                "[data-exp-reveal]"
            );

        if (
            reducedMotion.matches ||
            !("IntersectionObserver" in window)
        ) {

            return;

        }


        experiencePage.classList.add(
            "exp-motion-ready"
        );


        const isMobile =
            window.matchMedia(
                "(max-width: 760px)"
            ).matches;


        const observer = new IntersectionObserver(

            function (entries, currentObserver) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "is-visible"
                    );

                    currentObserver.unobserve(
                        entry.target
                    );

                });

            },

            {
                root: isMobile ? null : mainContent,
                threshold: 0.08,
                rootMargin: "0px 0px -35px 0px"
            }

        );


        elements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* =================================================
       START EXPERIENCE
    ================================================= */

    applyExperienceLanguage(currentLanguage);

    if (roleButtons.length > 0) {

        selectRole(roleButtons[0], false);

    }

    initializeExperienceAnimations();


    console.log(
        "ProcureSync Experience initialized."
    );

});
