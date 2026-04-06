import Link from 'next/link'
import { PARTNERS } from '@/lib/events'

const footerLinks = {
  Información: [
    { href: '/about', label: 'Quiénes somos' },
    { href: '/#como-funciona', label: 'Cómo funciona' },
    { href: '/tips', label: 'Consejos de viaje' },
  ],
  Ayuda: [
    { href: '/contact', label: 'Contacto' },
    { href: '/contact#faq', label: 'Preguntas frecuentes' },
  ],
  Legal: [
    { href: '/privacy', label: 'Política de privacidad' },
    { href: '/cookies', label: 'Política de cookies' },
  ],
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-card">
      {/* Partners ribbon */}
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Comparamos precios en
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {PARTNERS.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-lg font-bold">
              <span className="text-primary">Gospain</span>
              <span className="text-foreground">SportTours</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Comparador de precios de entradas para eventos deportivos en España y Europa.
              Mercado secundario de reventas.
            </p>
            <address className="mt-4 not-italic">
              <p className="text-xs font-semibold text-muted-foreground">K.C. NTOMATA LIMITED</p>
              <p className="text-xs text-muted-foreground">Stylianou Lena, 24 Christiana Court</p>
              <p className="text-xs text-muted-foreground">Flat/Office 202, Strovolos</p>
              <p className="text-xs text-muted-foreground">2019 Nicosia, Cyprus</p>
              <a
                href="mailto:info@gospainsporttours.com"
                className="text-xs text-primary hover:underline"
              >
                info@gospainsporttours.com
              </a>
            </address>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {section}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-8 space-y-3 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong>Aviso legal:</strong> GospainSportTours es un mercado secundario de reventas.
            Las entradas publicadas en este sitio son ofrecidas por vendedores independientes.
            Los precios pueden ser superiores al valor nominal de las entradas.
            No somos el vendedor original, no gestionamos la venta directa ni recaudamos
            datos de pago. El precio final debe verificarse con el proveedor antes de la compra.
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} K.C. NTOMATA LIMITED — GospainSportTours.com — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
