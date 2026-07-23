import { FileText, Headphones, SlidersHorizontal } from '@phosphor-icons/react'
import { useRef, useState } from 'react'
import { storySteps } from '../content/landing'
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap'

const icons = [FileText, SlidersHorizontal, Headphones]

export function Story() {
  const [activeStep, setActiveStep] = useState(0)
  const section = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          const steps = gsap.utils.toArray<HTMLElement>('[data-story-step]')
          const triggers = steps.map((step, index) =>
            ScrollTrigger.create({
              trigger: step,
              start: 'top 58%',
              end: 'bottom 42%',
              onEnter: () => setActiveStep(index),
              onEnterBack: () => setActiveStep(index),
            }),
          )

          return () => triggers.forEach((trigger) => trigger.kill())
        },
      )

      return () => media.revert()
    },
    { scope: section },
  )

  return (
    <section className="story section" id="how-it-works" ref={section}>
      <div className="shell story__intro">
        <h2>From heavy notes to a repeatable track.</h2>
        <p>
          ClassVybes follows a simple path from source material to reviewable study music.
        </p>
      </div>

      <div className="shell story__grid">
        <div className="story__visual" aria-hidden="true">
          <div className={`source-sheet${activeStep === 0 ? ' is-active' : ''}`}>
            <span className="source-sheet__title">Cell membrane</span>
            <i />
            <i />
            <i />
            <i />
            <mark>controls what enters and leaves</mark>
          </div>

          <div className={`mix-panel${activeStep === 1 ? ' is-active' : ''}`}>
            <span>Afrobeats</span>
            <div className="mix-panel__dial" />
            <div className="mix-panel__bars">
              {[40, 70, 52, 84, 62, 92, 48].map((height) => (
                <i key={height} style={{ height: `${height}%` }} />
              ))}
            </div>
            <small>Medium tempo</small>
          </div>

          <div className={`track-panel${activeStep === 2 ? ' is-active' : ''}`}>
            <img
              src={`${import.meta.env.BASE_URL}images/cover-afrobeats.webp`}
              alt=""
              width="800"
              height="800"
            />
            <div>
              <span>Study track ready</span>
              <strong>Membrane Motion</strong>
              <small>Cell Biology</small>
            </div>
          </div>
        </div>

        <div className="story__steps">
          {storySteps.map((step, index) => {
            const Icon = icons[index]
            return (
              <article
                className={`story-step${activeStep === index ? ' is-active' : ''}`}
                data-story-step
                key={step.title}
              >
                {Icon ? <Icon aria-hidden="true" size={32} weight="duotone" /> : null}
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            )
          })}
          <p className="story__timing">Product target: a full track in 2-5 minutes.</p>
        </div>
      </div>
    </section>
  )
}
