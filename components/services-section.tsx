'use client'

import { useLanguage } from '@/lib/i18n'
import { BookButton } from '@/components/book-button'

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="paslaugos"
      className="border-t border-border bg-muted/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-[11px] tracking-luxury text-gold">
            {t.services.title}
          </p>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {t.services.items.map((s) => (
            <li
              key={s.name}
              className="py-8 text-center"
            >
              <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
                {s.name}
              </h3>
              <p className="mt-2 mx-auto max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <BookButton>{t.cta}</BookButton>
        </div>
      </div>
    </section>
  )
}