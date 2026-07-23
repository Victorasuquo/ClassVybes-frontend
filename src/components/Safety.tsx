import { FileMagnifyingGlass, LockKey, MusicNotesMinus } from '@phosphor-icons/react'

const safetyItems = [
  {
    title: 'Accuracy stays visible',
    body: 'Important lyrics should link back to the passage that produced them, with review before repeated study.',
    icon: FileMagnifyingGlass,
  },
  {
    title: 'Privacy needs plain language',
    body: 'Upload use, retention, deletion, and model-training choices must be stated before the product accepts notes.',
    icon: LockKey,
  },
  {
    title: 'Music without impersonation',
    body: 'The product should avoid artist imitation, cloned celebrity voices, and unsupported copyright claims.',
    icon: MusicNotesMinus,
  },
] as const

export function Safety() {
  return (
    <section className="safety section" id="safety">
      <div className="shell safety__grid">
        <div className="safety__intro">
          <h2>Keep the source in view.</h2>
          <p>
            Generated lyrics should be easy to review, edit, and compare with your material. ClassVybes is a study aid, not a replacement for the original source.
          </p>
        </div>

        <div className="safety__list">
          {safetyItems.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title}>
                <Icon aria-hidden="true" size={30} weight="duotone" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
