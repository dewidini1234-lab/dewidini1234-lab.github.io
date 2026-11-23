DEWI PORTFOLIO | MULTI-PAGE MIGRATION
=====================================

BAGIAN YANG SUDAH ADA
- index.html      : Home
- about.html      : About Me
- experience.html : Experience (ProcureSync + nama Project 02)
- components/navbar.html : navbar bersama untuk ketiga halaman
- components/footer.html : footer bersama untuk ketiga halaman
- js/common.js    : bilingual, navbar, animasi scroll, komponen bersama
- js/home.js      : interaksi tombol website Home
- js/experience.js : galeri role, lightbox, konten bilingual Experience
- css/*.css       : semua stylesheet lama tetap dipertahankan

HALAMAN EDUCATION, SKILLS, PROJECTS, CERTIFICATIONS, CONTACT
Belum dibuat karena kontennya belum disetujui. Navbar-nya tetap nonaktif
sampai halaman tersebut dibuat.

CARA UJI PALING AMAN
1. Ekstrak folder dewi-portfolio-multipage ke C:\xampp\htdocs\
2. Dari proyek ASLI, salin folder assets beserta semua isinya ke folder baru:
   Copy-Item -Path "C:\xampp\htdocs\dewi-portfolio\assets" -Destination "C:\xampp\htdocs\dewi-portfolio-multipage\assets" -Recurse
3. Jalankan salah satu server HTTP:
   a. Dengan Apache XAMPP aktif, buka http://localhost/dewi-portfolio-multipage/
   b. Atau di PowerShell (port 8001 agar server lama tidak bentrok):
      cd C:\xampp\htdocs\dewi-portfolio-multipage
      python -m http.server 8001
      Buka http://127.0.0.1:8001/
4. Uji navbar Home / Tentang Saya / Pengalaman, bahasa ID/EN,
   gallery ProcureSync, lightbox, menu HP, animasi dan halaman.
5. JANGAN menghapus folder dewi-portfolio asli sebelum hasilnya disetujui.

CATATAN TEKNIS
- Komponen bersama diambil menggunakan fetch(), jadi jalankan dari
  http://localhost atau GitHub Pages. Membuka via file:/// tidak cukup.
- Semua URL lokal dibuat relatif terhadap folder website, sehingga
  kompatibel dengan GitHub Pages berbasis repository.
- CV masih memakai href assets/documents/cv-dewi.pdf seperti proyek asli.
- Tombol Explore Website 01/02 belum memiliki URL, sama seperti sebelumnya.
- Foto, screenshot, dan CV tidak disertakan dalam ZIP kode sumber awal.
- js/script.js lama tidak lagi digunakan oleh halaman yang baru.
- Edit teks yang muncul di UI hanya setelah persetujuan Dewi.
