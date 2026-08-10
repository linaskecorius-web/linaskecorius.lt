'use client'

import { Star, Scissors, Languages, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const icons = [Star, Scissors, Languages, MapPin]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="apie" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] tracking-luxury text-gold">
              {t.about.title}
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-foreground text-balance md:text-5xl">
              {t.about.subtitle}
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground text-pretty">
              {t.about.text}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {t.about.highlights.map((h, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={h.title}
                  className="flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-muted"
                >
                  <Icon className="size-5 text-gold" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {h.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
