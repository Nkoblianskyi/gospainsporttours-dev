import Image from 'next/image'
import Link from 'next/link'
import { SPORTS } from '@/lib/events'

// Mapping each sport to a representative event image for the background thumbnail
const sportImage: Record<string, { src: string; events: number }> = {
  'Fútbol':      { src: '/images/events/el-clasico.jpg',          events: 7 },
  'Motor':       { src: '/images/events/f1-barcelona.jpg',        events: 3 },
  'Tenis':       { src: '/images/events/tennis-barcelona.jpg',    events: 4 },
  'Ciclismo':    { src: '/images/events/vuelta-espana.jpg',        events: 2 },
  'Atletismo':   { src: '/images/events/athletics-madrid.jpg',    events: 2 },
  'Baloncesto':  { src: '/images/events/euroleague-basketball.jpg', events: 1 },
  'MMA':         { src: '/images/events/ufc-madrid.jpg',          events: 1 },
  'Triatlón':    { src: '/images/events/ironman-barcelona.jpg',   events: 1 },
  'Balonmano':   { src: '/images/events/handball-madrid.jpg',     events: 1 },
  'Maratón':     { src: '/images/events/madrid-marathon.jpg',     events: 1 },
}

export function SportCategories() {
  return (
    <section
      className="bg-background py-14 md:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Section label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Por disciplina
          </p>
        </div>

        <h2
          id="categories-heading"
          className="mb-10 font-heading text-3xl font-black text-foreground text-balance md:text-4xl"
        >
          Elige tu deporte
        </h2>

        {/* Photo-card grid — each card has a background image */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SPORTS.map((sport) => {
            const meta = sportImage[sport] ?? { src: '/images/events/el-clasico.jpg', events: 1 }
            return (
              <Link
                key={sport}
                href={`/catalog?sport=${encodeURIComponent(sport)}`}
                className="group relative overflow-hidden rounded-2xl"
                aria-label={`Ver eventos de ${sport}`}
              >
                {/* Background image */}
                <div className="relative h-32 w-full md:h-40">
                  <Image
                    src={meta.src}
                    alt={sport}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark scrim */}
                  <div
                    className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"
                    aria-hidden="true"
                  />
                </div>
                {/* Label overlay */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col px-3 pb-3">
                  <span className="font-heading text-sm font-black leading-tight text-white drop-shadow">
                    {sport}
                  </span>
                  <span className="text-[10px] font-semibold text-white/60">
                    {meta.events} evento{meta.events !== 1 ? 's' : ''}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
