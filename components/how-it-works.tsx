import { Search, BarChart3, ExternalLink, ShieldCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Encuentra tu evento',
    description:
      'Explora nuestro catálogo de eventos deportivos en España y Europa. Filtra por deporte, ciudad o fecha.',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Compara precios',
    description:
      'Visualiza en segundos los precios disponibles entre Ticketmaster, StubHub, Viagogo, AXS, Eventim y más.',
  },
  {
    number: '03',
    icon: ExternalLink,
    title: 'Compra en el proveedor',
    description:
      'Te redirigimos al sitio del vendedor. Nosotros no gestionamos la compra ni los datos de pago.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Verifica el precio final',
    description:
      'Somos un mercado secundario. Confirma siempre el importe total antes de pagar en el proveedor.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-foreground py-16 md:py-24"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header row */}
        <div className="mb-16 flex flex-col gap-1 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Cómo funciona
            </p>
            <h2
              id="how-heading"
              className="mt-2 font-heading text-3xl font-black text-white text-balance md:text-4xl"
            >
              Comparar en 4 pasos
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            GospainSportTours es un comparador gratuito.
            No vendemos entradas ni procesamos pagos.
          </p>
        </div>

        {/* Steps grid — each step is a bordered panel, not a connected line */}
        <div className="grid grid-cols-1 gap-px bg-white/10 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="flex flex-col gap-5 bg-foreground px-7 py-8 transition-colors hover:bg-white/5"
              >
                {/* Large step number — decorative */}
                <span
                  className="font-heading text-5xl font-black leading-none text-white/8 select-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom disclaimer note */}
        <p className="mt-10 text-xs leading-relaxed text-white/35">
          GospainSportTours es un <strong className="text-white/55">mercado secundario de reventas</strong> —
          los precios pueden ser superiores al valor nominal de las entradas. No somos el vendedor original.
        </p>
      </div>
    </section>
  )
}
