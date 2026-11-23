"use strict";

/* ============================================================
   DEWI PORTFOLIO | PROJECT 02
   All approved bilingual content is isolated in this module.
   Project HTML is loaded separately from components/project02.html
   Gallery is driven by local screenshot filenames, no online API.
============================================================ */

const P02_TRANSLATIONS = {
  "id": {
    "projectName": "Sistem Rekapitulasi dan Klasterisasi Aktivitas Media Sosial",
    "projectSubtitle": "Social Media Activity Reporting and Clustering System",
    "projectContext": "Academic Project | Undergraduate Thesis | System Development",
    "overviewTitle": "Project Overview",
    "overview1": "Sistem Rekapitulasi dan Klasterisasi Aktivitas Media Sosial merupakan proyek skripsi yang saya rancang dan kembangkan untuk mendukung pengelolaan serta analisis aktivitas media sosial pada 21 Polsek di lingkungan Humas Polres Subang.",
    "overview2": "Sistem berbasis web ini mengintegrasikan pengelolaan data, rekapitulasi aktivitas, penyajian statistik, dan analisis menggunakan algoritma K-Means. Data yang terkumpul dapat diolah secara terstruktur untuk menghasilkan informasi dan pengelompokan aktivitas media sosial setiap Polsek.",
    "problemTitle": "Background & Business Problem",
    "problem1": "Sebelum sistem dikembangkan, proses rekapitulasi aktivitas media sosial masih dilakukan secara manual. Tautan unggahan dikumpulkan melalui WhatsApp, kemudian data direkap dan dihitung menggunakan Excel sebelum disusun menjadi laporan untuk diteruskan kepada Polda.",
    "problem2": "Proses tersebut menjadi dasar pengembangan sistem terintegrasi yang menghubungkan pengumpulan data, rekapitulasi, dan analisis dalam satu platform. Dengan pendekatan ini, pengelolaan informasi diharapkan menjadi lebih terstruktur dan mendukung proses pemantauan aktivitas media sosial.",
    "featuresTitle": "Fitur Utama Sistem.",
    "featuresIntro": "Sistem ini mengintegrasikan rekapitulasi aktivitas media sosial, pengolahan data, analisis K-Means, ranking, laporan, serta komunikasi internal untuk mendukung pemantauan aktivitas 21 Polsek di lingkungan Humas Polres Subang.",
    "feature1Title": "Pengelolaan Tautan & Rekapitulasi Aktivitas",
    "feature1Desc": "Mencatat dan merekap jumlah tautan unggahan dari enam platform media sosial berdasarkan Polsek dan periode pelaporan. Sistem menghitung jumlah URL sebagai data aktivitas tanpa mengambil atau menganalisis isi unggahan.",
    "feature2Title": "Dashboard & Statistik Aktivitas",
    "feature2Desc": "Menyajikan ringkasan aktivitas, jumlah publikasi, dan statistik data sesuai hak akses pengguna. Admin Polres dapat memantau data lintas Polsek, sedangkan Admin Polsek hanya melihat informasi milik Polseknya.",
    "feature3Title": "Preprocessing & Normalisasi Data",
    "feature3Desc": "Membentuk dataset bulanan dari rekapitulasi yang telah disetujui, kemudian menerapkan normalisasi Min-Max pada enam variabel platform sebagai persiapan analisis K-Means.",
    "feature4Title": "K-Means Clustering",
    "feature4Desc": "Mengelompokkan aktivitas media sosial 21 Polsek berdasarkan jumlah publikasi yang telah dinormalisasi. Sistem menampilkan tahapan perhitungan, hasil pengelompokan, dan evaluasi menggunakan Davies-Bouldin Index (DBI).",
    "feature5Title": "Ranking & Laporan Kinerja",
    "feature5Desc": "Menyajikan hasil pemeringkatan dan laporan berdasarkan analisis K-Means. Admin Polres dapat melihat hasil seluruh Polsek, sementara Admin Polsek hanya dapat melihat posisi, hasil analisis, dan membuat laporan untuk Polseknya sendiri.",
    "feature6Title": "Instagram Crawling",
    "feature6Desc": "Menyediakan modul terpisah untuk mengambil dan menyimpan data postingan akun Instagram utama Polres melalui Instagram Graph API, termasuk informasi interaksi yang tersedia. Data dari modul ini tidak digunakan sebagai input K-Means Polsek.",
    "feature7Title": "Pesan Internal",
    "feature7Desc": "Memfasilitasi komunikasi dua arah antara Admin Polres dan Admin Polsek melalui ruang percakapan khusus untuk mendukung koordinasi dan pertukaran informasi.",
    "feature8Title": "Pengumuman",
    "feature8Desc": "Memungkinkan Admin Polres membuat dan menyampaikan pengumuman kepada seluruh pengguna, seluruh Admin Polsek, atau Polsek tertentu. Admin Polsek dapat melihat pengumuman yang ditujukan kepada akun atau satuannya.",
    "feature9Title": "Manajemen Polsek & Akun Pengguna",
    "feature9Desc": "Admin Polres memiliki kewenangan sebagai administrator utama untuk mengelola data Polsek dan akun Admin Polsek. Fitur ini mencakup penambahan dan pembaruan data Polsek, pengelolaan status akun, serta pengaturan kata sandi baru. Pengelolaan akun disesuaikan dengan penugasan masing-masing Polsek agar pengguna dapat mengakses informasi sesuai kewenangannya.",
    "platformsTitle": "Platform Media Sosial yang Direkap",
    "rolesTitle": "Hak Akses Pengguna",
    "rolePolresTitle": "Admin Polres | Administrator Utama",
    "rolePolresDesc": "Mengelola data dan akun pengguna, memantau aktivitas lintas Polsek, menjalankan preprocessing dan analisis K-Means, serta mengelola laporan, pesan internal, dan pengumuman.",
    "rolePolsekTitle": "Admin Polsek",
    "rolePolsekDesc": "Memantau dashboard dan rekap aktivitas Polseknya sendiri, melihat posisi ranking serta hasil analisis yang relevan, membuat laporan khusus Polseknya, dan menggunakan fitur pesan serta pengumuman. Data Polsek lain tidak ditampilkan dalam ruang kerjanya.",
    "interfaceLanguage": "Bahasa Antarmuka Sistem: Bahasa Indonesia",
    "kmeansTitle": "Dari Rekapitulasi Data Menjadi Analisis Kinerja.",
    "kmeansIntro1": "Salah satu bagian utama dari sistem ini adalah implementasi algoritma K-Means untuk mengelompokkan aktivitas media sosial 21 Polsek berdasarkan jumlah publikasi pada enam platform.",
    "kmeansIntro2": "Proses analisis menggunakan data rekapitulasi jumlah URL yang telah dicatat dalam sistem. Konten dari tautan tersebut tidak dianalisis; data yang digunakan adalah jumlah aktivitas publikasi berdasarkan platform dan Polsek.",
    "km1Title": "Dataset Preparation",
    "km1Desc": "Sistem membentuk dataset bulanan dari data rekapitulasi yang telah disetujui. Jumlah publikasi pada enam platform digabungkan berdasarkan masing-masing Polsek sehingga menghasilkan matriks data dengan 21 Polsek dan enam variabel.",
    "km2Title": "Min-Max Normalization",
    "km2Desc": "Setiap variabel dinormalisasi menggunakan metode Min-Max agar nilai aktivitas dari berbagai platform berada pada skala 0–1 dan dapat dibandingkan dalam proses pengelompokan.",
    "km3Title": "K-Means Clustering",
    "km3Desc": "Proses klasterisasi menggunakan tiga cluster dengan inisialisasi centroid Farthest-First dan perhitungan Euclidean Distance. Sistem memperbarui centroid serta keanggotaan cluster secara iteratif hingga mencapai kondisi konvergen.",
    "km4Title": "Cluster Evaluation",
    "km4Desc": "Kualitas hasil pengelompokan dievaluasi menggunakan Davies-Bouldin Index (DBI). Hasil analisis ditampilkan dalam tiga kategori aktivitas, yaitu Kinerja Tinggi, Kinerja Sedang, dan Kinerja Rendah.",
    "km5Title": "Ranking & Reporting",
    "km5Desc": "Hasil K-Means digunakan untuk menyajikan ranking aktivitas Polsek dan laporan kinerja. Admin Polres dapat melihat hasil seluruh Polsek, sedangkan Admin Polsek hanya dapat mengakses hasil yang berkaitan dengan Polseknya sendiri.",
    "kmExampleTitle": "Contoh Hasil Analisis | September 2025",
    "kmExampleDesc": "Pada salah satu dataset yang ditampilkan dalam sistem, hasil K-Means membagi 21 Polsek menjadi 2 Polsek berkinerja tinggi, 3 Polsek berkinerja sedang, dan 16 Polsek berkinerja rendah. Proses mencapai konvergensi pada iterasi kedua dengan nilai DBI sekitar 0,4862.",
    "kmHigh": "Kinerja Tinggi",
    "kmMed": "Kinerja Sedang",
    "kmLow": "Kinerja Rendah",
    "kmIterations": "Iterasi",
    "kmDbi": "Davies-Bouldin Index (DBI)",
    "kmNote": "Catatan: Modul Instagram Crawling merupakan fitur terpisah dan tidak digunakan sebagai sumber data dalam proses K-Means ini.",
    "contribTitle": "Kontribusi Saya dalam Pengembangan Sistem.",
    "contribIntro": "Dalam proyek skripsi ini, saya terlibat dalam proses pengembangan sistem, mulai dari memahami kebutuhan pengguna, merancang struktur aplikasi, hingga mengimplementasikan fitur pengelolaan data dan analisis aktivitas media sosial.",
    "contrib1Title": "System Analysis",
    "contrib1Desc": "Menganalisis proses rekapitulasi aktivitas media sosial yang sebelumnya dilakukan melalui WhatsApp dan Excel, serta mengidentifikasi kebutuhan sistem untuk mendukung pengelolaan data dan pelaporan yang lebih terstruktur.",
    "contrib2Title": "System Design",
    "contrib2Desc": "Merancang alur kerja sistem, struktur database, antarmuka pengguna, serta pembagian hak akses antara Admin Polres dan Admin Polsek sesuai kebutuhan masing-masing.",
    "contrib3Title": "Web Application Development",
    "contrib3Desc": "Mengembangkan aplikasi berbasis web yang mencakup pengelolaan data Polsek, rekapitulasi aktivitas, dashboard statistik, komunikasi internal, ranking, dan laporan.",
    "contrib4Title": "Data Processing & K-Means Implementation",
    "contrib4Desc": "Mengembangkan proses pembentukan dataset, normalisasi Min-Max, implementasi algoritma K-Means, serta evaluasi hasil klasterisasi menggunakan Davies-Bouldin Index (DBI).",
    "contrib5Title": "Instagram API Integration",
    "contrib5Desc": "Mengembangkan modul Instagram Crawling menggunakan Instagram Graph API untuk mengambil dan mengelola data postingan dari akun Instagram utama Polres Subang sebagai fitur terpisah dari analisis K-Means.",
    "contrib6Title": "Data Visualization & Reporting",
    "contrib6Desc": "Mengembangkan tampilan statistik, hasil pengelompokan, ranking kinerja Polsek, dan laporan untuk menyajikan informasi secara lebih mudah dipahami.",
    "stackTitle": "Technology Stack",
    "stackCategories": "Backend | Database | Database Access | Frontend | UI Framework | Visualization | Data Analysis | API Integration",
    "structureTitle": "Application Structure",
    "galleryTitle": "Dokumentasi Sistem",
    "galleryIntro": "Pilih fitur untuk melihat tampilannya.",
    "rolePolresButton": "Admin Polres",
    "rolePolsekButton": "Admin Polsek",
    "enlarge": "Perbesar Gambar",
    "close": "Tutup Gambar"
  },
  "en": {
    "projectName": "Social Media Activity Reporting and Clustering System",
    "projectSubtitle": "Sistem Rekapitulasi dan Klasterisasi Aktivitas Media Sosial",
    "projectContext": "Academic Project | Undergraduate Thesis | System Development",
    "overviewTitle": "Project Overview",
    "overview1": "The Social Media Activity Reporting and Clustering System is an undergraduate thesis project that I designed and developed to support the management and analysis of social media activities across 21 police sectors (Polsek) under the Subang Police Public Relations Division.",
    "overview2": "This web-based system integrates data management, activity reporting, statistical visualization, and analysis using the K-Means algorithm. The collected data can be processed systematically to generate insights and cluster the social media activities of each police sector.",
    "problemTitle": "Background & Business Problem",
    "problem1": "Before the system was developed, social media activity reporting was carried out manually. Links to social media posts were collected through WhatsApp, while the data was compiled and calculated using Excel before being prepared as reports for submission to the regional police headquarters (Polda).",
    "problem2": "This workflow became the foundation for developing an integrated system that brings data collection, reporting, and analysis together on a single platform. The approach is intended to make information management more structured and better support social media activity monitoring.",
    "featuresTitle": "Core System Features.",
    "featuresIntro": "The system integrates social media activity reporting, data processing, K-Means analysis, performance rankings, reporting, and internal communication to support activity monitoring across 21 police sectors under the Subang Police Public Relations Division.",
    "feature1Title": "URL Management & Activity Reporting",
    "feature1Desc": "Records and summarizes the number of post URLs from six social media platforms by police sector and reporting period. The system uses URL counts as activity data without retrieving or analyzing the content of the posts.",
    "feature2Title": "Dashboard & Activity Statistics",
    "feature2Desc": "Provides activity summaries, publication counts, and statistics based on each user's access permissions. Police Headquarters Admin can monitor data across police sectors, while Police Sector Admin can only view information related to their own sector.",
    "feature3Title": "Data Preprocessing & Normalization",
    "feature3Desc": "Creates monthly datasets from approved activity records and applies Min-Max normalization to six platform variables in preparation for K-Means analysis.",
    "feature4Title": "K-Means Clustering",
    "feature4Desc": "Groups the social media activities of 21 police sectors based on normalized publication counts. The system presents calculation stages, clustering results, and evaluation using the Davies-Bouldin Index (DBI).",
    "feature5Title": "Performance Ranking & Reports",
    "feature5Desc": "Presents rankings and reports based on K-Means analysis. Police Headquarters Admin can view results across all police sectors, while Police Sector Admin can only access their own sector's ranking, analysis results, and reports.",
    "feature6Title": "Instagram Crawling",
    "feature6Desc": "Provides a separate module for retrieving and storing posts from the main Subang Police Instagram account through the Instagram Graph API, including available engagement information. Data collected through this module is not used as input for police sector K-Means analysis.",
    "feature7Title": "Internal Messaging",
    "feature7Desc": "Enables two-way communication between Police Headquarters Admin and Police Sector Admin through dedicated conversations to support coordination and information sharing.",
    "feature8Title": "Announcements",
    "feature8Desc": "Allows Police Headquarters Admin to create and distribute announcements to all users, all Police Sector Admins, or selected police sectors. Police Sector Admin can view announcements addressed to their accounts or respective sectors.",
    "feature9Title": "Police Sector & User Account Management",
    "feature9Desc": "Police Headquarters Admin also serves as the system administrator, managing police sector records and Police Sector Admin accounts. This includes adding and updating police sector information, managing account status, and setting new passwords. User accounts are assigned to their respective police sectors, allowing access to information based on each user's responsibilities and permissions.",
    "platformsTitle": "Reported Social Media Platforms",
    "rolesTitle": "User Access",
    "rolePolresTitle": "Police Headquarters Admin | System Administrator",
    "rolePolresDesc": "Manages system records and user accounts, monitors activities across police sectors, performs preprocessing and K-Means analysis, and manages reports, internal messages, and announcements.",
    "rolePolsekTitle": "Police Sector Admin (Admin Polsek)",
    "rolePolsekDesc": "Monitors dashboards and activity records for their own sector, views relevant ranking and analysis results, generates sector-specific reports, and accesses messaging and announcements. Detailed data from other police sectors is not displayed in their workspace.",
    "interfaceLanguage": "System Interface Language: Indonesian",
    "kmeansTitle": "Turning Activity Records into Performance Insights.",
    "kmeansIntro1": "A key component of this system is the implementation of the K-Means algorithm to group social media activities across 21 police sectors based on publication counts from six platforms.",
    "kmeansIntro2": "The analysis uses recorded URL counts from the activity reporting module. The system does not analyze the content of these links; instead, it uses the number of published activities categorized by platform and police sector.",
    "km1Title": "Dataset Preparation",
    "km1Desc": "The system creates monthly datasets from approved activity records. Publication counts from six platforms are aggregated for each police sector, producing a data matrix consisting of 21 police sectors and six variables.",
    "km2Title": "Min-Max Normalization",
    "km2Desc": "Each variable is normalized using the Min-Max method to scale activity values between 0 and 1, allowing them to be compared during clustering.",
    "km3Title": "K-Means Clustering",
    "km3Desc": "The clustering process uses three clusters, Farthest-First centroid initialization, and Euclidean Distance calculations. Cluster assignments and centroids are updated iteratively until convergence is reached.",
    "km4Title": "Cluster Evaluation",
    "km4Desc": "The clustering results are evaluated using the Davies-Bouldin Index (DBI). The system presents three performance categories: High, Medium, and Low Performance.",
    "km5Title": "Ranking & Reporting",
    "km5Desc": "K-Means results are used to generate police sector activity rankings and performance reports. Police Headquarters Admin can review results across all police sectors, while Police Sector Admin can only access results related to their respective sector.",
    "kmExampleTitle": "Analysis Example | September 2025",
    "kmExampleDesc": "For one of the datasets displayed in the system, K-Means grouped 21 police sectors into 2 high-performance sectors, 3 medium-performance sectors, and 16 low-performance sectors. The process converged after two iterations, with a DBI value of approximately 0.4862.",
    "kmHigh": "High Performance",
    "kmMed": "Medium Performance",
    "kmLow": "Low Performance",
    "kmIterations": "Iterations",
    "kmDbi": "Davies-Bouldin Index (DBI)",
    "kmNote": "Note: The Instagram Crawling module operates independently and does not provide input data for this K-Means analysis.",
    "contribTitle": "My Contributions to System Development.",
    "contribIntro": "In this undergraduate thesis project, I was involved in the system development process, from understanding user requirements and designing the application structure to implementing data management and social media activity analysis features.",
    "contrib1Title": "System Analysis",
    "contrib1Desc": "Analyzed the previous WhatsApp and Excel-based activity reporting workflow and identified system requirements to support more structured data management and reporting.",
    "contrib2Title": "System Design",
    "contrib2Desc": "Designed system workflows, database structure, user interfaces, and role-based access for Police Headquarters Admin and Police Sector Admin based on their respective responsibilities.",
    "contrib3Title": "Web Application Development",
    "contrib3Desc": "Developed a web application covering police sector management, activity reporting, statistical dashboards, internal communication, performance rankings, and reports.",
    "contrib4Title": "Data Processing & K-Means Implementation",
    "contrib4Desc": "Developed dataset preparation, Min-Max normalization, K-Means clustering, and clustering evaluation using the Davies-Bouldin Index (DBI).",
    "contrib5Title": "Instagram API Integration",
    "contrib5Desc": "Developed an Instagram Crawling module using the Instagram Graph API to retrieve and manage posts from the main Subang Police Instagram account, independently of the K-Means analysis workflow.",
    "contrib6Title": "Data Visualization & Reporting",
    "contrib6Desc": "Developed statistical displays, clustering result visualizations, police sector performance rankings, and reports to present information in a clear and accessible format.",
    "stackTitle": "Technology Stack",
    "stackCategories": "Backend | Database | Database Access | Frontend | UI Framework | Visualization | Data Analysis | API Integration",
    "structureTitle": "Application Structure",
    "galleryTitle": "System Documentation",
    "galleryIntro": "Select a feature to explore its interface.",
    "rolePolresButton": "Police Headquarters Admin",
    "rolePolsekButton": "Police Sector Admin",
    "enlarge": "Enlarge Image",
    "close": "Close Image"
  }
};

