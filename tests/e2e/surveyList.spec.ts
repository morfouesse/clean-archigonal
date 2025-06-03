import { expect, test } from '@playwright/test'

test.describe('Survey', () => {
  test('Should see list of survey', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('Petit projet de questionnaire en clean archigonale')).toBeVisible()
    await expect(page.getByRole('button', { name: 'joué' })).toHaveCount(2)
  })
})
