import test, { type Page } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'
import playwright from 'playwright'

import fs from 'fs'

let context: playwright.Browser
let page: Page

test.beforeAll(async () => {
  context = await playwright['chromium'].launch({
    args: ['--remote-debugging-port=9222'],
  })
  page = await context.newPage()
})

test('Home page', async () => {
  await page.goto('/')
  await playAuditA11y(page)
})

test('Create survey page', async () => {
  await page.goto('/addSurvey')
  await playAuditA11y(page)
})

test.afterAll(async () => {
  await context.close()
  fs.rmSync('./tmp', { recursive: true, force: true })
})

const playAuditA11y = async (page: Page) => {
  await playAudit({
    page: page,
    port: 9222,
    thresholds: {
      accessibility: 80,
    },
    reports: {
      formats: {
        json: true, //defaults to false
        html: true, //defaults to false
        csv: true, //defaults to false
      },
      name: `lighthouse`, //defaults to `lighthouse-${new Date().getTime()}`
      directory: `./coverage/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
    },
  })
}
