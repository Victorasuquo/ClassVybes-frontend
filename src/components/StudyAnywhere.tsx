import { useRef } from 'react'
import { gsap, useGSAP } from '../motion/gsap'

export function StudyAnywhere() {
  const section = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const media = gsap.matchMedia()
      media.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            '.anywhere__image',
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: section.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            },
          )
        },
      )
      return () => media.revert()
    },
    { scope: section },
  )

  return (
    <section className="anywhere section" ref={section}>
      <div className="anywhere__media">
        <img
          className="anywhere__image"
          src={`${import.meta.env.BASE_URL}images/study-anywhere.webp`}
          alt="Two students reviewing notes together while walking near a bus stop"
          width="1536"
          height="1024"
          loading="lazy"
        />
      </div>
      <div className="anywhere__copy shell">
        <h2>Revision can leave the desk.</h2>
        <p>
          Replay a difficult topic while walking, commuting, exercising, or resetting between study sessions.
        </p>
      </div>
    </section>
  )
}
