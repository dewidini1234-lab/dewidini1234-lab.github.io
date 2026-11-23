DEWI PORTFOLIO | UPDATE EXPERIENCE PROJECT 02
===========================================

PENTING: Paket ini hanya menambah bagian skripsi dalam halaman Experience.
Jangan mengganti folder website atau folder assets dengan paket ini.

FILE UPDATE (4 file):
- experience.html                    : penghubung Project 02 + link navigasi project
- components/project02.html         : semua konten Project 02 yang sudah disetujui
- css/project02.css                 : desain responsive + animasi Project 02
- js/project02.js                   : bilingual + galeri 21 screenshot + lightbox

FILE YANG TIDAK DIUBAH:
- index.html
- about.html
- css/style.css, css/about.css, css/experience.css, css/comfort-theme.css
- js/common.js, js/experience.js
- components/navbar.html, components/footer.html

CARA PASANG:
1. Buka PowerShell di C:\xampp\htdocs\dewi-portfolio-multipage.
2. Buat cadangan file Experience saat ini:
   Copy-Item .\experience.html .\experience-before-project02.html
3. Ekstrak isi ZIP ini LANGSUNG ke folder
   C:\xampp\htdocs\dewi-portfolio-multipage\
   (tanpa membuat subfolder baru). Saat ditanya, izinkan penggantian
   experience.html saja. File lainnya merupakan file baru.
4. Pertahankan semua gambar di assets\images\; paket kode ini tidak
   menyertakan gambar karena gambar/screenshot asli ada di laptop Dewi.
5. Buka server: http://127.0.0.1:8001/experience.html
   Jika server belum berjalan, jalankan di folder proyek:
   python -m http.server 8001
   atau nyalakan Apache XAMPP lalu buka
   http://localhost/dewi-portfolio-multipage/experience.html
6. Tekan Ctrl+Shift+R lalu uji ID/EN, klik Project 02, klik dua role,
   pilih kategori, ganti screenshot, klik Perbesar Gambar dan tutup.

FOLDER SCREENSHOT YANG DIHARAPKAN:
assets/images/
    humas-polres-dashboard.png
    humas-rekap-aktivitas.png
    humas-instagram-crawling.png
    humas-preprocessing.png
    humas-normalisasi-minmax.png
    humas-kmeans-implementasi.png
    humas-kmeans-hasil.png
    humas-ranking.png
    humas-laporan.png
    humas-kelola-polsek.png
    humas-kelola-user.png
    humas-pesan.png
    humas-pengumuman.png
    humas-polres-profil.png
    humas-polsek-dashboard.png
    humas-polsek-rekap.png
    humas-polsek-ranking.png
    humas-polsek-laporan.png
    humas-polsek-pesan.png
    humas-polsek-pengumuman.png
    humas-polsek-profil.png

Jika gambar belum ada, galeri tetap bisa diklik tetapi akan menampilkan
nama file (bukan gambar). Simpan screenshot sesuai nama di atas.

BAGIAN PENTING SISTEM SKRIPSI:
- Crawling Instagram terpisah dari input K-Means.
- Rekap K-Means memakai jumlah URL (bukan konten URL) dari 6 platform.
- Role Admin Polsek hanya mengakses hasil yang terkait Polseknya.
- Hasil 2/3/16 cluster dan DBI 0,4862 hanyalah contoh September 2025.

PRIVASI: sebelum hosting ke GitHub Pages, tutupi data internal, isi chat,
nama akun, identitas, ataupun informasi yang tidak diizinkan dipublikasi.

Tidak perlu mengedit Home dan About Me. Website harus dijalankan melalui
HTTP server (XAMPP/Python/GitHub Pages), bukan file:///.
