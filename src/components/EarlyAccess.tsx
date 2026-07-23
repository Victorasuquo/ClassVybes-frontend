import { CheckCircle } from '@phosphor-icons/react'
import { type FormEvent, useId, useState } from 'react'

export function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [complete, setComplete] = useState(false)
  const emailId = useId()
  const errorId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

    if (!isEmail) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    setComplete(true)
  }

  return (
    <section className="early-access section" id="early-access">
      <div className="early-access__inner shell">
        <div>
          <h2>Be there for the first drop.</h2>
          <p>
            Preview the early-access flow and help shape how ClassVybes handles genres, lyrics, and study rhythm.
          </p>
        </div>

        {complete ? (
          <div className="form-success" role="status">
            <CheckCircle aria-hidden="true" size={34} weight="fill" />
            <div>
              <strong>Form preview complete.</strong>
              <p>Your address was not sent or stored. Secure signup will be connected before launch.</p>
            </div>
          </div>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor={emailId}>Email address</label>
            <div className="signup-form__row">
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={Boolean(error)}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
              />
              <button type="submit">Join early access</button>
            </div>
            {error ? (
              <p className="form-error" id={errorId} role="alert">
                {error}
              </p>
            ) : null}
            <p className="form-note">
              Frontend preview only. This form does not transmit or retain your email.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
