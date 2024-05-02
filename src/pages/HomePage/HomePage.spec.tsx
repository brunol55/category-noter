import { expect, test } from '@playwright/experimental-ct-react'
import HomePage from '.'

test('Renders correctly', async ({ mount }) => {
  const component = await mount(<HomePage />)

  await expect(component).toContainText('Home')
})
