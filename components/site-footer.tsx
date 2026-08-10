'use client'

import { MapPin, Clock } from 'lucide-react'
import { useLanguage, INSTAGRAM_URL, TREATWELL_URL } from '@/lib/i18n'
import { BookButton } from '@/components/book-button'

export function SiteFooter() {
  const { t } = useLanguage()

  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Gentleman%27s+Empire+Ukmerg%C4%97s+g.+126+Vilnius"
  const mapEmbedUrl = "https://maps.google.com/maps?q=Gentleman's%20Empire%20Ukmerg%C4%97s%20g.%20126%20Vilnius&t=&z=15&ie=UTF8&iwloc=&output=embed"

  return (
    <footer id="lokacija" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              {t.location.title}
            </h2>

            <dl className="mt-10 space-y-6">
              {/* Paspaudžiama adreso nuoroda */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <dd className="leading-relaxed text-muted-foreground">
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold hover:underline cursor-pointer"
                  >
                    {t.location.address}
                  </a>
                </dd>
              </div>

              {/* Darbo laikas */}
              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <dt className="text-[11px] tracking-wide-lux text-foreground">
                    {t.location.hoursLabel}
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{t.location.hours}</dd>
                </div>
              </div>
            </dl>

            {/* Google Maps žemėlapis */}
            <div className="mt-8 h-[220px] w-full overflow-hidden rounded-lg border border-border bg-card">
              <iframe
                title="Gentleman's Empire Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end md:text-right">
            <p className="text-[11px] tracking-wide-lux text-muted-foreground">
              {t.location.linksLabel}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground transition-colors hover:text-gold md:flex-row-reverse"
              >
                Instagram · @linas_kecorius
              </a>
              <a
                href={TREATWELL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-foreground transition-colors hover:text-gold"
              >
                Treatwell
              </a>
            </div>
            <BookButton className="mt-8">{t.cta}</BookButton>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-center text-[11px] tracking-wide-lux text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}