'use client'

import { Star } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-gold text-gold" />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { t } = useLanguage()

  return (
    <section id="atsiliepimai" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="font-serif text-4xl font-light text-gold">5.0</span>
            <Stars className="flex gap-0.5" />
          </div>
          <p className="mt-3 text-[11px] tracking-wide-lux text-muted-foreground">
            {t.reviews.rating}
          </p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-foreground text-balance md:text-4xl">
            {t.reviews.title}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {t.reviews.badges.map((b) => (
              <span
                key={b}
                className="border border-gold/30 px-4 py-2 text-[10px] tracking-wide-lux text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {t.reviews.items.map((r) => (
            <figure key={r.author} className="flex flex-col gap-6 bg-card p-8">
              <Stars className="flex gap-0.5" />
              <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-foreground/85 text-pretty">
                {'“'}
                {r.text}
                {'”'}
              </blockquote>
              <figcaption className="text-xs tracking-wide-lux text-muted-foreground">
                {r.author} · TREATWELL
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
