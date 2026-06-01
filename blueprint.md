# MASTER PROJECT BLUEPRINT: NEXT-GEN INTERACTIVE PORTFOLIO
**Project Owner:** Riyan Zakaria Zulkarnain (Software Engineer)
**Architecture Style:** Single Page Application (SPA)
**Core Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Zustand

---

## 1. PRODUCT REQUIREMENT DOCUMENT (PRD)

### 1.1. Core Objective
Membangun portofolio *Software Engineer* interaktif dan berkinerja tinggi (*zero-friction*) yang menonjolkan keahlian di bidang Mobile Development (Kotlin, Jetpack Compose), Backend (Laravel), dan Data Engineering (Python), dibalut dengan UI/UX modern bertema teknologi/sedikit sentuhan *sleek cyberpunk*.

### 1.2. Key Features
*   **Bilingual System (i18n):** Mendukung Bahasa Indonesia dan English secara *seamless*.
*   **Interactive Featured Works:** Galeri proyek yang menggunakan Modal/Pop-up dinamis untuk detail proyek tanpa perpindahan halaman yang merusak retensi.
*   **Zero-Friction Resume:** Tombol unduh CV langsung (statis) tanpa melewati gerbang formulir.
*   **Serverless Contact Form:** Formulir kontak langsung yang dieksekusi di sisi server.
*   **Dark/Light Mode Toggle:** Kontrol tema warna penuh oleh pengguna.

---

## 2. USER FLOW & LOGIC MAPPING

### 2.1. Navigation Journey
1.  **Landing:** Disambut dengan *Hero Section* (Nama, *Headline* teknis, *Call-to-Action* yang magnetik).
2.  **Exploration:** *Smooth scrolling* linear ke bawah menuju *Tech Stack*, *Featured Projects*, dan *Experience*.
3.  **Interaction:** Saat pengguna mengklik salah satu kartu proyek, halaman latar belakang membeku (`overflow-hidden`), dan Modal muncul di atasnya menampilkan arsitektur proyek (misal: RAG System dengan Python, atau integrasi Laravel-Midtrans).
4.  **Conversion:** Pengguna mencapai *Contact Form* di bagian bawah, mengisi data, dan menerima *feedback* sukses seketika.

---

## 3. TECHNICAL BLUEPRINT & ARCHITECTURE

### 3.1. Infrastructure
*   **Framework:** Next.js (App Router) untuk optimalisasi SEO otomatis dan *Server Actions*.
*   **State Management:** Zustand (untuk mengontrol *state* Modal Proyek, UI *Mobile Menu*, dan Bahasa).
*   **Email Delivery:** Resend API + Next.js Server Actions (tanpa layanan form pihak ketiga).

### 3.2. Data Schema (i18n JSON Mock API)
Data portofolio akan disimpan secara lokal (`/data/projects.json`) agar siap dihubungkan ke API di masa depan.
```json
{
  "id": "rag-data-engine",
  "slug": "rag-uts-kel7",
  "thumbnail_url": "/assets/projects/rag-system.webp",
  "tech_stack": ["Python", "Pandas", "LLM"],
  "github_url": "[https://github.com/](https://github.com/)...",
  "live_url": "https://...",
  "content": {
    "en": {
      "title": "RAG System for Data Engineering",
      "short_desc": "Retrieval-Augmented Generation system with advanced indexing...",
      "full_desc": "Detailed explanation of the indexing and UI logic..."
    },
    "id": {
      "title": "Sistem RAG untuk Data Engineering",
      "short_desc": "Sistem Retrieval-Augmented Generation dengan indeks lanjutan...",
      "full_desc": "Penjelasan detail mengenai logika indeks dan antarmuka..."
    }
  }
}

4. DESIGN SYSTEM & VISUAL TOKENS
4.1. Theming & Aesthetics
Vibe: Modern, bersih, bernuansa teknologi tinggi dengan sentuhan Glassmorphism.

Typography: Plus Jakarta Sans (Utama) dan JetBrains Mono (Aksen teknis/kode).

Color Tokens:

Light Mode: Background #F8FAFC, Teks #0F172A.

Dark Mode: Background #020617 (Slate 950), Teks #F8FAFC.

Accent: Electric Indigo (#6366F1).

4.2. Animation Core (Framer Motion + Lenis)
Lenis Smooth Scroll: Scrolling matematis yang presisi dan tidak mengganggu performa.

Magnetic Buttons: Tombol CTA di Hero section yang "tertarik" mengikuti kursor.

Custom Cursor: Lingkaran kursor interaktif (mix-blend-mode: difference) khusus desktop. Sembunyikan untuk layar sentuh.

3D Tilt Cards: Kartu proyek bereaksi secara 3D terhadap pergerakan mouse.