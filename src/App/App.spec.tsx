import { expect, test } from '@playwright/experimental-ct-react'
import App from '.'

test('Renders correctly', async ({ mount, page }) => {
  const component = await mount(<App />)

  await page.waitForLoadState('networkidle')
  await expect(component).toHaveScreenshot()
})
