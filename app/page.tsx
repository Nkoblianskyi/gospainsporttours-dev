import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { HomeHero } from '@/components/home-hero'
import { FeaturedEvents } from '@/components/featured-events'
import { HowItWorks } from '@/components/how-it-works'
import { SportCategories } from '@/components/sport-categories'
import { TrustBar } from '@/components/trust-bar'

export default function HomePage() {
  return (
    <>
      {/* Google Ads compliant disclaimer — top 20% of page, permanently visible, not closeable */}
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustBar />
        <FeaturedEvents />
        <HowItWorks />
        <SportCategories />
      </main>
      <SiteFooter />
    </>
  )
}
