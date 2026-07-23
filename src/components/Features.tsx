import {
  DownloadSimple,
  ListChecks,
  MicrophoneStage,
  Repeat,
  TextAlignLeft,
} from '@phosphor-icons/react'

export function Features() {
  return (
    <section className="features section">
      <div className="features__header shell">
        <h2>Built around the way a track becomes familiar.</h2>
      </div>

      <div className="feature-grid shell">
        <article className="feature feature--lyrics">
          <TextAlignLeft aria-hidden="true" size={34} weight="duotone" />
          <h3>Synchronized lyrics</h3>
          <p>Keep the words and the sound together while important lines come into focus.</p>
          <div className="lyric-lines" aria-hidden="true">
            <span>The membrane keeps the balance</span>
            <strong>Controls what enters and leaves</strong>
            <span>Protecting every living cell</span>
          </div>
        </article>

        <article className="feature feature--loop">
          <Repeat aria-hidden="true" size={34} weight="duotone" />
          <h3>Repeat the difficult part</h3>
          <p>Loop the line or section that still needs another pass.</p>
          <div className="loop-ring" aria-hidden="true">
            <span>2×</span>
          </div>
        </article>

        <article className="feature feature--karaoke">
          <MicrophoneStage aria-hidden="true" size={34} weight="duotone" />
          <h3>Karaoke for recall</h3>
          <p>Move from reading along to singing the next idea without looking.</p>
        </article>

        <article className="feature feature--library">
          <ListChecks aria-hidden="true" size={34} weight="duotone" />
          <h3>Organize the revision</h3>
          <p>Keep tracks together by subject, course, and the next exam on your list.</p>
        </article>

        <article className="feature feature--offline">
          <DownloadSimple aria-hidden="true" size={34} weight="duotone" />
          <h3>Take tracks beyond a stable connection</h3>
          <p>Downloads are planned for the premium experience so revision can travel.</p>
        </article>
      </div>
    </section>
  )
}
