import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('./')
})

test('presents the product without horizontal overflow', async ({ page }) => {
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Turn notes into study tracks.',
    }),
  ).toBeVisible()

  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
  }))

  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport)
})

test('supports explicit carousel controls', async ({ page }) => {
  const next = page.getByRole('button', { name: 'Next genre' })
  await next.scrollIntoViewIfNeeded()
  await expect(page.getByText('1 / 4', { exact: true })).toBeVisible()
  await next.click()
  await expect(page.getByText('2 / 4', { exact: true })).toBeVisible()
})

test('validates the early-access preview without transmitting data', async ({ page }) => {
  const email = page.getByRole('textbox', { name: 'Email address' })
  const submit = page.getByRole('button', { name: 'Join early access' })
  await email.scrollIntoViewIfNeeded()

  await email.fill('not-an-email')
  await submit.click()
  await expect(page.getByRole('alert')).toHaveText('Enter a valid email address.')

  await email.fill('learner@example.com')
  await submit.click()
  await expect(page.getByRole('status')).toContainText('Form preview complete.')
  await expect(page.getByRole('status')).toContainText('not sent or stored')
})

test('removes nonessential motion when reduced motion is requested', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()

  await expect
    .poll(() =>
      page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    )
    .toBe('auto')
})

test('has no serious or critical automated accessibility findings', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'A single desktop axe pass is sufficient.')

  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  const blocking = results.violations.filter(({ impact }) =>
    impact === 'serious' || impact === 'critical',
  )

  expect(blocking).toEqual([])
})

test('opens and closes the mobile navigation', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium', 'This check targets the mobile menu.')

  const open = page.getByRole('button', { name: 'Open navigation' })
  await open.click()
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  await page.getByRole('button', { name: 'Close navigation' }).click()
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeVisible()
})
