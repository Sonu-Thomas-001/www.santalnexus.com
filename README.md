# SANTAL NEXUS — Next.js TypeScript Web Portal & Export Platform

A modern, high-performance web portal built with **Next.js (App Router)**, **TypeScript**, and **Vanilla CSS** for **Santal Nexus**, an India-based fresh fruits and vegetables trading enterprise specializing in direct-from-farm sourcing, wholesale supply coordination, cold-chain logistics, and cross-border international exports.

- **Brand Slogan:** *Expanding Beyond Borders*
- **Registered Base:** Building No. 391/3, Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti, Madurai – 625218, Tamil Nadu, India
- **Commercial Lead & Founder:** Bala Chellapandiyan (+91 99946 40141)
- **Official Email:** `santalnexus@gmail.com`
- **Domain:** [https://www.santalnexus.com](https://www.santalnexus.com)

---

## 1. Project Architecture (Next.js App Router & TypeScript)

```
www.santalnexus.com/
├── app/
│   ├── layout.tsx               # Root Layout, Metadata, Google Fonts & JSON-LD
│   ├── page.tsx                 # Homepage: Hero, Trust Strip, Produce, Services & Form
│   ├── globals.css              # Custom properties, design tokens & responsive CSS
│   ├── about/
│   │   └── page.tsx             # Heritage, Story, Vision, Mission & Sourcing Hub
│   ├── products/
│   │   └── page.tsx             # Full Produce Catalogue, Filter Tabs & Packaging Specs
│   ├── export-services/
│   │   └── page.tsx             # Corridors, Reefer Specs, Incoterms & RFQ Form
│   ├── team/
│   │   └── page.tsx             # Leadership Profiles, Desks, Values & Founder Quote
│   └── contact/
│       └── page.tsx             # Trade Office, Interactive Form, Desk Routing & Map
├── components/
│   ├── Header.tsx               # Responsive Header, Drawer & Scrolled Nav
│   ├── Footer.tsx               # Corporate Footer & Trade Inquiries
│   ├── Preloader.tsx            # Emerald-and-gold entrance animation
│   ├── ContactForm.tsx          # Dual-channel WhatsApp/Email validated form
│   ├── ExportRfqForm.tsx        # Multi-parameter Export RFQ Generator
│   ├── FaqAccordion.tsx         # Accessible Collapsible Trade FAQs
│   ├── ProductFilter.tsx        # Filterable Produce Grid & WhatsApp Actions
│   ├── ScrollReveal.tsx         # IntersectionObserver micro-reveal animations
│   ├── WhatsAppButton.tsx       # Floating quick-inquiry WhatsApp button
│   └── BackToTop.tsx            # Smooth floating back-to-top button
├── data/
│   ├── products.ts              # Typed produce catalogue data
│   ├── team.ts                  # Typed team & operational desks data
│   ├── exportCorridors.ts       # Typed shipping corridors, incoterms & reefers
│   └── faq.ts                   # Trade, quality & logistics FAQs
├── public/                      # Static assets served at root
│   ├── assets/
│   │   ├── images/              # High-resolution photographic assets
│   │   └── logos/               # Brand vectors & logo variants
│   ├── favicon.svg              # Scalable SVG favicon
│   ├── robots.txt               # Search engine crawler policies
│   └── sitemap.xml              # XML Sitemap
├── next.config.mjs              # Next.js optimization configuration
├── tsconfig.json                # TypeScript strict configuration
└── package.json                 # Scripts and dependencies
```

---

## 2. Key Features

- **Next.js App Router + TypeScript:** Modern type-safe architecture with static prerendering for near-instant page loads.
- **Dual-Channel Lead Capture:** Interactive quote and RFQ forms that automatically generate structured WhatsApp inquiries (+91 99946 40141) and direct email fallbacks.
- **Dynamic Produce Filtering:** Instant filtering between Vegetables, Fruits, Leafy Greens, and Exotics with specifications and packaging sizes.
- **Export Logistics Hub:** Complete breakdown of shipping corridors (Malaysia, Singapore, GCC, Europe), Incoterms (FOB, CIF, CFR), and Reefer container capacities.
- **SEO & Social Optimization:** Schema.org JSON-LD structured data, OpenGraph tags, and semantic HTML5 hierarchy.

---

## 3. Local Development

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

---

## 4. Production Deployment

This project is ready for one-click deployment to **Vercel**, **Cloudflare Pages**, or **AWS/DigitalOcean Node server**:

### Vercel Deployment (Recommended)
1. Push code to GitHub.
2. Import project in Vercel.
3. Next.js preset will automatically detect build settings.
