import { expect, test } from '@playwright/experimental-ct-react'
import BooksPage from '.'

test('Renders correctly', async ({ mount }) => {
  const component = await mount(<BooksPage />)

  await expect(component).toContainText('Books')
})
