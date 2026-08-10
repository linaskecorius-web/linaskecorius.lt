'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'lt' | 'en'

export const TREATWELL_URL =
  'https://book.treatwell.lt/salonas/gentleman-s-empire/'
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
      subtitle: 'MEISTRIŠKUMAS IR TIKSLUS STILIUS — VILNIUS',
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
          text: 'Daugiau nei 700+ įvertinimų Treatwell platformoje.',
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
      rating: 'Treatwell klientų įvertinimas (virš 700+ atsiliepimų)',
      title: 'AUKŠČIAUSIAIS BALAIS VERTINAMAS MEISTRAS',
      badges: ['700+ ATSILIEPIMŲ', 'PROFESIONALU', 'DĖMESYS DETALĖMS'],
      items: [
        {
          text: 'Labai rekomenduoju Liną! Visada profesionaliai ir kruopščiai atlieka savo darbą – kerpa tiksliai, atsižvelgia į norus ir pataria, kas geriausiai tinka. Malonus bendravimas, gera atmosfera ir dėmesys kiekvienai detalei.',
          author: 'Prinston',
        },
        {
          text: 'Rekomenduoju 100 % visiems, kurie vertina kokybę, profesionalų požiūrį ir nepriekaištingą rezultatą. Iš Lino visada išeini ne tik puikiai apsikirpęs, bet ir su gera nuotaika!',
          author: 'Karolis',
        },
        {
          text: 'Nuostabi aplinka bei aukščiausio lygio aptarnavimas. Dėkoju Linui, kad profesionaliai viską paaiškino bei pakonsultavo!',
          author: 'Armandas',
        },
        {
          text: 'Labai smagu atvykti, kai tave pasitinka su šypsena, pasiūlo atsigerti ne tik vandens. Apie aptarnavimą visiškai 💯 % tobula.',
          author: 'Paulius',
        },
        {
          text: 'Puiki vyriška vietelė atitrūkti nuo rutinos 👌',
          author: 'Aldas',
        },
        {
          text: 'Linas puikus meistras, talentingas ir dėmesingas. Puikus rezultatas. Visi patenkinti. Rekomenduoju!',
          author: 'Oleg',
        },
        {
          text: 'Puiki patirtis: atsižvelgia į pageidavimus, pasiūlo, kas geriau tinka, rekomenduoju!',
          author: 'Aistis',
        },
        {
          text: 'Geras apsikirpimas suteikia pasitikėjimo savimi, atgaivina įvaizdį ir padeda jaustis tvarkingai kiekvieną dieną.',
          author: 'Lukas',
        },
        {
          text: 'Paslauga atlikta profesionaliai ir kokybiškai.',
          author: 'Vadim',
        },
        {
          text: 'Esu labai patenkintas gaudamas kokybišką paslaugą.',
          author: 'Konstantinas',
        },
        {
          text: 'Linas is the BEST!',
          author: 'Sergejus',
        },
        {
          text: 'Neturiu ką komentuoti, nes kaip visada 🙂👍',
          author: 'Konstantinas',
        },
        {
          text: 'Linas pats geriausias!',
          author: 'Klientas',
        },
        {
          text: 'Viskas super!',
          author: 'Vilius',
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
      subtitle: 'CRAFTSMANSHIP & PRECISE STYLE — VILNIUS',
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
          text: 'Over 700+ reviews on Treatwell platform.',
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
      rating: 'Treatwell client rating (over 700+ reviews)',
      title: 'A TOP-RATED MASTER',
      badges: ['700+ REVIEWS', 'PROFESSIONAL', 'ATTENTION TO DETAIL'],
      items: [
        {
          text: 'Highly recommend Linas! Always does his job professionally and meticulously - cuts precisely, considers desires and advises what fits best.',
          author: 'Prinston',
        },
        {
          text: '100% recommend to everyone who values quality, professional approach and flawless result.',
          author: 'Karolis',
        },
        {
          text: 'Wonderful atmosphere and top-level service. Thanks to Linas for explaining and consulting everything professionally!',
          author: 'Armandas',
        },
        {
          text: 'Great to arrive when you are greeted with a smile, offered coffee or water. Service is 💯% perfect.',
          author: 'Paulius',
        },
        {
          text: 'Great masculine spot to escape routine 👌',
          author: 'Aldas',
        },
        {
          text: 'Linas is a great master, talented and attentive. Great result!',
          author: 'Oleg',
        },
        {
          text: 'Great experience: listens to preferences, suggests what works best, highly recommend!',
          author: 'Aistis',
        },
        {
          text: 'A good haircut gives confidence, refreshes the look and helps feel neat every day.',
          author: 'Lukas',
        },
        {
          text: 'Service done professionally and with high quality.',
          author: 'Vadim',
        },
        {
          text: 'Very satisfied receiving quality service.',
          author: 'Konstantinas',
        },
        {
          text: 'Linas is the BEST!',
          author: 'Sergejus',
        },
        {
          text: 'Nothing to comment, as always 🙂👍',
          author: 'Konstantinas',
        },
        {
          text: 'Linas is the best!',
          author: 'Client',
        },
        {
          text: 'Everything super!',
          author: 'Vilius',
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