const P02_SCREENSHOTS = {
  "polres": [
    {
      "category": "analysis",
      "file": "humas-kmeans-hasil.png",
      "labelId": "Detail Hasil K-Means",
      "labelEn": "K-Means Results Detail"
    },
    {
      "category": "analysis",
      "file": "humas-kmeans-implementasi.png",
      "labelId": "Implementasi K-Means",
      "labelEn": "K-Means Implementation"
    },
    {
      "category": "analysis",
      "file": "humas-preprocessing.png",
      "labelId": "Preprocessing",
      "labelEn": "Preprocessing"
    },
    {
      "category": "analysis",
      "file": "humas-normalisasi-minmax.png",
      "labelId": "Hasil Normalisasi Min-Max",
      "labelEn": "Min-Max Normalization Results"
    },
    {
      "category": "dashboard",
      "file": "humas-polres-dashboard.png",
      "labelId": "Dashboard Admin Polres",
      "labelEn": "Police Headquarters Dashboard"
    },
    {
      "category": "reporting",
      "file": "humas-rekap-aktivitas.png",
      "labelId": "Rekap Aktivitas",
      "labelEn": "Activity Reporting"
    },
    {
      "category": "ranking",
      "file": "humas-ranking.png",
      "labelId": "Ranking Kinerja Polsek",
      "labelEn": "Police Sector Ranking"
    },
    {
      "category": "ranking",
      "file": "humas-laporan.png",
      "labelId": "Laporan Kinerja",
      "labelEn": "Performance Reports"
    },
    {
      "category": "instagram",
      "file": "humas-instagram-crawling.png",
      "labelId": "Instagram Crawling",
      "labelEn": "Instagram Crawling"
    },
    {
      "category": "communication",
      "file": "humas-pesan.png",
      "labelId": "Pesan Internal",
      "labelEn": "Internal Messaging"
    },
    {
      "category": "communication",
      "file": "humas-pengumuman.png",
      "labelId": "Pengumuman",
      "labelEn": "Announcements"
    },
    {
      "category": "administration",
      "file": "humas-kelola-polsek.png",
      "labelId": "Kelola Polsek",
      "labelEn": "Police Sector Management"
    },
    {
      "category": "administration",
      "file": "humas-kelola-user.png",
      "labelId": "Kelola User",
      "labelEn": "User Account Management"
    },
    {
      "category": "administration",
      "file": "humas-polres-profil.png",
      "labelId": "Profil Admin Polres",
      "labelEn": "Police Headquarters Admin Profile"
    }
  ],
  "polsek": [
    {
      "category": "dashboard",
      "file": "humas-polsek-dashboard.png",
      "labelId": "Dashboard Admin Polsek",
      "labelEn": "Police Sector Dashboard"
    },
    {
      "category": "reporting",
      "file": "humas-polsek-rekap.png",
      "labelId": "Rekap Aktivitas",
      "labelEn": "Activity Reporting"
    },
    {
      "category": "ranking",
      "file": "humas-polsek-ranking.png",
      "labelId": "Ranking Polsek",
      "labelEn": "Police Sector Ranking"
    },
    {
      "category": "ranking",
      "file": "humas-polsek-laporan.png",
      "labelId": "Laporan Polsek",
      "labelEn": "Police Sector Reports"
    },
    {
      "category": "communication",
      "file": "humas-polsek-pesan.png",
      "labelId": "Pesan Internal",
      "labelEn": "Internal Messaging"
    },
    {
      "category": "communication",
      "file": "humas-polsek-pengumuman.png",
      "labelId": "Pengumuman",
      "labelEn": "Announcements"
    },
    {
      "category": "profile",
      "file": "humas-polsek-profil.png",
      "labelId": "Profil Admin Polsek",
      "labelEn": "Police Sector Admin Profile"
    }
  ]
};

