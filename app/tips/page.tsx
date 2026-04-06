import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { Ticket, CreditCard, Clock, MapPin, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consejos para comprar entradas deportivas — GospainSportTours',
  description:
    'Consejos y guía práctica para comprar entradas en el mercado secundario de forma segura. Entiende los precios, los cargos y cómo evitar sorpresas.',
}

const tips = [
  {
    icon: AlertTriangle,
    title: 'Entiende el mercado secundario',
    content:
      'GospainSportTours es un mercado secundario de reventas. Las entradas son ofrecidas por revendedores independientes y los precios pueden ser superiores al valor nominal. No somos el vendedor original.',
    highlight: true,
  },
  {
    icon: CreditCard,
    title: 'Verifica el precio final',
    content:
      'Antes de pagar, comprueba siempre el precio total, incluyendo tasas de servicio y gastos de envío. El precio que ves en el comparador puede variar en la plataforma del vendedor.',
    highlight: false,
  },
  {
    icon: CheckCircle,
    title: 'Usa plataformas de confianza',
    content:
      'Todas las plataformas que comparamos (Ticketmaster, StubHub, Viagogo, AXS, Eventim) son operadores reconocidos del mercado de reventa con políticas de garantía para el comprador.',
    highlight: false,
  },
  {
    icon: Clock,
    title: 'Compra con antelación',
    content:
      'Los precios en el mercado secundario tienden a subir a medida que se acerca la fecha del evento. Comprar con anticipación generalmente ofrece mejores precios y más opciones de asiento.',
    highlight: false,
  },
  {
    icon: Ticket,
    title: 'Revisa la política de reembolso',
    content:
      'Cada plataforma tiene su propia política de cancelaciones y reembolsos. Lee las condiciones antes de comprar, especialmente si hay posibilidad de que el evento se aplace o cancele.',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Planifica el transporte y el alojamiento',
    content:
      'Para grandes eventos como El Clásico, la Fórmula 1 o la Final de Champions, el transporte y los hoteles se agotan muy rápido. Reserva con la mayor antelación posible.',
    highlight: false,
  },
]

export default function TipsPage() {
  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        {/* Page hero */}
        <div className="relative overflow-hidden bg-foreground py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Guía del comprador
            </p>
            <h1 className="mt-3 font-heading text-4xl font-black text-white text-balance md:text-5xl">
              Consejos para comprar entradas
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60 text-pretty">
              Todo lo que necesitas saber antes de comprar entradas en el mercado secundario.
              Lee estos consejos para evitar sorpresas y comprar con confianza.
            </p>
          </div>
        </div>

        {/* Timeline list */}
        <section className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
          <ol className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div
              className="pointer-events-none absolute left-[1.375rem] top-0 bottom-0 w-px bg-border"
              aria-hidden="true"
            />
            {tips.map((tip, i) => {
              const Icon = tip.icon
              return (
                <li
                  key={tip.title}
                  className={`relative flex gap-6 pb-10 last:pb-0 ${tip.highlight ? 'rounded-2xl border border-disclaimer-border bg-disclaimer/40 px-5 py-5 -mx-5' : ''}`}
                >
                  {/* Icon circle — on the vertical line */}
                  <div
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
                      tip.highlight
                        ? 'border-disclaimer-border bg-disclaimer text-disclaimer-foreground'
                        : 'border-border bg-card text-primary'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="font-heading text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      Consejo {i + 1}
                    </span>
                    <h2
                      className={`font-heading text-xl font-bold ${
                        tip.highlight ? 'text-disclaimer-foreground' : 'text-foreground'
                      }`}
                    >
                      {tip.title}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed ${
                        tip.highlight ? 'text-disclaimer-foreground/80' : 'text-muted-foreground'
                      }`}
                    >
                      {tip.content}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* Bottom reminder strip */}
        <div className="border-t border-disclaimer-border bg-disclaimer">
          <div className="mx-auto flex max-w-3xl items-start gap-4 px-4 py-8 md:px-6">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-disclaimer-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-disclaimer-foreground">
              <strong>Aviso permanente:</strong> GospainSportTours es un{' '}
              <strong>mercado secundario</strong>. Ofrecemos entradas{' '}
              <strong>revendidas por terceros</strong> y los precios pueden ser{' '}
              <strong>superiores al valor nominal</strong>. Compruebe siempre el precio
              final con el proveedor antes de realizar la compra.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
