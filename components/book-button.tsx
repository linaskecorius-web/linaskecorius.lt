'use client'

import { TREATWELL_URL } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function BookButton({
  children,
  variant = 'solid',
  className,
}: {
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}) {
  return (
    <a
      href={TREATWELL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium tracking-wide-lux transition-all duration-300',
        variant === 'solid'
          ? 'bg-gold text-gold-foreground hover:bg-gold/90'
          : 'border border-gold/40 text-gold hover:border-gold hover:bg-gold/5',
        className,
      )}
    >
      {children}
    </a>
  )
}
