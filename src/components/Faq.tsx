import { Plus } from '@phosphor-icons/react'
import { faqs } from '../content/landing'

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="shell faq__grid">
        <h2>Questions before the first play.</h2>
        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <Plus aria-hidden="true" size={22} weight="bold" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
