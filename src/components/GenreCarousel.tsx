import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { genres } from '../content/landing'

export function GenreCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="genres section" id="your-sound">
      <div className="genres__header shell">
        <div>
          <h2>Your course has more than one sound.</h2>
          <p>Move between genres without changing the material you need to remember.</p>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={scrollPrev} aria-label="Previous genre">
            <ArrowLeft aria-hidden="true" size={22} weight="bold" />
          </button>
          <span aria-live="polite">
            {selectedIndex + 1} / {genres.length}
          </span>
          <button type="button" onClick={scrollNext} aria-label="Next genre">
            <ArrowRight aria-hidden="true" size={22} weight="bold" />
          </button>
        </div>
      </div>

      <div className="embla shell" ref={emblaRef} aria-label="Featured study genres">
        <div className="embla__container">
          {genres.map((genre, index) => (
            <article
              className="genre-slide"
              key={genre.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${genres.length}: ${genre.name}`}
            >
              <div className="genre-slide__art">
                <img
                  src={`${import.meta.env.BASE_URL}images/${genre.image}`}
                  alt={`${genre.name} study-track collage artwork`}
                  width="800"
                  height="800"
                  loading="lazy"
                />
              </div>
              <div className="genre-slide__meta">
                <div>
                  <span>{genre.subject}</span>
                  <h3>{genre.name}</h3>
                </div>
                <span>{genre.duration}</span>
              </div>
              <p>{genre.descriptor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
