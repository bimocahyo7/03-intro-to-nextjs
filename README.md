# Laporan Praktikum

|       | Pemrograman Berbasis Framework 2025 |
| ----- | ----------------------------------- |
| NIM   | 244107027010                        |
| Nama  | Bimo Cahyo Kusumo                   |
| Kelas | TI - 4K                             |

## Langkah Praktikum

### A. Setup Environment NextJS

1. Inisialisasi project NextJS dengan konfigurasi seperti berikut ini. Opsi untuk **App Router** tidak digunakan

   ![Konfigurasi init project NextJS](public/images/01_init_project.png)

### B. Membuat Halaman dengan Server-Side Rendering (SSR)

1. Buka file `pages/index.tsx` dan ganti kodenya menjadi seperti berikut ini.

   ![Kode tampilan index.tsx](public/images/02_implement_SSR.png)

2. Jalankan projectnya dengan perintah `npm run dev` pada terminal Text Editor dan lihat tampilan website pada browser.

   ![Tampilan website setelah dilakukan perubahan kode](public/images/02_output_web.png)

### C. Menggunakan Static Site Generation (SSG)

1. Buat file baru di direktori `pages` dengan nama `blog.js`

2. Tambahkan kode untuk membuat halaman blog berikut.

   ![Kode halaman blog dengan menggunakan SSG](public/images/03_implement_SSG.png)

3. Tampilan halaman **blog** pada browser

   ![Tampilan halaman Blog](public/images/03_output_blog_pages.png)

### D. Menggunakan Dynamic Routes

1. Buat direktori baru di `pages` dengan nama `blog`

2. Selanjutnya, buat file dengan nama `[slug].js` pada folder blog tadi dan tambahkan dengan kode berikut.

   ![Kode pada halaman slug pada direktori blog](public/images/04_implement_dynamic_route.png)

3. Tampilan halaman **slug** pada browser

   ![Tampilan halaman Slug](public/images/04_output_slug_page.png)

### E. Menggunakan API Routes

1. Buat file di dalam direktori `pages/api` dengan nama `products.js`

2. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk.

   ![Kode API Routes product](public/images/05_implement_api_routes.png)

3. Lalu, buat file baru di folder `pages` dengan nama `products.js` untuk menampilkan daftar produk dari API sebelumnya dibuat.

   ![Kode pada halaman products pada direktori pages](public/images/05_code_products_page.png)

4. Tampilan halaman **products** pada browser

   ![Tampilan halaman Products](public/images/05_output_product_page.png)

### F. Menggunakan Link Component

1. Buka file `pages/index.tsx` dan tambahkan modif dengan kode berikut untuk membuat link ke
halaman lain.

   ![Kode komponen Link pada file index.tsx](public/images/06_implement_link_component.png)

2. Buat file baru pada direktori `pages` dengan nama `about.js` dan tambahkan kode berikut ini.

   ![Kode pada halaman about](public/images/06_code_about_page.png)

3. Buka url http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke
halaman about.

   ![Tampilan halaman Home setelah dimodifikasi](public/images/06_output_home_page.png)

   Setelah diklik, maka mengarahkan ke url http://localhost:3000/about dengan tampilan seperti berikut.

   ![Halaman About dari navigasi Link](public/images/06_output_about_page.png)


## Tugas

1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users.

   **Screenshot:**
   ![Tampilan halaman User](public/images/07_tugas_1.png)

2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID

   **Screenshot:**
   ![Tampilan halaman detail User](public/images/07_tugas_2.png) 

3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap)
dan tampilkan data tersebut di halaman front-end

   **Screenshoot:**
   ![Tampilan halaman Weather](public/images/07_tugas_3.png)