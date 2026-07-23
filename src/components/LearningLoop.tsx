import { learningLoop } from '../content/landing'

export function LearningLoop() {
  return (
    <section className="learning-loop section" id="study-loop">
      <div className="shell learning-loop__grid">
        <div className="learning-loop__intro">
          <h2>Listen is only the first step.</h2>
          <p>
            ClassVybes is designed around active recall and spaced review, not passive background sound.
          </p>
        </div>

        <ol className="learning-loop__steps">
          {learningLoop.map((step, index) => (
            <li key={step.verb}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{step.verb}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
