import { LanguageProvider } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ReviewsSection } from '@/components/reviews-section'
import { GallerySection } from '@/components/gallery-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
