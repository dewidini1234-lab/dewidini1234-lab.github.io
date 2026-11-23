"use strict";
/* About Me bilingual text only; shared navigation and pages remain untouched. */
(function () {
    const STORY = {
    "id": {
        "eyebrow": "01 | INTRODUCTION",
        "title": "Mengenal Saya Lebih Dekat.",
        "intro": "Saya Dewi Embun Permata Dini, S.Kom., lulusan Sistem Informasi Universitas Mandiri yang berasal dari Kota Subang. Saya memiliki ketertarikan pada teknologi informasi, khususnya IT Project Development, System Analysis, Business Process Analysis, dan pengembangan solusi berbasis teknologi.",
        "introSecond": "Saya senang mengeksplorasi ide dan mengembangkan aplikasi berskala kecil sebagai sarana belajar serta menerapkan pengetahuan yang saya miliki.",
        "photoLabel": "LULUSAN SISTEM INFORMASI",
        "snapshot": "BIODATA PRIBADI",
        "fullNameLabel": "NAMA",
        "fullNameValue": "Dewi Embun Permata Dini",
        "degreeLabel": "GELAR",
        "degreeValue": "S.Kom.",
        "birthDateLabel": "TANGGAL LAHIR",
        "birthDateValue": "25 Juni 2003",
        "hometownLabel": "ASAL",
        "hometownValue": "Kota Subang",
        "locationLabel": "DOMISILI",
        "locationValue": "Subang, Jawa Barat, Indonesia",
        "ethnicityLabel": "SUKU",
        "ethnicityValue": "Sunda",
        "heightLabel": "TINGGI BADAN",
        "heightValue": "157 cm",
        "hobbyLabel": "HOBI",
        "hobbyValue": "Memasak",
        "languagesLabel": "BAHASA",
        "languagesValue": "Indonesia, Sunda, Inggris",
        "rootsEyebrow": "MY ROOTS",
        "rootsTitle": "Latar Belakang dan Nilai.",
        "rootsBody": "Saya tumbuh dalam lingkungan keluarga yang mengajarkan tanggung jawab, kemandirian, dan kedisiplinan. Lingkungan keluarga juga menjadi salah satu hal yang memperkenalkan saya pada dunia teknologi sejak dini.",
        "curiosityEyebrow": "CURIOSITY",
        "curiosityTitle": "Awal Ketertarikan pada Teknologi.",
        "curiosityBody": "Ketertarikan saya pada teknologi dimulai sejak SMP. Rasa ingin tahu tentang cara kerja aplikasi kemudian berkembang menjadi minat untuk mempelajari sistem informasi dan pengembangan teknologi.",
        "learningEyebrow": "LEARNING & THINKING",
        "learningTitle": "Cara Saya Belajar dan Berpikir.",
        "learningBody": "Saya terbiasa memahami permasalahan sebelum menentukan solusi. Saya mengutamakan pemikiran terstruktur, pembelajaran mandiri, dan keterbukaan terhadap perspektif baru.",
        "peopleEyebrow": "PEOPLE & PERSPECTIVES",
        "peopleTitle": "Kolaborasi dan Perspektif.",
        "peopleBody": "Saya menghargai komunikasi, pertukaran ide, dan kerja sama. Saya percaya bahwa memahami berbagai perspektif dapat membantu menghasilkan solusi yang lebih baik.",
        "purposeEyebrow": "LOOKING AHEAD",
        "purposeTitle": "Terus Bertumbuh dan Berkembang.",
        "purposeBody": "Saya ingin terus mengembangkan kemampuan, memperluas pengalaman, dan terlibat dalam berbagai proyek yang memberikan dampak positif melalui teknologi. Saya terbuka terhadap kesempatan belajar dan berkembang di lingkungan profesional.",
        "photoAlt": "Foto kelulusan Dewi Embun Permata Dini."
    },
    "en": {
        "eyebrow": "01 | INTRODUCTION",
        "title": "A Closer Introduction.",
        "intro": "I'm Dewi Embun Permata Dini, S.Kom., an Information Systems graduate from Universitas Mandiri, originally from Subang, Indonesia. My interests include IT project development, systems analysis, business process analysis, and technology-driven solutions.",
        "introSecond": "I enjoy exploring ideas and building small-scale applications to deepen my understanding and apply what I've learned.",
        "photoLabel": "INFORMATION SYSTEMS GRADUATE",
        "snapshot": "PERSONAL BIODATA",
        "fullNameLabel": "FULL NAME",
        "fullNameValue": "Dewi Embun Permata Dini",
        "degreeLabel": "DEGREE",
        "degreeValue": "Bachelor of Computer Science (S.Kom.)",
        "birthDateLabel": "DATE OF BIRTH",
        "birthDateValue": "June 25, 2003",
        "hometownLabel": "HOMETOWN",
        "hometownValue": "Subang",
        "locationLabel": "LOCATION",
        "locationValue": "Subang, West Java, Indonesia",
        "ethnicityLabel": "ETHNICITY",
        "ethnicityValue": "Sundanese",
        "heightLabel": "HEIGHT",
        "heightValue": "157 cm",
        "hobbyLabel": "HOBBY",
        "hobbyValue": "Cooking",
        "languagesLabel": "LANGUAGES",
        "languagesValue": "Indonesian, Sundanese, English",
        "rootsEyebrow": "MY ROOTS",
        "rootsTitle": "Background & Values.",
        "rootsBody": "I grew up in a family that values responsibility, independence, and discipline. My family environment also played a role in introducing me to technology at an early age.",
        "curiosityEyebrow": "CURIOSITY",
        "curiosityTitle": "My Early Interest in Technology.",
        "curiosityBody": "My interest in technology began in junior high school. My curiosity about how applications work gradually developed into an interest in information systems and technology development.",
        "learningEyebrow": "LEARNING & THINKING",
        "learningTitle": "My Approach to Learning and Thinking.",
        "learningBody": "I prefer to understand a problem before determining an appropriate solution. I value structured thinking, independent learning, and openness to new perspectives.",
        "peopleEyebrow": "PEOPLE & PERSPECTIVES",
        "peopleTitle": "Collaboration & Perspectives.",
        "peopleBody": "I value communication, the exchange of ideas, and collaboration. I believe that understanding different perspectives helps create better solutions.",
        "purposeEyebrow": "LOOKING AHEAD",
        "purposeTitle": "Continuous Growth & Development.",
        "purposeBody": "I aim to continue developing my skills, broadening my experience, and contributing to projects that make a positive impact through technology. I welcome opportunities to learn and grow in professional environments.",
        "photoAlt": "Graduation portrait of Dewi Embun Permata Dini."
    }
};
    function applyStoryLanguage(language) {
        const data = STORY[language] || STORY.id;
        document.querySelectorAll('[data-about-i18n]').forEach(function (node) {
            const key = node.dataset.aboutI18n;
            if (Object.prototype.hasOwnProperty.call(data, key)) node.textContent = data[key];
        });
        document.querySelectorAll('[data-about-alt]').forEach(function (node) {
            const key = node.dataset.aboutAlt;
            if (Object.prototype.hasOwnProperty.call(data, key)) node.setAttribute('alt', data[key]);
        });
    }
    document.addEventListener('dewi:languagechange', function (event) {
        applyStoryLanguage(event.detail && event.detail.language || 'id');
    });
    document.addEventListener('DOMContentLoaded', function () {
        const chosen = window.DewiPortfolio && typeof window.DewiPortfolio.getLanguage === 'function'
            ? window.DewiPortfolio.getLanguage() : 'id';
        applyStoryLanguage(chosen);
    });
})();
