import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
    'Linas Kecorius | Vyriškas Kirpimas ir Barzdos Tvarkymas Vilnius (CORE)',
  description:
    'Linas Kecorius – ekskliuzyvinis vyriškas plaukų kirpimas ir barzdos formavimas mašinėle Vilniuje, Gentleman\u2019s Empire (CORE verslo centras). Rezervuokite vizitą internetu.',
  keywords: [
    'Linas Kecorius',
    'Linas Kecorius kirpėjas',
    'vyriškas kirpimas Vilnius',
    'barzdos tvarkymas Vilnius',
    'barzderis Vilnius',
    'Gentleman\u2019s Empire CORE',
    'vyru kirpykla Ukmerges g',
    'Treatwell kirpėjas Vilnius',
  ],
  generator: 'v0.app',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Linas Kecorius — Gentleman\u2019s Empire',
    title:
      'Linas Kecorius | Vyriškas Kirpimas ir Barzdos Tvarkymas Vilnius (CORE)',
    description:
      'Ekskliuzyvinis vyriškas plaukų kirpimas ir barzdos formavimas mašinėle Vilniuje, Gentleman\u2019s Empire (CORE verslo centras).',
    locale: 'lt_LT',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f0f',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Linas Kecorius - Gentleman\u2019s Empire',
  image: 'https://www.treatwell.lt/salonas/gentleman-s-empire/',
  url: SITE_URL,
  telephone: '+37060000000',
  priceRange: '\u20AC60 - \u20AC80',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '120',
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
