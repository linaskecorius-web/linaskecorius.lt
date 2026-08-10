'use client'

import { AtSign } from 'lucide-react'
import { useLanguage, REELS, INSTAGRAM_URL } from '@/lib/i18n'

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section
      id="galerija"
      className="border-t border-border bg-muted/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-[11px] tracking-luxury text-gold">
            {t.gallery.title}
          </p>
          <h2 className="mt-5 font-serif text-3xl font-light text-foreground text-balance md:text-4xl">
            {t.gallery.subtitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {REELS.map((url) => {
            const embedUrl = `${url.replace(/\/$/, '')}/embed`

            return (
              <div
                key={url}
                className="overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-gold/40"
              >
                <iframe
                  src={embedUrl}
                  className="w-full h-[480px] border-0"
                  scrolling="no"
                ></iframe>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-wide-lux text-muted-foreground transition-colors hover:text-gold"
          >
            <AtSign className="size-4" />
            {t.gallery.more}
          </a>
        </div>
      </div>
    </section>
  )
}