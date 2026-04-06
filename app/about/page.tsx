import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteDisclaimer } from '@/components/site-disclaimer'
import { SiteFooter } from '@/components/site-footer'
import { Target, ShieldCheck, Globe2, Users, Building2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quiénes somos — GospainSportTours',
  description:
    'GospainSportTours es un comparador de precios de entradas deportivas. Somos un mercado secundario de reventas. Conoce nuestra historia y misión.',
}

const values = [
  {
    icon: Target,
    title: 'Nuestra misión',
    description:
      'Ayudar a los aficionados al deporte a encontrar el mejor precio para sus eventos favoritos, comparando las principales plataformas de reventa de entradas en un solo lugar.',
    image: '/images/events/el-clasico.jpg',
    imageAlt: 'El Clásico Barcelona vs Real Madrid',
  },
  {
    icon: ShieldCheck,
    title: 'Transparencia total',
    description:
      'Somos un mercado secundario de reventas. Las entradas son ofrecidas por terceros a precios que pueden ser superiores al valor nominal. Siempre informamos de esto con claridad.',
    image: '/images/events/ucl-final.jpg',
    imageAlt: 'Final UEFA Champions League',
  },
  {
    icon: Globe2,
    title: 'España y Europa',
    description:
      'Cubrimos los principales eventos deportivos en España y el resto de Europa: fútbol, Fórmula 1, tenis, ciclismo, atletismo y mucho más.',
    image: '/images/events/f1-barcelona.jpg',
    imageAlt: 'GP de España de Fórmula 1',
  },
  {
    icon: Users,
    title: 'Para los fans',
    description:
      'Nacimos como fans del deporte que querían una forma sencilla de comparar precios antes de comprar. Seguimos construyendo la plataforma con esa misma mentalidad.',
    image: '/images/events/madrid-open-tennis.jpg',
    imageAlt: 'Mutua Madrid Open Tenis',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteDisclaimer />
      <SiteHeader />
      <main>
        {/* Page hero — full width dark band */}
        <div className="relative overflow-hidden bg-foreground py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Quiénes somos
            </p>
            <h1 className="mt-3 font-heading text-4xl font-black text-white text-balance md:text-5xl">
              Sobre GospainSportTours
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60 text-pretty">
              GospainSportTours es un comparador gratuito de precios de entradas para eventos
              deportivos en España y Europa. Somos un{' '}
              <strong className="text-white">mercado secundario de reventas</strong>.
              No vendemos entradas directamente ni gestionamos pagos.
            </p>
          </div>
        </div>

        {/* Alternating image + text rows */}
        <div className="divide-y divide-border">
          {values.map((v, i) => {
            const Icon = v.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={v.title}
                className={`grid grid-cols-1 md:grid-cols-2 ${isEven ? 'bg-background' : 'bg-secondary/30'}`}
              >
                {/* Image block */}
                <div className={`relative h-64 md:h-80 ${isEven ? 'md:order-last' : ''}`}>
                  <Image
                    src={v.image}
                    alt={v.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                {/* Text block */}
                <div className="flex flex-col justify-center gap-5 px-8 py-10 md:px-12 md:py-14">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{v.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Legal notice strip */}
        <div className="border-t border-border bg-card py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
            {/* Company */}
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">Empresa operadora</h2>
              <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">K.C. NTOMATA LIMITED</strong><br />
                Stylianou Lena, 24 Christiana Court<br />
                Flat/Office 202, Strovolos<br />
                2019 Nicosia, Cyprus
              </address>
            </div>

            {/* Legal notice */}
            <div className="flex flex-col gap-3 md:col-span-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">Aviso legal</h2>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Este sitio web es un <strong className="text-foreground">mercado secundario de entradas</strong>.
                  Las entradas que se muestran son ofrecidas por{' '}
                  <strong className="text-foreground">revendedores independientes</strong>.
                  Los precios indicados{' '}
                  <strong className="text-foreground">pueden ser superiores al valor nominal</strong>{' '}
                  impreso en la entrada.
                </p>
                <p>
                  GospainSportTours no vende entradas directamente, no recauda datos de
                  pago y no garantiza la disponibilidad. Compruebe siempre el precio definitivo
                  en el sitio del proveedor antes de realizar cualquier compra.
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href="mailto:info@gospainsporttours.com"
                    className="text-primary hover:underline"
                  >
                    info@gospainsporttours.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
