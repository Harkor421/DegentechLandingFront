import { inter, jetbrainsMono } from './fonts';
import './globals.css';
import Providers from '@/components/providers/Providers';

export const metadata = {
  metadataBase: new URL('https://degentech.co'),
  title: {
    default: 'DegenTech | Software & Hardware for the Autonomous Economy',
    template: '%s | DegenTech',
  },
  description:
    'We build custom software, manufacture precision hardware, and integrate intelligent systems for companies worldwide. 50+ projects delivered across 12 countries.',
  keywords: [
    'custom software development',
    'IoT integration',
    '3D manufacturing',
    'product strategy',
    'SaaS development',
    'autonomous systems',
    'DegenTech',
  ],
  authors: [{ name: 'DegenTech' }],
  creator: 'DegenTech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://degentech.co',
    siteName: 'DegenTech',
    title: 'DegenTech | Software & Hardware for the Autonomous Economy',
    description:
      'Custom software, precision hardware, and intelligent systems for companies worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DegenTech - Software & Hardware for the Autonomous Economy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DegenTech | Software & Hardware for the Autonomous Economy',
    description:
      'Custom software, precision hardware, and intelligent systems for companies worldwide.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://degentech.co/#organization',
      name: 'DegenTech',
      url: 'https://degentech.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://degentech.co/logo.png',
      },
      description:
        'We build custom software, manufacture precision hardware, and integrate intelligent systems for companies worldwide.',
      foundingDate: '2020',
      founder: [
        { '@type': 'Person', name: 'Anthony Rodelo', jobTitle: 'CEO' },
        { '@type': 'Person', name: 'Samir Gonzalez', jobTitle: 'CTO' },
        { '@type': 'Person', name: 'Ismael Morales', jobTitle: 'COO' },
      ],
      sameAs: ['https://github.com/degentech', 'https://twitter.com/degentech', 'https://linkedin.com/company/degentech'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://degentech.co/#website',
      url: 'https://degentech.co',
      name: 'DegenTech',
      publisher: { '@id': 'https://degentech.co/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Custom Software Development',
      provider: { '@id': 'https://degentech.co/#organization' },
      description: 'SaaS platforms, APIs & internal tools built for scale and reliability.',
    },
    {
      '@type': 'Service',
      name: '3D Manufacturing',
      provider: { '@id': 'https://degentech.co/#organization' },
      description: 'Rapid prototyping & production-grade parts with industrial precision.',
    },
    {
      '@type': 'Service',
      name: 'IoT Integration',
      provider: { '@id': 'https://degentech.co/#organization' },
      description: 'Bridging hardware and software with connected device ecosystems.',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
