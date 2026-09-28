# ECODAYS 2026

Website resmi ECODAYS 2026 — dibangun dengan [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

| Tools | Keterangan |
|---|---|
| **Astro 5** | Static site generator, output HTML statis |
| **Tailwind CSS v4** | Utility-first CSS, config berbasis CSS |
| **TypeScript** | Type safety (strict) |
| **astro-icon** | Ikon (Lucide + Simple Icons) |
| **@astrojs/sitemap** | Generate sitemap otomatis |
| **GitHub Pages** | Hosting & deployment |
| **Custom Domain** | `ecodays.info` |

## Struktur Folder

```
ecodays2026/
├── public/
│   ├── CNAME                      # custom domain ecodays.info
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/                    # gambar sumber (di-load via import.meta.glob)
│   │   ├── banner/                # banner kartu lomba
│   │   ├── daico/                 # maskot
│   │   ├── dokumentasi/           # foto galeri
│   │   ├── hero/                  # latar slideshow hero
│   │   ├── icons/                 # logo + ikon sosial media
│   │   ├── poster/                # poster halaman detail lomba
│   │   ├── sponsors/{xl,l,m}/     # logo sponsor + urls.json
│   │   └── title.webp
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Sponsors.astro
│   │   ├── About.astro
│   │   ├── Timeline.astro
│   │   ├── Lomba.astro
│   │   ├── Seminar.astro
│   │   ├── Gallery.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro       # head, meta, font, script global
│   ├── pages/
│   │   ├── index.astro            # landing satu halaman
│   │   ├── seminar.astro          # /seminar
│   │   ├── 404.astro              # halaman error
│   │   └── lomba/
│   │       └── [slug].astro       # /lomba/<id> (dynamic)
│   ├── data/
│   │   └── config.ts              # teks terpusat, link, timeline, biaya, kontak
│   └── styles/
│       └── global.css             # @theme Tailwind + utilitas kustom
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml             # build + deploy ke GitHub Pages
```

## Halaman

| Route | File | Isi |
|---|---|---|
| `/` | `src/pages/index.astro` | Landing satu halaman: Navbar, Hero, Sponsor, About, Timeline, Lomba, Seminar, Dokumentasi, Footer |
| `/lomba/<id>` | `src/pages/lomba/[slug].astro` | Detail lomba (dynamic dari `LOMBA[].id`) |
| `/seminar` | `src/pages/seminar.astro` | Halaman detail seminar (poster, pembicara, kontak, CTA daftar) |
| `/404` | `src/pages/404.astro` | Halaman error |

## Section Halaman Utama

| Section | Konten |
|---|---|
| **Navbar** | Fixed, logo + link anchor + menu mobile |
| **Hero** | Slideshow latar + headline + CTA |
| **Sponsor** | Grid logo per tier (xl / l / m) |
| **About** | Deskripsi ECODAYS + maskot |
| **Timeline** | Jadwal acara (desktop & mobile) |
| **Lomba** | 2 kartu lomba (ENASCO & ICHEDECE) |
| **Seminar** | Tema, jadwal, pembicara + CTA daftar (teaser ke `/seminar`) |
| **Dokumentasi** | Galeri foto dengan lightbox |
| **Footer** | Kontak, sosial media, copyright |

## Konten

Semua teks, link, timeline, biaya, dan kontak dipusatkan di `src/data/config.ts`.

Menambah lomba:
1. Append objek baru ke array `LOMBA` (field `id` dipakai sebagai slug).
2. Sediakan file poster di `src/assets/poster/` dan banner di `src/assets/banner/` dengan nama sesuai field `poster`/`banner`.
3. Halaman detail otomatis dibuat oleh `src/pages/lomba/[slug].astro`.

## Color Palette

Token kustom Tailwind v4 di `src/styles/global.css` (blok `@theme`):

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-bg` | `#0A3B1D` | Latar utama (hijau tua) |
| `--color-surface` | `#0F4A22` | Permukaan / section alternatif |
| `--color-primary` | `#FFFFFF` | Heading & teks utama di latar gelap |
| `--color-primary-light` | `#1B6B36` | Hover / elevated |
| `--color-accent` | `#F5A623` | CTA & highlight |
| `--color-accent-hover` | `#FFB84D` | Hover CTA |
| `--color-on-accent` | `#0A2E14` | Teks di atas latar accent |
| `--color-muted` | `#A9C6B4` | Teks sekunder (lolos AA) |
| `--color-mint` | `#34D399` | Aksen sekunder |
| `--color-text` | `#FFFFFF` | Teks terang |
| `--color-text-dark` | `#1A1A1A` | Teks gelap |

Font: **Plus Jakarta Sans** (Google Fonts, bobot 400-800). Ikon: **astro-icon** dengan koleksi **Lucide** (UI) dan **Simple Icons** (brand sosial).

## Development

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build (sekaligus verifikasi; tidak ada lint/typecheck)
npm run build

# Preview build
npm run preview
```

## Deployment

Push ke branch `main` → GitHub Actions (`.github/workflows/deploy.yml`) build dengan Node 22 lalu deploy ke GitHub Pages. Situs live di `https://ecodays.info`.
