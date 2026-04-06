import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { type Event } from '@/lib/events'
import { CardDisclaimer } from '@/components/site-disclaimer'

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
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

interface EventCardProps {
  event: Event
  priority?: boolean
}

export function EventCard({ event, priority = false }: EventCardProps) {
  const badgeClass = sportBadge[event.sport] ?? 'bg-secondary text-secondary-foreground border border-border'

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={event.image}
          alt={`Imagen de ${event.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClass}`}
        >
          {event.sport}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="font-heading text-base font-bold leading-snug text-foreground line-clamp-2">
          {event.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <time dateTime={event.date}>
              {formatDate(event.date)} — {event.time}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>
              {event.venue}, {event.city}
            </span>
          </div>
        </div>

        {/* Price + disclaimer block — most prominent element in the card */}
        <CardDisclaimer priceFrom={event.priceFrom} priceTo={event.priceTo} />

        {/* CTA */}
        <Link
          href={`/events/${event.id}`}
          className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label={`Comparar precios para ${event.title}`}
        >
          Comparar precios
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
