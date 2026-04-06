import { PARTNERS } from '@/lib/events'

const stats = [
  { value: '24', label: 'Eventos en 2026' },
  { value: '7', label: 'Plataformas comparadas' },
  { value: '10', label: 'Deportes cubiertos' },
  { value: '100%', label: 'Comparación gratuita' },
]

export function TrustBar() {
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">

        {/* Stats row */}
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <dt className="font-heading text-3xl font-black text-primary md:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Partners strip — compact, beneath stats */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-border pt-6">
          <span className="mr-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Comparamos en
          </span>
          {PARTNERS.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              {p.name}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
