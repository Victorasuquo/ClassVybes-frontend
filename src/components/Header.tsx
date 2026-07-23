import { List, X } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap'

const navItems = [
  ['How it works', '#how-it-works'],
  ['Your sound', '#your-sound'],
  ['Study loop', '#study-loop'],
  ['Safety', '#safety'],
  ['FAQ', '#faq'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const header = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!header.current) return

      ScrollTrigger.create({
        start: 120,
        end: 'max',
        onEnter: () => header.current?.classList.add('site-header--compact'),
        onLeaveBack: () => header.current?.classList.remove('site-header--compact'),
      })

      return () => gsap.set(header.current, { clearProps: 'all' })
    },
    { scope: header },
  )

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header" ref={header}>
      <div className="site-header__inner shell">
        <a className="wordmark" href="#top" aria-label="ClassVybes home">
          Class<span>Vybes</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button--nav" href="#early-access">
          Join early access
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={24} weight="bold" /> : <List aria-hidden="true" size={24} />}
        </button>

        <nav
          className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#early-access" onClick={() => setOpen(false)}>
            Join early access
          </a>
        </nav>
      </div>
    </header>
  )
}
