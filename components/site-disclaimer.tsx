import { AlertTriangle } from 'lucide-react'

/**
 * Google Ads compliant disclaimer bar.
 * Requirements:
 * - Placed in top 20% of the page (directly below header)
 * - Permanently visible — NOT closeable
 * - Same size as body text
 * - States: secondary market, resold tickets, prices may exceed face value
 */
export function SiteDisclaimer() {
  return (
    <div
      role="note"
      aria-label="Aviso legal importante"
      className="w-full border-b border-disclaimer-border bg-disclaimer py-4"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3.5 px-4 md:px-6">
        <AlertTriangle
          className="mt-0.5 h-5 w-5 shrink-0 text-disclaimer-foreground"
          aria-hidden="true"
        />
        <p className="text-base font-medium leading-relaxed text-disclaimer-foreground">
          <strong>Aviso importante:</strong> GospainSportTours es un{' '}
          <strong>mercado secundario</strong> de reventa de entradas. Las
          entradas que se muestran son <strong>revendidas por terceros</strong>{' '}
          y los precios pueden ser <strong>superiores al valor nominal</strong>.
          <span className="font-semibold"> Comparamos precios; no vendemos entradas.</span>
        </p>
      </div>
    </div>
  )
}

/**
 * Compact disclaimer for event cards.
 * Price range must be the largest text in the card body.
 * Disclaimer text sits clearly below — same size as body text, never hidden.
 */
export function CardDisclaimer({ priceFrom, priceTo }: { priceFrom: number; priceTo: number }) {
  const isFree = priceFrom === 0
  return (
    <div className="rounded-xl border border-disclaimer-border bg-disclaimer overflow-hidden">
      {/* Row 1 — price range: largest element in card */}
      <div className="flex items-baseline gap-1.5 px-3 pt-3 pb-2 border-b border-disclaimer-border/60">
        <span className="text-xs font-semibold text-disclaimer-foreground/70 uppercase tracking-wide">
          Precio
        </span>
        {isFree ? (
          <span className="font-heading text-2xl font-black text-disclaimer-foreground">
            Gratuito
          </span>
        ) : (
          <>
            <span className="font-heading text-2xl font-black text-disclaimer-foreground">
              {priceFrom}€
            </span>
            <span className="text-sm font-semibold text-disclaimer-foreground/60">—</span>
            <span className="font-heading text-2xl font-black text-disclaimer-foreground">
              {priceTo}€
            </span>
          </>
        )}
      </div>
      {/* Row 2 — disclaimer text: text-base, clearly visible */}
      <div className="flex items-start gap-1.5 px-3 py-2.5">
        <AlertTriangle
          className="mt-0.5 h-4 w-4 shrink-0 text-disclaimer-foreground/80"
          aria-hidden="true"
        />
        <p className="text-base leading-snug text-disclaimer-foreground">
          <strong>Comparamos precios, no vendemos.</strong> Mercado secundario —
          los precios pueden ser superiores al valor nominal de la entrada.
        </p>
      </div>
    </div>
  )
}

/**
 * Full-width page disclaimer for catalog, event detail, and other pages.
 */
export function PageDisclaimer() {
  return (
    <div
      role="note"
      aria-label="Aviso legal de mercado secundario"
      className="w-full rounded-xl border border-disclaimer-border bg-disclaimer px-5 py-4"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle
          className="mt-0.5 h-5 w-5 shrink-0 text-disclaimer-foreground"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-bold text-disclaimer-foreground">
            Mercado secundario de entradas — Aviso legal
          </p>
          <p className="mt-1 text-sm leading-relaxed text-disclaimer-foreground">
            Este sitio web es un <strong>mercado secundario</strong>. Las entradas que se
            muestran son ofrecidas por <strong>revendedores independientes</strong>. Los precios
            indicados <strong>pueden ser superiores al valor nominal</strong> impreso en la
            entrada. GospainSportTours no vende entradas directamente, no recauda datos de
            pago y no garantiza la disponibilidad. Compruebe siempre el precio definitivo en
            el sitio del proveedor antes de realizar cualquier compra.
          </p>
        </div>
      </div>
    </div>
  )
}
