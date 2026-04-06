'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { events, SPORTS, type Sport } from '@/lib/events'
import { EventCard } from '@/components/event-card'

export function CatalogClient({ initialSport }: { initialSport?: string }) {
  const [query, setQuery] = useState('')
  const [selectedSport, setSelectedSport] = useState<string>(initialSport ?? '')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = events
    if (selectedSport) {
      list = list.filter((e) => e.sport === selectedSport)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.country.toLowerCase().includes(q)
      )
    }
    return list
  }, [query, selectedSport])

  return (
    <div>
      {/* Search + filter bar */}
      <div className="sticky top-[var(--header-offset,112px)] z-30 border-b border-border bg-background/95 backdrop-blur-md py-4">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por evento, ciudad o recinto..."
                className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Buscar eventos"
              />
            </div>
            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 h-10 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-expanded={showFilters}
              aria-label="Mostrar filtros"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Filtros</span>
              {selectedSport && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Sport filter chips */}
          {showFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSport('')}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                  selectedSport === ''
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                Todos
              </button>
              {SPORTS.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport === selectedSport ? '' : sport)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                    selectedSport === sport
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {filtered.length} evento{filtered.length !== 1 ? 's' : ''} encontrado
            {filtered.length !== 1 ? 's' : ''}
          </p>
          {(query || selectedSport) && (
            <button
              onClick={() => { setQuery(''); setSelectedSport('') }}
              className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-destructive"
            >
              <X className="h-3.5 w-3.5" />
              Limpiar filtros
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="font-heading text-2xl font-bold text-foreground">
              No se encontraron eventos
            </p>
            <p className="text-muted-foreground">
              Prueba con otros términos o elimina los filtros activos.
            </p>
            <button
              onClick={() => { setQuery(''); setSelectedSport('') }}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver todos los eventos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} priority={i < 4} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
