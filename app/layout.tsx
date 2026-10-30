import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#10271D',
  width: 'device-width',
  initialScale: 1,
};
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.santalnexus.com'),
  title: {
    default: 'Santal Nexus | Fresh Produce Trading & Global Trade Enquiries',
    template: '%s | Santal Nexus',
  },
  description:
    'Explore Santal Nexus, an India-based fresh fruits and vegetables trading business focused on B2B sourcing, supply coordination and international trade enquiries.',
  keywords: [
    'fresh produce trading India',
    'fruits vegetables wholesale Madurai',
    'fresh vegetables export',
    'B2B produce supply Tamil Nadu',
    'Santal Nexus',
    'Cavendish Bananas export',
    'Indian Red Onions wholesale',
  ],
  authors: [{ name: 'Santal Nexus' }],
  creator: 'Santal Nexus',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/logos/santal-nexus-favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/logos/santal-nexus-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.santalnexus.com/',
    siteName: 'Santal Nexus',
    title: 'Santal Nexus | Fresh Produce Trading & Global Trade Enquiries',
    description:
      'Explore Santal Nexus, an India-based fresh fruits and vegetables trading business focused on B2B sourcing, supply coordination and international trade enquiries.',
    images: [
      {
        url: '/assets/images/fresh-produce-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Santal Nexus Fresh Produce Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santal Nexus | Fresh Produce Trading & Global Trade Enquiries',
    description:
      'Explore Santal Nexus, an India-based fresh fruits and vegetables trading business focused on B2B sourcing, supply coordination and international trade enquiries.',
    images: ['/assets/images/fresh-produce-hero.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WholesaleStore',
  name: 'Santal Nexus',
  legalName: 'Santal Nexus',
  alternateName: 'Santal Nexus - Expanding Beyond Borders',
  url: 'https://www.santalnexus.com/',
  logo: 'https://www.santalnexus.com/assets/logos/santal-nexus-dark.png',
  image: 'https://www.santalnexus.com/assets/images/fresh-produce-hero.jpg',
  description:
    'India-based fresh fruits and vegetables trading business focused on B2B sourcing, wholesale supply coordination and international trade opportunities.',
  telephone: '+919994640141',
  email: 'santalnexus@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Bala Chellapandiyan',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Building No. 391/3, Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625218',
    addressCountry: 'IN',
  },
  priceRange: '$$',
  currenciesAccepted: 'INR, USD',
  paymentAccepted: 'Bank Transfer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <a href="#mainContent" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="mainContent">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
