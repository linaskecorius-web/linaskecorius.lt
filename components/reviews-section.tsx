'use client'

import { useRef, useEffect, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth > 640 ? 400 : 300
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  // Automatinis slankiojimas kas 3.5s
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        
        // Jei pasiekė galą, grįžta į pradžią
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scroll('right')
        }
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section id="atsiliepimai" className="border-t border-border py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Stars className="flex gap-1" />
          </div>
          <p className="mt-3 text-[11px] tracking-wide-lux text-muted-foreground uppercase">
            {t.reviews.rating}
          </p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-foreground text-balance md:text-4xl">
            {t.reviews.title}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {t.reviews.badges.map((b) => (
              <span
                key={b}
                className="border border-gold/30 px-4 py-2 text-[10px] tracking-wide-lux text-gold uppercase"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Karuselė ir valdymo mygtukai */}
        <div 
          className="relative mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Slankiojimo mygtukai viršuje dešinėje */}
          <div className="absolute -top-12 right-0 flex items-center gap-2 z-10">
            <button
              onClick={() => scroll('left')}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-gold hover:text-gold"
              aria-label="Ankstesnis"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-gold hover:text-gold"
              aria-label="Kitas"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Horizontalus atsiliepimų konteineris */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.reviews.items.map((r, i) => (
              <figure
                key={i}
                className="w-[300px] shrink-0 snap-start flex flex-col justify-between gap-6 border border-border bg-card p-8 md:w-[360px]"
              >
                <div className="flex flex-col gap-6">
                  <Stars className="flex gap-0.5" />
                  <blockquote className="font-serif text-base italic leading-relaxed text-foreground/85 text-pretty">
                    {'“'}
                    {r.text}
                    {'”'}
                  </blockquote>
                </div>
                <figcaption className="text-xs tracking-wide-lux text-muted-foreground border-t border-border/50 pt-4 flex justify-between items-center">
                  <span>{r.author}</span>
                  <span className="text-[10px] text-gold">TREATWELL</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}