const P02_CATEGORIES = {
  "id": {
    "analysis": "Analisis K-Means",
    "dashboard": "Dashboard",
    "reporting": "Rekap Aktivitas",
    "ranking": "Ranking & Laporan",
    "instagram": "Instagram Crawling",
    "communication": "Pesan & Pengumuman",
    "administration": "Manajemen Sistem",
    "profile": "Profil"
  },
  "en": {
    "analysis": "K-Means Analysis",
    "dashboard": "Dashboard",
    "reporting": "Activity Reporting",
    "ranking": "Rankings & Reports",
    "instagram": "Instagram Crawling",
    "communication": "Messages & Announcements",
    "administration": "System Administration",
    "profile": "Profile"
  }
};


function initProject02(root) {
    const image = root.querySelector("#p02-preview-image");
    const fallback = root.querySelector("#p02-missing");
    const label = root.querySelector("#p02-current-label");
    const indexLabel = root.querySelector("#p02-index");
    const enlarge = root.querySelector("#p02-enlarge");
    const categories = root.querySelector("#p02-categories");
    const shots = root.querySelector("#p02-images");
    const dialog = root.querySelector("#p02-lightbox");
    const modalImage = root.querySelector("#p02-modal-image");
    const modalClose = root.querySelector("#p02-modal-close");
    const roleButtons = root.querySelectorAll("[data-p02-role]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scroller = document.querySelector("#main-content");

    let language = document.documentElement.lang === "en" ? "en" : "id";
    let activeRole = "polres";
    let activeCategory = "analysis";
    let activeShot = P02_SCREENSHOTS.polres[0];
    let loadToken = 0;
    let currentReadySource = "";

    const getLabel = (item) => language === "en" ? item.labelEn : item.labelId;

    function setLanguage(nextLanguage) {
        if (!P02_TRANSLATIONS[nextLanguage]) return;
        language = nextLanguage;
        const dict = P02_TRANSLATIONS[language];
        root.querySelectorAll("[data-p02-i18n]").forEach(function (element) {
            const key = element.dataset.p02I18n;
            if (dict[key] !== undefined) element.textContent = dict[key];
        });
        renderCategoryButtons();
        renderShotButtons();
        updateGalleryCaption();
    }

    function getCategoryOrder() {
        return [...new Set(P02_SCREENSHOTS[activeRole].map(item => item.category))];
    }

    function filteredItems() {
        return P02_SCREENSHOTS[activeRole].filter(item => item.category === activeCategory);
    }

    function createButton(labelText, className, selected, onClick) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = className + (selected ? " is-active" : "");
        button.textContent = labelText;
        button.setAttribute("aria-pressed", String(selected));
        button.addEventListener("click", onClick);
        return button;
    }

    function renderCategoryButtons() {
        categories.replaceChildren();
        getCategoryOrder().forEach(function (category) {
            const button = createButton(
                P02_CATEGORIES[language][category],
                "p02-category-btn",
                category === activeCategory,
                function () { selectCategory(category); }
            );
            categories.appendChild(button);
        });
    }

    function renderShotButtons() {
        shots.replaceChildren();
        filteredItems().forEach(function (item) {
            const button = createButton(
                getLabel(item),
                "p02-shot-btn",
                item.file === activeShot.file,
                function () { selectShot(item); }
            );
            shots.appendChild(button);
        });
    }

    function updateGalleryCaption() {
        label.textContent = getLabel(activeShot);
        image.alt = "Humas Polres Subang | " + getLabel(activeShot);
        const fullList = P02_SCREENSHOTS[activeRole];
        indexLabel.textContent = String(fullList.findIndex(s => s.file === activeShot.file) + 1).padStart(2, "0")
            + " / " + String(fullList.length).padStart(2, "0");
    }

    function loadScreenshot(item) {
        const token = ++loadToken;
        currentReadySource = "";
        image.hidden = true;
        enlarge.disabled = true;
        fallback.hidden = false;
        fallback.textContent = item.file;

        // Preload to avoid displaying a broken-image symbol when a local
        // screenshot has not yet been copied into assets/images/.
        const loader = new Image();
        loader.onload = function () {
            if (token !== loadToken) return;
            currentReadySource = loader.src;
            image.src = loader.src;
            image.hidden = false;
            fallback.hidden = true;
            enlarge.disabled = false;
            if (!reducedMotion.matches) {
                image.classList.remove("p02-swap");
                void image.offsetWidth;
                image.classList.add("p02-swap");
            }
        };
        loader.onerror = function () {
            if (token !== loadToken) return;
            image.hidden = true;
            fallback.hidden = false;
            fallback.textContent = item.file;
            enlarge.disabled = true;
        };
        loader.src = "assets/images/" + encodeURIComponent(item.file);
    }

    function selectShot(item) {
        activeShot = item;
        renderShotButtons();
        updateGalleryCaption();
        loadScreenshot(item);
    }

    function selectCategory(category) {
        activeCategory = category;
        activeShot = filteredItems()[0];
        renderCategoryButtons();
        selectShot(activeShot);
    }

    function selectRole(role) {
        if (!P02_SCREENSHOTS[role]) return;
        activeRole = role;
        roleButtons.forEach(function (button) {
            const active = button.dataset.p02Role === role;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
        activeCategory = role === "polres" ? "analysis" : "dashboard";
        renderCategoryButtons();
        selectCategory(activeCategory);
    }

    roleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            selectRole(button.dataset.p02Role);
        });
    });

    enlarge.addEventListener("click", function () {
        if (!currentReadySource || !dialog || typeof dialog.showModal !== "function") return;
        modalImage.src = currentReadySource;
        modalImage.alt = "Humas Polres Subang | " + getLabel(activeShot);
        if (!dialog.open) dialog.showModal();
    });

    modalClose.addEventListener("click", function () {
        if (dialog.open) dialog.close();
    });

    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
    });

    document.addEventListener("dewi:languagechange", function (event) {
        if (event.detail && event.detail.language) {
            setLanguage(event.detail.language);
        }
    });

    function initMotion() {
        const animated = root.querySelectorAll("[data-p02-reveal]");
        if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
        root.classList.add("p02-motion-ready");
        const mobile = window.matchMedia("(max-width:760px)").matches;
        const observer = new IntersectionObserver(function (entries, instance) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("p02-visible");
                instance.unobserve(entry.target);
            });
        }, { root: mobile ? null : scroller, threshold: 0.04, rootMargin: "0px 0px -25px 0px" });
        animated.forEach(element => observer.observe(element));
    }

    // Preserve any language chosen before this component was fetched.
    const savedLanguage = document.documentElement.lang === "en" ? "en" : "id";
    setLanguage(savedLanguage);
    selectRole("polres");
    initMotion();
}

async function loadProject02() {
    const mount = document.getElementById("project02");
    if (!mount) return;
    try {
        const response = await fetch("components/project02.html");
        if (!response.ok) throw new Error("Project 02 HTML: " + response.status);
        const html = await response.text();
        mount.innerHTML = html;
        initProject02(mount);

        // Deep linking also works with the desktop's independent scroll area.
        if (window.location.hash === "#project02") {
            requestAnimationFrame(function () {
                mount.scrollIntoView({ behavior: "auto", block: "start" });
            });
        }
    } catch (error) {
        // Keep existing ProcureSync visible if this component cannot load.
        console.error("Project 02 could not load:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadProject02);
