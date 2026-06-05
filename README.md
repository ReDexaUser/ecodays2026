# ECODAYS 2026

Website resmi ECODAYS 2026 — dibangun dengan [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

| Tools | Keterangan |
|---|---|
| **Astro** | Static site generator, output static HTML |
| **Tailwind CSS** | Utility-first CSS framework |
| **TypeScript** | Type safety |
| **GitHub Pages** | Hosting & deployment |
| **Custom Domain** | Domain sendiri |

## Struktur Folder

```
ecodays2026/
├── public/
│   ├── favicon.ico
│   ├── CNAME                      # custom domain
│   └── assets/
│       ├── logo-ecodays.svg
│       ├── poster-hero.webp
│       ├── poster-lomba1.webp
│       ├── poster-lomba2.webp
│       ├── poster-seminar.webp
│       ├── sponsors/
│       └── gallery/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Timeline.astro
│   │   ├── Lomba.astro            # wrapper + 2 kartu
│   │   ├── Seminar.astro
│   │   ├── Sponsors.astro
│   │   ├── Gallery.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro       # head, meta, font, Tailwind
│   ├── pages/
│   │   └── index.astro            # single page — semua section
│   ├── data/
│   │   └── config.ts              # teks terpusat, link, warna
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml             # build + deploy ke gh-pages
```

## Section Halaman

| Section | Konten |
|---|---|
| **Navbar** | Sticky, logo + smooth scroll links + tombol Daftar |
| **Hero** | Poster utama + headline + CTA daftar |
| **About** | Visi, misi, deskripsi ECODAYS |
| **Timeline** | Jadwal acara |
| **Lomba** | 2 kartu lomba utama |
| **Seminar** | Info pembicara, tema, waktu |
| **Sponsor** | Grid logo sponsor |
| **Dokumentasi** | Galeri foto |
| **Kontak** | Email, sosial media |
| **Footer** | Copyright, link |

## Color Palette

| Role | Hex | Penggunaan |
|---|---|---|
| **Primary** | `#0D4720` | Navbar, heading, tombol |
| **Primary Light** | `#1B6B36` | Hover state |
| **Accent** | `#F5A623` | CTA buttons, highlights |
| **Background** | `#FFFFFF` | Latar utama |
| **Surface** | `#F0F7F2` | Card, section alternatif |
| **Text** | `#1A1A1A` | Body text |

## Development

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## Deployment

Push ke branch `main` → GitHub Actions otomatis build & deploy ke `gh-pages`.
