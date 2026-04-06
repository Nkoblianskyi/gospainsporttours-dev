import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'

const stats = [
  { value: '24+', label: 'Eventos 2026' },
  { value: '7', label: 'Plataformas' },
  { value: '100%', label: 'Gratis' },
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Thin accent line top */}
      <div className="h-1 w-full bg-primary/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 md:px-6 md:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-5">

          {/* Left: text column — 2/5 */}
          <div className="flex flex-col justify-center gap-7 pb-12 lg:col-span-2 lg:pb-16 lg:pr-10">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Mercado secundario de entradas
              </span>
            </div>

            <h1 className="font-heading text-[2.6rem] font-black leading-[1.05] text-foreground text-balance md:text-5xl lg:text-[3.25rem]">
              Compara precios<br />
              de entradas<br />
              <span className="text-primary">deportivas</span>
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground text-pretty max-w-sm">
              GospainSportTours es un <strong>mercado secundario</strong> de reventas.
              Comparamos precios entre Ticketmaster, StubHub, Viagogo, AXS y más.
              Los precios pueden ser <strong>superiores al valor nominal</strong>.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/catalog"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Ver todos los eventos
              </Link>
              <Link
                href="/#como-funciona"
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Cómo funciona
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Stats row — clean text dl */}
            <dl className="flex flex-wrap gap-6 border-t border-border pt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="font-heading text-2xl font-black leading-none text-primary">
                    {value}
                  </dt>
                  <dd className="text-xs font-semibold leading-snug text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: asymmetric image mosaic — 3/5 */}
          <div className="relative hidden lg:col-span-3 lg:flex lg:items-end">
            {/*
              Mosaic layout: one large portrait left + two stacked right
              The whole mosaic is flush to the bottom of the section
            */}
            <div className="flex w-full items-end gap-3">
              {/* Large portrait — El Clasico */}
              <div className="relative h-[480px] flex-[3] overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/events/el-clasico.jpg"
                  alt="El Clásico — FC Barcelona vs Real Madrid"
                  fill
                  sizes="35vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, oklch(0.11 0.045 255 / 0.55) 0%, transparent 60%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 px-4 pb-4">
                  <span className="font-heading text-sm font-bold text-white/90">El Clásico 2026</span>
                </div>
              </div>

              {/* Right column — two stacked images */}
              <div className="flex flex-[2] flex-col gap-3">
                <div className="relative h-[232px] overflow-hidden rounded-t-2xl">
                  <Image
                    src="/images/events/f1-barcelona.jpg"
                    alt="Gran Premio de España de Fórmula 1"
                    fill
                    sizes="25vw"
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.11 0.045 255 / 0.5) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 px-3 pb-3">
                    <span className="font-heading text-xs font-bold text-white/90">GP de España F1</span>
                  </div>
                </div>
                <div className="relative h-[232px] overflow-hidden rounded-none">
                  <Image
                    src="/images/events/ucl-bernabeu.jpg"
                    alt="Champions League — Bernabéu"
                    fill
                    sizes="25vw"
                    className="object-cover"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.11 0.045 255 / 0.5) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 px-3 pb-3">
                    <span className="font-heading text-xs font-bold text-white/90">Champions League</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image strip — full bleed below text */}
      <div className="mt-6 flex gap-2 overflow-x-auto px-4 pb-0 lg:hidden">
        {[
          { src: '/images/events/el-clasico.jpg', alt: 'El Clásico' },
          { src: '/images/events/f1-barcelona.jpg', alt: 'GP de España F1' },
          { src: '/images/events/ucl-bernabeu.jpg', alt: 'Champions League' },
          { src: '/images/events/madrid-open-tennis.jpg', alt: 'Madrid Open Tenis' },
        ].map((img) => (
          <div key={img.src} className="relative h-36 w-52 shrink-0 overflow-hidden rounded-xl">
            <Image src={img.src} alt={img.alt} fill sizes="208px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
