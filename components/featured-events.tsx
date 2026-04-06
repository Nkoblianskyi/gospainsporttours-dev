import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedEvents } from '@/lib/events'
import { ArrowRight, Calendar, MapPin, AlertTriangle } from 'lucide-react'

function formatShortDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function FeaturedEvents() {
  const featured = getFeaturedEvents()
  const [hero, ...rest] = featured

  return (
    <section className="bg-background py-14 md:py-20" aria-labelledby="featured-heading">
      {/* Section label */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Eventos destacados
            </p>
          </div>
          <Link
            href="/catalog"
            className="hidden items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80 sm:flex"
            aria-label="Ver todos los eventos del catálogo"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Poster layout: large hero left + stacked list right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:grid-rows-1">

          {/* Hero event — tall poster */}
          <Link
            href={`/events/${hero.id}`}
            className="group relative col-span-1 overflow-hidden rounded-3xl lg:col-span-3"
            aria-label={`Ver entradas para ${hero.title}`}
          >
            <div className="relative h-72 w-full lg:h-[440px]">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                loading="eager"
              />
            </div>
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              aria-hidden="true"
            />
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-8">
              <span className="w-fit rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                {hero.sport}
              </span>
              <h2
                id="featured-heading"
                className="font-heading text-2xl font-black leading-tight text-white text-balance md:text-3xl"
              >
                {hero.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatShortDate(hero.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {hero.city}
                </span>
              </div>
              {/* Price + disclaimer — solid background panel for legibility */}
              <div className="rounded-xl overflow-hidden bg-black/60 backdrop-blur-sm border border-white/15 mt-1">
                {/* Price row */}
                <div className="flex items-baseline gap-1.5 px-4 pt-3 pb-2 border-b border-white/15">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    Precio
                  </span>
                  <span className="font-heading text-2xl font-black text-white">
                    {hero.priceFrom}€
                  </span>
                  <span className="text-sm text-white/50">—</span>
                  <span className="font-heading text-2xl font-black text-white">
                    {hero.priceTo}€
                  </span>
                </div>
                {/* Disclaimer row */}
                <div className="flex items-start gap-2 px-4 py-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" />
                  <p className="text-base leading-snug text-white">
                    <strong className="text-white">Comparamos precios, no vendemos.</strong>{' '}
                    Mercado secundario — precios pueden superar valor nominal.
                  </p>
                </div>
              </div>
              <span className="mt-2 flex w-fit items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                Comparar precios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Stacked event list */}
          <div className="col-span-1 flex flex-col gap-3 lg:col-span-2">
            {rest.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group flex items-stretch overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-md"
                aria-label={`Ver entradas para ${event.title}`}
              >
                {/* Thumbnail */}
                <div className="relative h-auto w-28 shrink-0 md:w-32">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-1 flex-col justify-between gap-1 p-3.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {event.sport}
                    </span>
                    <h3 className="mt-0.5 font-heading text-sm font-bold leading-snug text-foreground line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                  {/* Price range + disclaimer */}
                  <div className="mt-1 rounded-lg border border-disclaimer-border bg-disclaimer px-2.5 py-1.5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-base font-black text-disclaimer-foreground">
                        {event.priceFrom === 0 ? 'Gratis' : `${event.priceFrom}€`}
                      </span>
                      {event.priceFrom > 0 && (
                        <>
                          <span className="text-xs text-disclaimer-foreground/50">—</span>
                          <span className="font-heading text-base font-black text-disclaimer-foreground">
                            {event.priceTo}€
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm leading-tight text-disclaimer-foreground/80">
                      Mercado secundario · precios pueden variar
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/catalog"
              className="flex items-center justify-center gap-2 rounded-2xl border border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden"
            >
              Ver todos los eventos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
