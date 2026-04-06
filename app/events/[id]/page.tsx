import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar, MapPin, Clock, ExternalLink,
  ArrowLeft, Globe, AlertTriangle, Info,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { PageDisclaimer } from '@/components/site-disclaimer'
import { events, getEventById, PARTNERS } from '@/lib/events'

interface EventPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { id } = await params
  const event = getEventById(id)
  if (!event) return {}
  return {
    title: `${event.title} — Comparar entradas | GospainSportTours`,
    description: `Compara precios de entradas para ${event.title} en ${event.venue}, ${event.city}. Mercado secundario de reventas. Los precios pueden ser superiores al valor nominal.`,
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function roundPrice(n: number): number {
  return Math.round(n / 5) * 5
}

const sportBadge: Record<string, string> = {
  'Fútbol':     'bg-green-50 text-green-700 border border-green-200',
  'Motor':      'bg-red-50 text-red-700 border border-red-200',
  'Tenis':      'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Ciclismo':   'bg-orange-50 text-orange-700 border border-orange-200',
  'Atletismo':  'bg-blue-50 text-blue-700 border border-blue-200',
  'Baloncesto': 'bg-purple-50 text-purple-700 border border-purple-200',
  'MMA':        'bg-secondary text-foreground border border-border',
  'Triatlón':   'bg-cyan-50 text-cyan-700 border border-cyan-200',
  'Balonmano':  'bg-indigo-50 text-indigo-700 border border-indigo-200',
  'Maratón':    'bg-teal-50 text-teal-700 border border-teal-200',
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = getEventById(id)
  if (!event) notFound()

  const eventPartners = PARTNERS.filter((p) => event.partners.includes(p.id))
  const badgeClass = sportBadge[event.sport] ?? 'bg-secondary text-foreground border border-border'

  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <div className="relative h-72 w-full overflow-hidden bg-muted md:h-[420px]">
          <Image
            src={event.image}
            alt={`Imagen de ${event.title}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* multi-stop gradient for readable text */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.80) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 pb-8 md:px-8">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${badgeClass}`}>
              {event.sport}
            </span>
            <h1 className="mt-2 font-heading text-2xl font-black leading-tight text-white text-balance md:text-4xl">
              {event.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span className="capitalize">{formatDate(event.date)}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {event.time} h
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {event.venue}, {event.city}
              </span>
            </div>
          </div>
        </div>

        {/* ── Page body ────────────────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">

          {/* Back */}
          <Link
            href="/catalog"
            className="mb-8 flex w-fit items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

            {/* ── Left: info ─────────────────────────────────────── */}
            <div className="flex flex-col gap-6 lg:col-span-3">

              {/* Google Ads mandatory page disclaimer */}
              <PageDisclaimer />

              {/* Event details card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">Detalles del evento</h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    { icon: Calendar, label: 'Fecha', value: formatDate(event.date), capitalize: true },
                    { icon: Clock,    label: 'Hora',  value: `${event.time} h` },
                    { icon: MapPin,   label: 'Recinto', value: event.venue },
                    { icon: Globe,    label: 'Ubicación', value: `${event.city}, ${event.country}` },
                  ].map(({ icon: Icon, label, value, capitalize }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
                        <dd className={`mt-0.5 text-sm font-semibold text-foreground ${capitalize ? 'capitalize' : ''}`}>{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Description */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">Sobre el evento</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{event.description}</p>
              </div>

            </div>

            {/* ── Right: price comparison ─────────────────────────── */}
            <aside className="flex flex-col gap-5 lg:col-span-2">

              {/* ── Global price range ── */}
              <div className="overflow-hidden rounded-2xl border border-disclaimer-border bg-disclaimer">
                {/* Header */}
                <div className="border-b border-disclaimer-border px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-disclaimer-foreground/70">
                    Rango de precios
                  </p>
                  {event.priceFrom === 0 ? (
                    <p className="mt-1 font-heading text-4xl font-black text-disclaimer-foreground">Gratis</p>
                  ) : (
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-heading text-4xl font-black text-disclaimer-foreground">
                        {event.priceFrom}€
                      </span>
                      <span className="text-lg font-semibold text-disclaimer-foreground/50">—</span>
                      <span className="font-heading text-4xl font-black text-disclaimer-foreground">
                        {event.priceTo}€
                      </span>
                    </div>
                  )}
                </div>
                {/* Disclaimer */}
                <div className="flex items-start gap-2.5 px-5 py-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-disclaimer-foreground/80" aria-hidden="true" />
                  <p className="text-base leading-snug text-disclaimer-foreground">
                    <strong>Comparamos precios, no vendemos.</strong> Mercado secundario — los precios
                    pueden ser superiores al valor nominal de la entrada.
                  </p>
                </div>
              </div>

              {/* ── Partner comparison ── */}
              <div className="rounded-2xl border border-border bg-card">
                {/* Section header */}
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-heading text-base font-bold text-foreground">Comparar en plataformas</h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    Te redirigimos al proveedor. No procesamos tu pago.
                  </p>
                </div>

                {/* Partner rows */}
                <div className="divide-y divide-border">
                  {eventPartners.map((partner) => {
                    const pFrom = event.priceFrom === 0 ? 0 : roundPrice(event.priceFrom * partner.fromMultiplier)
                    const pTo   = event.priceTo   === 0 ? 0 : roundPrice(event.priceTo   * partner.toMultiplier)
                    return (
                      <a
                        key={partner.id}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        aria-label={`Ver entradas en ${partner.name}: desde ${pFrom}€ hasta ${pTo}€ (abre en nueva pestaña)`}
                        className="group flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-secondary/40"
                      >
                        {/* Top row: name + external link */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </span>
                            <p className="mt-0.5 text-xs text-muted-foreground">{partner.badge}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                        </div>

                        {/* Price + disclaimer chip */}
                        <div className="overflow-hidden rounded-xl border border-disclaimer-border bg-disclaimer">
                          {/* Price row */}
                          <div className="flex items-baseline gap-1.5 border-b border-disclaimer-border px-3 pt-2.5 pb-2">
                            <span className="text-[11px] font-semibold uppercase tracking-wide text-disclaimer-foreground/60">Precio</span>
                            {event.priceFrom === 0 ? (
                              <span className="font-heading text-xl font-black text-disclaimer-foreground">Gratis</span>
                            ) : (
                              <>
                                <span className="font-heading text-xl font-black text-disclaimer-foreground">{pFrom}€</span>
                                <span className="text-sm text-disclaimer-foreground/50">—</span>
                                <span className="font-heading text-xl font-black text-disclaimer-foreground">{pTo}€</span>
                              </>
                            )}
                          </div>
                          {/* Disclaimer row */}
                          <div className="flex items-start gap-1.5 px-3 py-2">
                            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-disclaimer-foreground/70" aria-hidden="true" />
                            <p className="text-sm leading-snug text-disclaimer-foreground">
                              <strong>Precio orientativo</strong> — mercado secundario de reventas. El precio final
                              puede superar el valor nominal. Verifique siempre con el proveedor antes de comprar.
                            </p>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Bottom aviso */}
                <div className="flex items-start gap-2 border-t border-border px-5 py-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Aviso:</strong> GospainSportTours es un comparador de
                    mercado secundario de reventas. No vendemos entradas ni procesamos pagos. Los precios mostrados
                    son orientativos y pueden ser superiores al valor nominal.
                  </p>
                </div>
              </div>

              {/* Back to catalog */}
              <Link
                href="/catalog"
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Ver más eventos
              </Link>

            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
