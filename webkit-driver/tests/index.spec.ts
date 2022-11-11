import { test, expect } from '@playwright/test'

test('mock has the title', async ({ page }) => {
  await page.goto(`${process.env.MOCK_URL}`)
  await expect(page).toHaveTitle(/.*/)
})
