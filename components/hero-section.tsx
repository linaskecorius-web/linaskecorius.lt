'use client'

import { useLanguage } from '@/lib/i18n'
import { BookButton } from '@/components/book-button'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* subtle radial vignette, no blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, rgba(197,160,89,0.06) 0%, rgba(15,15,15,0) 55%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
        <p className="mb-8 text-[11px] tracking-luxury text-gold">VILNIUS</p>
        <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl md:text-8xl">
          {t.hero.name}
        </h1>
        <div className="mx-auto my-8 h-px w-16 bg-gold/50" />
        <p className="text-xs tracking-wide-lux text-muted-foreground text-balance">
          {t.hero.subtitle}
        </p>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 text-pretty md:text-2xl">
          {'“'}
          {t.hero.tagline}
          {'”'}
        </p>
        <div className="mt-12 flex justify-center">
          <BookButton>{t.cta}</BookButton>
        </div>
      </div>
    </section>
  )
}
