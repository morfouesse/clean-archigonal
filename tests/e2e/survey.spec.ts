import { expect, test, type Page } from '@playwright/test'

test.describe('Survey', () => {
  test('Should create a survey and redirect to survey list', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByText('Petit projet de questionnaire en clean archigonale', { exact: true }),
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'joué' })).toHaveCount(1)

    await page.getByRole('button', { name: 'Crée ton questionnaire' }).click()
    await expect(page.locator('h1', { hasText: 'Crée ton questionnaire' })).toBeVisible()

    await expect(page.getByLabel('nom de la question')).toBeHidden()

    await page.getByLabel('nom du questionnaire').fill('Les tests ( oui encore )')

    await formFill(page)

    await page.getByRole('button', { name: 'Crée la prochaine question' }).click()
    await expect(page.getByText('Tout les champs sont obligatoires', { exact: true })).toBeHidden()

    await formFill(page)
    await page.locator('input[type="checkbox"]').last().check()

    await page.getByRole('button', { name: 'Crée le questionnaire' }).click()

    const goToHome = /\/$/
    await expect(page).toHaveURL(goToHome)
  })

  const formFill = async (page: Page): Promise<void> => {
    await expect(page.getByLabel('nom de la question')).toBeVisible()

    await expect(page.getByLabel('nom de la première réponse')).toBeHidden()
    await expect(page.getByLabel('nom de la seconde réponse')).toBeHidden()
    await expect(page.getByLabel('nom de la troisième réponse')).toBeHidden()
    await expect(page.getByLabel('nom de la quatrième réponse')).toBeHidden()
    await page
      .getByLabel('nom de la question')
      .fill("Pour qu'elle type(s) de test faut-il faire du coverage ?")

    await expect(page.getByLabel('nom de la première réponse')).toBeVisible()
    await expect(page.getByLabel('nom de la seconde réponse')).toBeVisible()
    await expect(page.getByLabel('nom de la troisième réponse')).toBeVisible()
    await expect(page.getByLabel('nom de la quatrième réponse')).toBeVisible()

    await page.getByLabel('nom de la seconde réponse').fill('les tests de composants')
    await page.getByLabel('nom de la première réponse').fill('les tests unitaires')
    await page.getByLabel('nom de la troisième réponse').fill('les tests E2E')
    await page.getByLabel('nom de la quatrième réponse').fill('rompiche z_z')

    await page.locator('input[type="checkbox"]').first().check()
  }
})
