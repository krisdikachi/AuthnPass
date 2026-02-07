import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/NavigationBar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeScript from '@/components/ThemeScript';

const inter = Inter({ subsets: ['latin'] });

// Base URL – change to your production domain once live
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://authnpass.io';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  // Core SEO – keyword-rich, benefit-driven
  title: {
    default: 'AuthnPass – Open-Source Passwordless Fingerprint Authentication for Web',
    template: '%s | AuthnPass – Passwordless Web Auth SDK',
  },
  description:
    'Open-source SDK for seamless, passwordless sign-ups using device-native fingerprint authentication (WebAuthn). No passwords, no vendor lock-in. Integrate in minutes with React, Next.js & more.',

  // Keywords help with ranking (Google still considers them indirectly)
  keywords: [
    'passwordless authentication',
    'fingerprint authentication web',
    'WebAuthn SDK',
    'open source auth library',
    'passkeys alternative',
    'biometric login web',
    'passwordless sign up',
    'FIDO2 authentication',
    'open source passwordless',
    'React passwordless auth',
  ],

  // Robots & indexing control
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

  // Open Graph – critical for LinkedIn, Facebook, Discord shares
  openGraph: {
    title: 'AuthnPass – Open-Source Passwordless Fingerprint Auth for Web',
    description:
      'Build secure, frictionless sign-ups with fingerprint scans. Open-source WebAuthn SDK – no passwords needed.',
    url: baseUrl,
    siteName: 'AuthnPass',
    images: [
      {
        url: '/og-image.png', // Create this: 1200×630px image with logo + tagline
        width: 1200,
        height: 630,
        alt: 'AuthnPass – Passwordless Fingerprint Authentication SDK',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter / X cards – optimized for your @NwukoATL shares
  twitter: {
    card: 'summary_large_image',
    title: 'AuthnPass – Open-Source Passwordless Fingerprint Auth SDK',
    description:
      'Kill passwords forever. Open-source WebAuthn library for fingerprint sign-ups on the web.',
    images: ['/og-image.png'], // Same image as OG
    creator: '@NwukoATL',
  },

  // Canonical (prevents duplicate content issues)
  alternates: {
    canonical: baseUrl,
  },

  // Favicon & icons – helps brand recognition & mobile home screen
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest for PWA feel (optional but nice for progressive web app perception)
  manifest: '/site.webmanifest',

  // Viewport (mobile-first indexing)
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optional: Add structured data (JSON-LD) for Organization & SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'AuthnPass',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              url: baseUrl,
              description:
                'Open-source passwordless authentication SDK using fingerprint biometrics via WebAuthn.',
              author: {
                '@type': 'Person',
                name: 'Nwuko Onyedikachi',
                url: 'https://linkedin.com/in/nwuko-onyedikachi',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeScript />
        <ThemeProvider>
          <NavigationBar />
          <main className="bg-white dark:bg-black">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}