import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { PageDisclaimer } from '@/components/site-disclaimer'
import { CatalogClient } from '@/components/catalog-client'

export const metadata: Metadata = {
  title: 'Catálogo de eventos deportivos — GospainSportTours',
  description:
    'Explora todos los eventos deportivos en España y Europa. Compara precios de entradas entre las principales plataformas de reventa. Mercado secundario.',
}

interface CatalogPageProps {
  searchParams: Promise<{ sport?: string }>
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { sport } = await searchParams

  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        {/* Page header */}
        <div className="border-b border-border bg-background py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Catálogo de eventos
            </p>
            <h1 className="mt-1 font-heading text-3xl font-black text-foreground text-balance md:text-4xl">
              Todos los eventos deportivos
            </h1>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Compara precios entre Ticketmaster, StubHub, Viagogo, AXS, Eventim y más.
              GospainSportTours es un <strong>mercado secundario</strong>. Los precios pueden
              ser <strong>superiores al valor nominal</strong>.
            </p>
            <div className="mt-5">
              <PageDisclaimer />
            </div>
          </div>
        </div>

        <CatalogClient initialSport={sport} />
      </main>
      <SiteFooter />
    </>
  )
}
