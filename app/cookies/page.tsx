import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Política de cookies — GospainSportTours',
  description: 'Información sobre el uso de cookies en GospainSportTours.',
}

export default function CookiesPage() {
  const updated = '2026'
  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        <div className="border-b border-border bg-secondary/30 py-10">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Legal</p>
            <h1 className="mt-2 font-heading text-3xl font-black text-foreground">
              Política de cookies
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Última actualización: {updated}</p>
          </div>
        </div>

        <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:px-6 prose-headings:font-heading">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">¿Qué son las cookies?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
              para recordar información sobre tu visita, preferencias de idioma, inicio de sesión y otras
              funciones. Pueden ser propias (del propio sitio web) o de terceros (de otros servicios
              utilizados en la página).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">Cookies que utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Nombre</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Tipo</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Finalidad</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'cookie_consent',
                      type: 'Esencial',
                      purpose: 'Guarda la preferencia de consentimiento de cookies del usuario.',
                      duration: '12 meses',
                    },
                    {
                      name: '_ga, _gid',
                      type: 'Analítica (tercero)',
                      purpose: 'Google Analytics — análisis de tráfico y comportamiento anónimo.',
                      duration: '2 años / 24 h',
                    },
                    {
                      name: '_gat',
                      type: 'Analítica (tercero)',
                      purpose: 'Google Analytics — limita la tasa de solicitudes.',
                      duration: '1 minuto',
                    },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-border even:bg-secondary/20">
                      <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.name}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.type}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.purpose}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">Cómo gestionar las cookies</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Puedes aceptar o rechazar las cookies no esenciales en el aviso de cookies que aparece
              en tu primera visita. También puedes configurar tu navegador para bloquear o eliminar
              cookies. Ten en cuenta que deshabilitar cookies puede afectar la funcionalidad del sitio.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Safari
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">Contacto</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Para cualquier consulta sobre el uso de cookies, puedes contactarnos en{' '}
              <a href="mailto:info@gospainsporttours.com" className="text-primary hover:underline">
                info@gospainsporttours.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
