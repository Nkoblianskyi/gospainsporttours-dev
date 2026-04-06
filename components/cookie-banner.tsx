'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-2xl md:border"
    >
      <div className="flex flex-col gap-4 p-5">
        <div>
          <p className="font-heading text-base font-bold text-foreground">
            Uso de cookies
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Usamos cookies propias y de terceros para analítica y mejora de la experiencia.
            Puedes aceptarlas o rechazarlas. Consulta nuestra{' '}
            <Link href="/cookies" className="text-primary underline underline-offset-2 hover:text-primary/80">
              política de cookies
            </Link>{' '}
            y{' '}
            <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80">
              política de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Aceptar todas
          </button>
          <button
            onClick={reject}
            className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Solo esenciales
          </button>
        </div>
      </div>
    </div>
  )
}
