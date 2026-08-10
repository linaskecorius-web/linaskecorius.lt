'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'lt' | 'en'

export const TREATWELL_URL =
  'https://www.treatwell.lt/salonas/gentleman-s-empire/'
export const INSTAGRAM_URL = 'https://www.instagram.com/linas_kecorius/'
export const REELS = [
  'https://www.instagram.com/reel/Db0K6zCR2ht/',
  'https://www.instagram.com/reel/DOSja0giFwE/',
  'https://www.instagram.com/reel/DI8EVD3MlZ1/',
]

type Dict = typeof translations.lt

export const translations = {
  lt: {
    nav: {
      about: 'APIE MANE',
      services: 'PASLAUGOS',
      reviews: 'ATSILIEPIMAI',
      gallery: 'GALERIJA',
      location: 'LOKACIJA',
    },
    cta: 'REZERVUOTI VIZITĄ',
    hero: {
      name: 'Linas Kecorius',
      subtitle: 'MEISTRIŠKUMAS IR TIKSLUS STILIUS — GENTLEMAN’S EMPIRE, VILNIUS',
      tagline:
        'Aš ne tiesiog kerpu plaukus – aš kuriu jūsų įvaizdį. Dedikuota vyrams, vertinantiems subtilią prabangą, švarias linijas ir kokybišką laiką.',
    },
    about: {
      title: 'APIE MANE',
      subtitle: 'Asmeninis dėmesys ir tikslumas',
      text: 'Skiriu pilną dėmesį jūsų pageidavimams ir detalėms. Jokios skubos – tik ramus, profesionalus darbas, švarios linijos ir nepriekaištingai išbaigtas įvaizdis.',
      highlights: [
        {
          title: 'Aukščiausias įvertinimas',
          text: 'Puikūs klientų atsiliepimai Treatwell platformoje.',
        },
        {
          title: 'Meistriškas tikslumas',
          text: 'Tikslus plaukų kirpimas ir meistriškas barzdos formavimas mašinėle.',
        },
        {
          title: 'Dvi kalbos',
          text: 'Paslaugos teikiamos lietuvių ir anglų kalbomis.',
        },
        {
          title: 'CORE Verslo Centras',
          text: 'Salonas įsikūręs CORE Verslo Centre (Ukmergės g. 126, Vilnius).',
        },
      ],
    },
    services: {
      title: 'PASLAUGOS',
      items: [
        {
          name: 'Plaukų kirpimas',
          desc: 'Tikslus kirpimas, plaukų plovimas ir sušukavimas.',
        },
        {
          name: 'Plaukų kirpimas ir barzdos tvarkymas',
          desc: 'Tikslus plaukų kirpimas ir barzdos formavimas mašinėle.',
        },
      ],
    },
    reviews: {
      rating: 'Treatwell klientų įvertinimas',
      title: 'AUKŠČIAUSIAIS BALAIS VERTINAMAS MEISTRAS',
      badges: ['PROFESIONALU', 'AUKŠTA KVALIFIKACIJA', 'DĖMESYS DETALĖMS'],
      items: [
        {
          text: 'Kaskart idealiai atliktas darbas. Linas puikiai jaučia stilių ir visada pasirūpina, kad iš salono išeičiau atrodydamas nepriekaištingai.',
          author: 'Mantas V.',
        },
        {
          text: 'Rami atmosfera, jokios skubos ir absoliutus tikslumas. Geriausia patirtis tvarkantis plaukus ir barzdą Vilniuje.',
          author: 'Tomas K.',
        },
        {
          text: 'Aukščiausia klasė. Labai kruopštus barzdos formavimas mašinėle ir puikus bendravimas.',
          author: 'Paulius R.',
        },
      ],
    },
    gallery: {
      title: 'DARBŲ GALERIJA',
      subtitle: 'Tikslumas, forma ir švarios linijos',
      cardLabel: 'Žiūrėti Reels',
      more: 'Daugiau darbų rasite Instagram @linas_kecorius',
    },
    location: {
      title: 'Gentleman’s Empire',
      address: 'Ukmergės g. 126, Vilnius · CORE Verslo Centras',
      hoursLabel: 'Darbo laikas',
      hours: 'II–V: pagal registraciją',
      linksLabel: 'Nuorodos',
    },
    footer: {
      copyright: '© 2026 LINAS KECORIUS — VILNIUS, LIETUVA',
    },
  },
  en: {
    nav: {
      about: 'ABOUT',
      services: 'SERVICES',
      reviews: 'REVIEWS',
      gallery: 'GALLERY',
      location: 'LOCATION',
    },
    cta: 'BOOK A VISIT',
    hero: {
      name: 'Linas Kecorius',
      subtitle: 'CRAFTSMANSHIP & PRECISE STYLE — GENTLEMAN’S EMPIRE, VILNIUS',
      tagline:
        'I don’t just cut hair – I craft your image. Dedicated to men who value understated luxury, clean lines and quality time.',
    },
    about: {
      title: 'ABOUT',
      subtitle: 'Personal attention and precision',
      text: 'I give my full attention to your wishes and to every detail. No rush – only calm, professional work, clean lines and a flawlessly finished look.',
      highlights: [
        {
          title: 'Top rated',
          text: 'Excellent client reviews on the Treatwell platform.',
        },
        {
          title: 'Masterful precision',
          text: 'Precise haircuts and expert clipper beard shaping.',
        },
        {
          title: 'Two languages',
          text: 'Services provided in Lithuanian and English.',
        },
        {
          title: 'CORE Business Centre',
          text: 'The salon is located in CORE Business Centre (Ukmergės g. 126, Vilnius).',
        },
      ],
    },
    services: {
      title: 'SERVICES',
      items: [
        {
          name: 'Haircut',
          desc: 'Precise cut, hair wash and styling.',
        },
        {
          name: 'Haircut & beard grooming',
          desc: 'Precise haircut and clipper beard shaping.',
        },
      ],
    },
    reviews: {
      rating: 'Treatwell client rating',
      title: 'A TOP-RATED MASTER',
      badges: ['PROFESSIONAL', 'HIGHLY QUALIFIED', 'ATTENTION TO DETAIL'],
      items: [
        {
          text: 'Perfect work every single time. Linas has a great sense of style and always makes sure I leave looking flawless.',
          author: 'Mantas V.',
        },
        {
          text: 'Calm atmosphere, no rush and absolute precision. The best hair and beard experience in Vilnius.',
          author: 'Tomas K.',
        },
        {
          text: 'Top class. Very meticulous clipper beard shaping and great communication.',
          author: 'Paulius R.',
        },
      ],
    },
    gallery: {
      title: 'PORTFOLIO',
      subtitle: 'Precision, shape and clean lines',
      cardLabel: 'Watch Reel',
      more: 'Find more work on Instagram @linas_kecorius',
    },
    location: {
      title: 'Gentleman’s Empire',
      address: 'Ukmergės g. 126, Vilnius · CORE Business Centre',
      hoursLabel: 'Opening hours',
      hours: 'Tue–Fri: by appointment',
      linksLabel: 'Links',
    },
    footer: {
      copyright: '© 2026 LINAS KECORIUS — VILNIUS, LITHUANIA',
    },
  },
} satisfies Record<Lang, unknown>

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('lt')
  const t = translations[lang] as Dict
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}