import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/403', '/maintenance', '/session-expired'],
      },
    ],
    sitemap: 'https://www.santalnexus.com/sitemap.xml',
  };
}

