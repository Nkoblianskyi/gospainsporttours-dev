"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/catalog', label: 'Eventos' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/tips', label: 'Consejos de viaje' },
  { href: '/about', label: 'Quiénes somos' },
  { href: '/contact', label: 'Contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-xl font-bold text-foreground"
          aria-label="GospainSportTours - página de inicio"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-black">
            G
          </span>
          <span>
            <span className="text-primary">Gospain</span>
            <span className="text-foreground">SportTours</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <Link
            href="/catalog"
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Search className="h-3.5 w-3.5" />
            Buscar entradas
          </Link>
          <button
            className="flex md:hidden items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-96 border-t border-border' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/catalog"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            <Search className="h-4 w-4" />
            Buscar entradas
          </Link>
        </nav>
      </div>
    </header>
  )
}
