import { expect, test } from '@playwright/experimental-ct-react'
import MoviesPage from '.'

test('Renders correctly', async ({ mount }) => {
  const component = await mount(<MoviesPage />)

  await expect(component).toContainText('Movies')
})
