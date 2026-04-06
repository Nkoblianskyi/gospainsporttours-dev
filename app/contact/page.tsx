import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { Mail, MapPin, Clock, MessageSquare, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto — GospainSportTours',
  description:
    'Contacta con el equipo de GospainSportTours. Preguntas frecuentes y formulario de contacto.',
}

const faqs = [
  {
    q: '¿GospainSportTours vende entradas directamente?',
    a: 'No. GospainSportTours es un comparador de precios y mercado secundario. No vendemos entradas directamente ni procesamos pagos. Te redirigimos a la plataforma del vendedor.',
  },
  {
    q: '¿Por qué los precios son más altos que en taquilla?',
    a: 'Las entradas que comparamos son ofrecidas por revendedores independientes en el mercado secundario. Los precios pueden ser superiores al valor nominal original de la entrada.',
  },
  {
    q: '¿Son seguras las plataformas que comparáis?',
    a: 'Comparamos únicamente plataformas reconocidas como Ticketmaster, StubHub, Viagogo, AXS y Eventim, que cuentan con políticas de garantía para el comprador. Siempre revisa las condiciones antes de comprar.',
  },
  {
    q: '¿Cómo puedo solicitar un reembolso?',
    a: 'Los reembolsos deben solicitarse directamente a la plataforma donde realizaste la compra. GospainSportTours no gestiona compras ni pagos.',
  },
  {
    q: '¿Cómo puedo añadir mi evento al catálogo?',
    a: 'Si eres promotor o representante de un evento deportivo, contáctanos en info@gospainsporttours.com y evaluaremos la inclusión.',
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        {/* Compact header strip */}
        <div className="border-b border-border bg-secondary/30 px-4 py-10 md:px-6 md:py-14">
          <div className="mx-auto flex max-w-7xl items-end gap-5">
            <span
              className="font-heading text-[5rem] font-black leading-none text-border select-none md:text-[7rem]"
              aria-hidden="true"
            >
              ?
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Contacto
              </p>
              <h1 className="font-heading text-3xl font-black text-foreground text-balance md:text-4xl">
                ¿En qué podemos ayudarte?
              </h1>
              <p className="mt-2 text-base text-muted-foreground">
                Consulta las preguntas frecuentes o escríbenos directamente.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-5">
          {/* Contact info sidebar — darker background */}
          <aside className="bg-foreground px-6 py-10 md:col-span-2 md:px-10 md:py-14">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="font-heading text-xl font-bold text-white">Información de contacto</h2>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/40">Email</p>
                  <a
                    href="mailto:info@gospainsporttours.com"
                    className="mt-1 block text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    info@gospainsporttours.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/40">Dirección</p>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-white/70">
                    K.C. NTOMATA LIMITED<br />
                    Stylianou Lena, 24 Christiana Court<br />
                    Flat/Office 202, Strovolos<br />
                    2019 Nicosia, Cyprus
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/40">Horario de atención</p>
                  <p className="mt-1 text-sm text-white/70">Lunes a viernes, 9:00 – 17:00 (CET)</p>
                </div>
              </div>
            </div>

            {/* Secondary market reminder */}
            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs leading-relaxed text-white/50">
                GospainSportTours es un <strong className="text-white/80">mercado secundario</strong>.
                No vendemos entradas directamente ni procesamos pagos. Los reembolsos deben
                gestionarse con el proveedor.
              </p>
            </div>
          </aside>

          {/* FAQ section */}
          <section id="faq" className="px-6 py-10 md:col-span-3 md:px-10 md:py-14">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Preguntas frecuentes
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border bg-card open:border-primary/30 open:bg-primary/5"
                >
                  <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-foreground [list-style:none] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <span className="font-heading text-xs font-black text-muted-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground border-t border-border pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
