import { ArrowUpRight } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  arrow?: boolean
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  arrow = false,
}: ButtonLinkProps) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      {arrow ? <ArrowUpRight aria-hidden="true" size={18} weight="bold" /> : null}
    </a>
  )
}
