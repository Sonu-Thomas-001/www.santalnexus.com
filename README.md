# SANTAL NEXUS — Corporate Website & Trade Portal

A production-ready, ultra-fast static corporate web portal for **Santal Nexus**, an India-based fresh fruits and vegetables trading enterprise specializing in direct-from-farm sourcing, wholesale supply coordination, cold-chain logistics, and cross-border international exports.

- **Brand Slogan:** *Expanding Beyond Borders*
- **Registered Base:** Building No. 391/3, Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti, Madurai – 625218, Tamil Nadu, India
- **Commercial Lead & Founder:** Bala Chellapandiyan (+91 99946 40141)
- **Official Email:** `santalnexus@gmail.com`
- **Domain:** [https://www.santalnexus.com](https://www.santalnexus.com)

---

## 1. Multi-Page Architecture

```
www.santalnexus.com/
├── .gitignore                   # Version control ignore definitions
├── index.html                   # Primary corporate homepage & trade summary
├── about.html                   # Company profile, heritage, vision & values
├── products.html                # Comprehensive produce catalog & seasonality
├── export-services.html         # Export logistics, quality compliance & RFQ builder
├── team.html                    # Leadership profiles, organizational culture & roles
├── contact.html                 # Trade office details, interactive lead wizard & maps
├── css/
│   └── styles.css               # Vanilla CSS3 modular design system & brand tokens
├── js/
│   └── main.js                  # Vanilla ES6+ interactions, preloader & page transitions
├── assets/
│   ├── images/                  # High-resolution optimized photographic assets
│   │   ├── team/                # Leadership & core staff photography
│   │   └── ...                  # Farm, crop, packing, and reefer vessel photography
│   └── logos/                   # Vector and transparent brand lockups
├── images/                      # High-resolution master design reference mockups
├── favicon.svg                  # Scalable SVG vector browser icon
├── robots.txt                   # Search crawler indexing rules
├── sitemap.xml                  # Canonical XML sitemap with all subpages
└── README.md                    # Technical documentation & deployment manual
```

---

## 2. Key Features & Visual Design

- **Branded Preloader Experience:**
  - Implements an ambient emerald-and-gold preloader displaying the corporate emblem, spinning gold indicator, and animated branding tagline.
  - Features an asynchronous asset listener with automatic safety fallback timeout.

- **Cinematic Page Transitions:**
  - Smooth page navigation transitions with hardware-accelerated dissolves.
  - Fully compatible with browser Back/Forward Cache (`bfcache` / `pageshow`) to eliminate white flashes or stuck loaders.
  - Automatically respects user OS accessibility settings (`prefers-reduced-motion`).

- **Scroll-Triggered Reveal Animations:**
  - Micro-animations for section titles, benefit cards, product categories, and milestone numbers using modern `IntersectionObserver` triggers.

- **Dual-Channel Lead Capture:**
  - Interactive quote forms on Homepage, Contact, and Export Services pages.
  - Direct WhatsApp API link generator sending pre-formatted business RFQs directly to company leadership (+91 99946 40141).
  - Corporate email mailto fallback for enterprise buyers.

- **Strict Vanilla Stack (Zero Dependencies):**
  - Built exclusively with semantic HTML5, Vanilla CSS3 (Custom Properties, Flexbox, Grid), and Vanilla ES6+ JavaScript.
  - Loads in milliseconds with 0kb external framework baggage.

---

## 3. Local Development & Preview

Because this is a pure static website with no build step required, you can run and test it instantly:

### Option A: Python 3 HTTP Server (Recommended)
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in any browser.

### Option B: Node.js `serve` / `npx http-server`
```bash
npx http-server -p 8000
```

### Option C: VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 4. Production Deployment

This repository is optimized for one-click static hosting on any modern CDN:

### Cloudflare Pages (Recommended)
1. Push to GitHub.
2. Link the repository in [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
3. Set Framework Preset: `None`, Build Command: *(blank)*, Output Directory: `/`.
4. Add custom domain `www.santalnexus.com`.

### Vercel
```bash
npx vercel
```
Or import the GitHub repository into your Vercel dashboard.

### Netlify
1. Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) or link via GitHub.
2. Publish directory: `.`

---

## 5. Maintenance & Content Updates

- **Contact Phone & WhatsApp:** Update the telephone links in HTML files and the `WHATSAPP_PHONE_DIGITS` constant in `js/main.js`.
- **Primary Email:** Update mailto links across HTML files and `PRIMARY_EMAIL` in `js/main.js`.
- **Address & Corporate Data:** Centralized in the footer and Schema.org JSON-LD structured data tags located in each page's `<head>`.
