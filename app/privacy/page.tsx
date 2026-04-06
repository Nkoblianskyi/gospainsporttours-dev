import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Política de privacidad — GospainSportTours',
  description:
    'Política de privacidad de GospainSportTours. Información sobre el tratamiento de datos personales conforme al RGPD.',
}

export default function PrivacyPage() {
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
              Política de privacidad
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Última actualización: {updated}</p>
          </div>
        </div>

        <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:px-6">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">1. Responsable del tratamiento</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong>K.C. NTOMATA LIMITED</strong><br />
              Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.<br />
              Correo electrónico:{' '}
              <a href="mailto:info@gospainsporttours.com" className="text-primary hover:underline">
                info@gospainsporttours.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">2. Datos que recopilamos</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              GospainSportTours no recoge datos de pago ni gestiona transacciones comerciales directamente.
              Los únicos datos que podemos recopilar son:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
              <li>
                <strong>Datos de navegación y analítica:</strong> a través de Google Analytics (anonimizados).
                Incluyen páginas visitadas, duración de la sesión, tipo de dispositivo y región geográfica aproximada.
              </li>
              <li>
                <strong>Preferencia de cookies:</strong> almacenada localmente en tu dispositivo.
              </li>
              <li>
                <strong>Datos facilitados voluntariamente:</strong> en caso de que nos envíes un correo electrónico
                de contacto, trataremos únicamente los datos necesarios para responder a tu consulta.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">3. Finalidades y base jurídica</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Finalidad</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Base jurídica</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { purpose: 'Analítica de tráfico web anónima', basis: 'Consentimiento (Art. 6.1.a RGPD)' },
                    { purpose: 'Responder consultas por correo electrónico', basis: 'Interés legítimo (Art. 6.1.f RGPD)' },
                    { purpose: 'Seguridad y prevención del fraude', basis: 'Interés legítimo (Art. 6.1.f RGPD)' },
                  ].map((row) => (
                    <tr key={row.purpose} className="border-b border-border even:bg-secondary/20">
                      <td className="px-4 py-2.5 text-muted-foreground">{row.purpose}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">4. Transferencias internacionales</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Google Analytics puede transferir datos fuera del Espacio Económico Europeo (EEE).
              Google garantiza un nivel de protección adecuado mediante cláusulas contractuales estándar
              aprobadas por la Comisión Europea.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">5. Conservación de datos</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Los datos de analítica se conservan durante 26 meses. Los datos de contacto se conservan
              el tiempo necesario para resolver la consulta y, como máximo, 12 meses. La preferencia
              de cookies se almacena durante 12 meses en tu dispositivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">6. Tus derechos</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conforme al Reglamento General de Protección de Datos (RGPD), tienes derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li><strong>Acceso:</strong> solicitar información sobre los datos que tratamos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición y limitación:</strong> oponerte o limitar el tratamiento en determinados supuestos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin efecto retroactivo.</li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Para ejercer tus derechos, escríbenos a{' '}
              <a href="mailto:info@gospainsporttours.com" className="text-primary hover:underline">
                info@gospainsporttours.com
              </a>
              . Si consideras que el tratamiento no es conforme al RGPD, puedes reclamar ante la
              autoridad de control competente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">7. Aviso sobre mercado secundario</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              GospainSportTours es un <strong>mercado secundario de reventas</strong>. No vendemos
              entradas directamente ni procesamos pagos. Los datos de pago son gestionados
              exclusivamente por los proveedores externos (Ticketmaster, StubHub, Viagogo, AXS,
              Eventim, etc.) y están sujetos a sus respectivas políticas de privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-foreground">8. Cambios en esta política</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios.
              La fecha de actualización siempre estará indicada en la parte superior de esta página.
              Te recomendamos revisarla periódicamente.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
