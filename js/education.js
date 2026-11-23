"use strict";

/* =============================================================
   DEWI. / EDUCATION
   Only runs on education.html.
   Exact approved ID/EN academic, thesis and campus descriptions.
   Integrates with shared js/common.js and its persistent language.
============================================================= */

(function () {
    const EDU_TRANSLATIONS = {
        id: {
            heroEyebrow: "02 | PERJALANAN AKADEMIK",
            heroTitle: "Pendidikan &",
            heroAccent: "Perjalanan Akademik.",
            heroDescription: "Perjalanan belajar, teknologi, dan pengembangan diri.",
            jumpNavLabel: "Bagian halaman Pendidikan",
            jumpAcademic: "Pendidikan",
            jumpCampus: "Kegiatan Kampus",
            jumpInternship: "Magang",
            academicKicker: "01 / ACADEMIC JOURNEY",
            academicTitle: "Jejak Pendidikan.",
            uniCategory: "Pendidikan Sarjana (S1)",
            uniProgram: "Program Studi Sistem Informasi",
            uniDescription: "Menyelesaikan pendidikan Sarjana Sistem Informasi di Universitas Mandiri dengan IPK 3,51 dari 4,00 dan meraih predikat Cum Laude. Selama perkuliahan, mempelajari analisis dan perancangan sistem informasi, pengembangan aplikasi, pengelolaan basis data, serta pemanfaatan teknologi informasi untuk menjawab kebutuhan organisasi.",
            statsLabel: "Informasi akademik",
            gpaLabel: "IPK",
            gpaValue: "3,51 / 4,00",
            honorsLabel: "Predikat",
            graduatedLabel: "Kelulusan",
            graduatedValue: "Oktober 2026",
            degreeLabel: "Gelar:",
            degreeValue: "Sarjana Komputer (S.Kom.)",
            thesisKicker: "FINAL RESEARCH PROJECT",
            thesisHeading: "Skripsi",
            thesisTitleLabel: "Judul:",
            thesisTitle: "Implementasi Algoritma K-Means untuk Klasterisasi Aktivitas Media Sosial Polsek pada Sistem Informasi Berbasis Web di Humas Polres Subang.",
            thesisDescription: "Mengembangkan sistem informasi berbasis web untuk mendukung rekapitulasi dan analisis aktivitas media sosial dari 21 Polsek di wilayah Polres Subang. Penelitian ini menerapkan algoritma K-Means untuk mengelompokkan tingkat aktivitas berdasarkan data publikasi yang telah direkapitulasi, menggunakan normalisasi Min-Max serta Davies-Bouldin Index (DBI) untuk mengevaluasi hasil klasterisasi.",
            smkCategory: "Pendidikan Kejuruan (SMK)",
            smkProgram: "Rekayasa Perangkat Lunak (RPL)",
            smkDescription: "Menyelesaikan pendidikan kejuruan pada bidang Rekayasa Perangkat Lunak yang membangun dasar pengetahuan dan keterampilan dalam pemrograman serta teknologi informasi. Selama masa pendidikan, memperoleh pengalaman praktik di lingkungan industri melalui kegiatan Praktik Kerja Lapangan (PKL) pada bagian Human Resources & General Affairs (HRGA).",
            smkGradeLabel: "Nilai Rata-rata",
            campusKicker: "02 / CAMPUS INVOLVEMENT",
            campusTitle: "Organisasi & Kepanitiaan.",
            himaCategory: "Himpunan Mahasiswa – Bidang Hubungan Media",
            himaRole: "Anggota Hubungan Media",
            himaDescription: "Berpartisipasi sebagai anggota Bidang Hubungan Media dalam Himpunan Mahasiswa. Berkontribusi dalam mendokumentasikan kegiatan organisasi serta mendesain dan mengedit poster untuk memperingati hari-hari besar dan memenuhi kebutuhan publikasi Himpunan Mahasiswa.",
            pkkmbCategory: "Kepanitiaan PKKMB 2023",
            pkkmbRole: "Anggota Panitia Umum",
            pkkmbDescription: "Berpartisipasi sebagai anggota panitia umum dalam kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) tahun 2023. Membantu persiapan umum dan pelaksanaan kegiatan di lapangan untuk mendukung kelancaran program.",
            internshipKicker: "03 | PENGALAMAN MAGANG",
            internshipTitle: "Ringkasan Pengalaman Magang.",
            internshipPolresName: "Polres Subang",
            internshipPolresRole: "Public Relations Intern",
            internshipPolresDate: "Juli–September 2025",
            internshipHrgaName: "PT Subang Autocomp Indonesia",
            internshipHrgaRole: "HRGA Intern",
            internshipHrgaDate: "Juli–Oktober 2019"
        },
        en: {
            heroEyebrow: "02 | ACADEMIC JOURNEY",
            heroTitle: "Education &",
            heroAccent: "Academic Growth.",
            heroDescription: "A journey through learning, technology, and personal growth.",
            jumpNavLabel: "Education page sections",
            jumpAcademic: "Education",
            jumpCampus: "Campus Involvement",
            jumpInternship: "Internships",
            academicKicker: "01 / ACADEMIC JOURNEY",
            academicTitle: "Educational Background.",
            uniCategory: "Bachelor's Degree",
            uniProgram: "Bachelor's Degree in Information Systems",
            uniDescription: "Graduated with a Bachelor's degree in Information Systems from Universitas Mandiri, achieving a GPA of 3.51 out of 4.00 and earning Cum Laude honors. Academic coursework covered information systems analysis and design, application development, database management, and the use of information technology to address organizational needs.",
            statsLabel: "Academic information",
            gpaLabel: "GPA",
            gpaValue: "3.51 / 4.00",
            honorsLabel: "Honors",
            graduatedLabel: "Graduated",
            graduatedValue: "October 2026",
            degreeLabel: "Degree:",
            degreeValue: "Bachelor of Computer Science (S.Kom.)",
            thesisKicker: "FINAL RESEARCH PROJECT",
            thesisHeading: "Undergraduate Thesis",
            thesisTitleLabel: "Title:",
            thesisTitle: "Implementation of the K-Means Algorithm for Clustering Police Sector Social Media Activities in a Web-Based Information System at the Public Relations Division of Subang Police Resort.",
            thesisDescription: "Developed a web-based information system to support the reporting and analysis of social media activities across 21 police sectors under Subang Police Resort. The research applied the K-Means algorithm to classify activity levels based on aggregated publication data, using Min-Max normalization and the Davies-Bouldin Index (DBI) for cluster evaluation.",
            smkCategory: "Vocational Education",
            smkProgram: "Software Engineering",
            smkDescription: "Completed vocational education in Software Engineering, building a foundation in programming and information technology. During this period, gained practical industry experience through an internship in the Human Resources & General Affairs (HRGA) department.",
            smkGradeLabel: "Average Grade",
            campusKicker: "02 / CAMPUS INVOLVEMENT",
            campusTitle: "Campus Involvement.",
            himaCategory: "Student Association – Media Relations Division",
            himaRole: "Media Relations Member",
            himaDescription: "Served as a member of the Student Association's Media Relations Division. Contributed to documenting organizational activities and designing and editing posters for commemorative occasions and student association publications.",
            pkkmbCategory: "2023 New Student Orientation Committee",
            pkkmbRole: "General Committee Member",
            pkkmbDescription: "Served as a general committee member for the 2023 New Student Orientation Program (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru – PKKMB). Assisted with general event preparations and on-site activities to help ensure the program ran smoothly.",
            internshipKicker: "03 | INTERNSHIP HIGHLIGHTS",
            internshipTitle: "Internship Highlights.",
            internshipPolresName: "Subang Police Resort (Polres Subang)",
            internshipPolresRole: "Public Relations Intern",
            internshipPolresDate: "July–September 2025",
            internshipHrgaName: "PT Subang Autocomp Indonesia",
            internshipHrgaRole: "HRGA Intern",
            internshipHrgaDate: "July–October 2019"
        }
    };

    function applyEducationLanguage(language) {
        const selected = EDU_TRANSLATIONS[language] ? language : "id";
        const dictionary = EDU_TRANSLATIONS[selected];

        document.querySelectorAll("[data-edu-i18n]").forEach(function (element) {
            const translated = dictionary[element.dataset.eduI18n];
            if (typeof translated === "string") element.textContent = translated;
        });
        document.querySelectorAll("[data-edu-i18n-aria]").forEach(function (element) {
            const translated = dictionary[element.dataset.eduI18nAria];
            if (typeof translated === "string") element.setAttribute("aria-label", translated);
        });
        document.title = (selected === "en" ? "Education" : "Pendidikan") + " | Dewi Embun Permata Dini";
    }

    function initEducationReveal() {
        const page = document.querySelector("#education .edu-page");
        if (!page) return;
        const blocks = Array.from(page.querySelectorAll("[data-edu-reveal]"));
        if (!blocks.length) return;
        if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return; // Never hide content when reduced motion or observer unavailable.
        }

        const root = window.matchMedia("(max-width: 760px)").matches
            ? null
            : document.querySelector("#main-content");
        const observer = new IntersectionObserver(function (entries, currentObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("edu-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { root: root, threshold: 0.07, rootMargin: "0px 0px -22px 0px" });

        page.classList.add("edu-motion-ready");
        blocks.forEach(function (block) { observer.observe(block); });
    }

    document.addEventListener("dewi:languagechange", function (event) {
        const language = event.detail && event.detail.language;
        applyEducationLanguage(language);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const saved = window.DewiPortfolio && window.DewiPortfolio.getLanguage
            ? window.DewiPortfolio.getLanguage() : "id";
        applyEducationLanguage(saved);
        initEducationReveal();
    });
})();
