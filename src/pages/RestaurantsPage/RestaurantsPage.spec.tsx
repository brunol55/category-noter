import { expect, test } from '@playwright/experimental-ct-react'
import RestaurantPage from '.'

test('Renders correctly', async ({ mount }) => {
  const component = await mount(<RestaurantPage />)

  await expect(component).toContainText('Restaurants')
})
