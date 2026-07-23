import { Headphones } from '@phosphor-icons/react'
import { useRef } from 'react'
import { ButtonLink } from './ButtonLink'
import { gsap, useGSAP } from '../motion/gsap'

export function Hero() {
  const section = useRef<HTMLElement>(null)
  const base = import.meta.env.BASE_URL

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
        timeline
          .from('.hero__copy > *', {
            y: 32,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.08,
          })
          .from(
            '.hero__media-frame',
            { clipPath: 'inset(0 0 0 100%)', duration: 1.05 },
            0.08,
          )

        gsap.to('.hero__photo', {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })

      return () => media.revert()
    },
    { scope: section },
  )

  return (
    <section className="hero" id="top" ref={section}>
      <div className="hero__grid shell">
        <div className="hero__copy">
          <p className="hero__kicker">Study material in. Music out.</p>
          <h1>Turn notes into study tracks.</h1>
          <p className="hero__body">
            Upload study material, choose a sound, and turn key ideas into music made for revision.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#how-it-works" arrow>
              See how it works
            </ButtonLink>
            <ButtonLink href="#early-access" variant="secondary">
              Join early access
            </ButtonLink>
          </div>
        </div>

        <div className="hero__media" aria-label="Student revising with headphones on campus">
          <div className="hero__media-frame">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={`${base}images/hero-campus-mobile.webp`}
              />
              <img
                className="hero__photo"
                src={`${base}images/hero-campus.webp`}
                alt="University student reviewing notes and a phone while wearing headphones on campus"
                width="1768"
                height="889"
                fetchPriority="high"
              />
            </picture>
          </div>
          <div className="hero__track-stamp" aria-hidden="true">
            <Headphones size={22} weight="fill" />
            <div>
              <span>Study track</span>
              <strong>Cell Structure</strong>
            </div>
            <span>03:18</span>
          </div>
        </div>
      </div>
    </section>
  )
}
