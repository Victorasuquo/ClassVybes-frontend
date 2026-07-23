import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('ClassVybes landing page', () => {
  it('explains the product and exposes the primary action', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Turn notes into study tracks.',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Join early access' }).length).toBeGreaterThan(0)
  })

  it('validates the early access preview without sending data', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Join early access' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address.')

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'learner@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Join early access' }))
    expect(screen.getByRole('status')).toHaveTextContent('Form preview complete.')
  })
})
