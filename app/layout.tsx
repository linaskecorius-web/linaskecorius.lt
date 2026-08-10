import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const SITE_URL = 'https://linaskecorius.lt'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Linas Kecorius — Vyriškas Kirpimas ir Barzdos Tvarkymas Vilnius',
  description:
    'Linas Kecorius – profesionalus vyriškas plaukų kirpimas ir barzdos formavimas mašinėle Vilniuje. Rezervuokite vizitą internetu.',
  keywords: [
    'Linas Kecorius',
    'Linas Kecorius kirpėjas',
    'Linas Kecorius plaukų stilistas',
    'vyriškas kirpimas Vilnius',
    'barzdos tvarkymas Vilnius',
    'barzderis Vilnius',
    'vyru kirpykla Vilnius',
    'Treatwell kirpėjas Vilnius',
  ],
  generator: 'v0.app',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Linas Kecorius',
    title:
      'Linas Kecorius — Vyriškas Kirpimas ir Barzdos Tvarkymas Vilnius',
    description:
      'Profesionalus vyriškas plaukų kirpimas ir barzdos formavimas mašinėle Vilniuje.',
    locale: 'lt_LT',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Linas Kecorius — Vyriškas Kirpimas ir Barzdos Tvarkymas',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f0f',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Linas Kecorius',
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  priceRange: '€60 - €80',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ukmergės g. 126',
    addressLocality: 'Vilnius',
    postalCode: '08100',
    addressCountry: 'LT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.7126,
    longitude: 25.2502,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vyriškų kirpimų ir barzdos tvarkymo paslaugos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plaukų kirpimas',
          description: 'Tikslus kirpimas, plaukų plovimas ir sušukavimas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plaukų kirpimas ir barzdos tvarkymas',
          description: 'Tikslus plaukų kirpimas ir barzdos formavimas mašinėle.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '700',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="lt"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5VX74THCC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5VX74THCC');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}