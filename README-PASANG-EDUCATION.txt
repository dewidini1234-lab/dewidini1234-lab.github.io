DEWI. PORTFOLIO | UPDATE HALAMAN EDUCATION
============================================

Isi ZIP:
  education.html
  css/education.css
  js/education.js
  components/navbar.html
  README-PASANG-EDUCATION.txt

UPDATE INI HANYA MENAMBAHKAN EDUCATION.
- index.html (Home): TIDAK diubah.
- about.html: TIDAK diubah.
- experience.html, ProcureSync, Project 02: TIDAK diubah.
- css/style.css dan js/common.js: TIDAK diubah.
- components/navbar.html: hanya tombol Pendidikan yang sebelumnya
  disabled diubah menjadi tautan aktif menuju education.html.

CARA MEMASANG DI WINDOWS
------------------------
1. Backup folder website yang sudah berjalan.
2. Buka File Explorer:
      C:\xampp\htdocs\dewi-portfolio-multipage\
3. Ekstrak ZIP ini. Buka folder hasil ekstrak.
4. Salin 4 item berikut ke folder pada langkah 2:
      education.html
      css
      js
      components
5. Saat Windows menanyakan folder dengan nama sama, pilih
   gabungkan/merge, JANGAN menghapus folder lama.
   Jika ditanya tentang file komponen dengan nama yang sama,
   replace HANYA file components\navbar.html.
6. Pastikan hasil akhirnya:
      C:\xampp\htdocs\dewi-portfolio-multipage\education.html
      C:\xampp\htdocs\dewi-portfolio-multipage\css\education.css
      C:\xampp\htdocs\dewi-portfolio-multipage\js\education.js
      C:\xampp\htdocs\dewi-portfolio-multipage\components\navbar.html

MENJALANKAN
-----------
Jika server lokal http://127.0.0.1:8001/ masih aktif,
langsung buka:
  http://127.0.0.1:8001/education.html

Kalau server belum berjalan, buka terminal VS Code dalam folder:
  C:\xampp\htdocs\dewi-portfolio-multipage
Kemudian jalankan:
  py -m http.server 8001
Atau:
  python -m http.server 8001

Buka tautan di Microsoft Edge dan tekan Ctrl+Shift+R.
Jangan membuka HTML melalui file:// karena navbar/footer perlu HTTP.

PENGUJIAN
---------
- Klik tab Pendidikan di navbar dari Home/About/Experience.
- Coba tombol ID/EN dan muat ulang halaman (bahasa tersimpan).
- Lihat kartu S1, SMK, Skripsi, HIMA dan PKKMB.
- Coba di layar ponsel dan menu hamburger.

Isi halaman Education sesuai teks yang telah disetujui:
01 Pendidikan Sarjana & Skripsi
02 SMK Pasundan Subang
03 HIMA / Hubungan Media
04 Panitia Umum PKKMB 2023

Pengalaman magang (05-06) dan sertifikat (07-08) akan
masuk ke halaman lain di tahap selanjutnya, tidak ditambahkan
di Education pada update ini.

PENTING: Folder assets tidak disertakan di ZIP ini dan tidak
perlu dihapus. Backup website lama tetap simpan.
