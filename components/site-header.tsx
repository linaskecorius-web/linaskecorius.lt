'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage, type Lang } from '@/lib/i18n'
import { BookButton } from '@/components/book-button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#apie', label: t.nav.about },
    { href: '#paslaugos', label: t.nav.services },
    { href: '#atsiliepimai', label: t.nav.reviews },
    { href: '#galerija', label: t.nav.gallery },
    { href: '#lokacija', label: t.nav.location },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-border bg-background'
          : 'border-b border-transparent bg-background/95',
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide-lux text-foreground md:text-xl"
        >
          LINAS KECORIUS
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-wide-lux text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <BookButton className="hidden md:inline-flex">{t.cta}</BookButton>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 md:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-xs tracking-wide-lux text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <BookButton className="mt-3">{t.cta}</BookButton>
          </nav>
        </div>
      )}
    </header>
  )
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (l: Lang) => void
}) {
  return (
    <div className="flex items-center gap-1 text-[11px] tracking-wide-lux">
      {(['lt', 'en'] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i === 1 && <span className="text-border">|</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            className={cn(
              'transition-colors',
              lang === l
                ? 'text-gold'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
