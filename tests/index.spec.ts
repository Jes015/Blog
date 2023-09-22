import { expect, test } from '@playwright/test'

test.describe(() => {
  test.describe('render', () => {
    test('should render the last post page', async ({ page }) => {
      await page.goto('/')
      // Expect a title "to contain" a substring.
      await expect(page.getByRole('link', { name: 'Check out' })).toHaveText('Check out')
    })

    test.describe('post component', () => {
      test('should render the search box and the filter By components', async ({ page }) => {
        await page.goto('/')
        await expect(page.getByLabel('Search')).toBeVisible()
        await expect(page.getByLabel('Filter by')).toBeVisible()
      })

      test('should render the first posts elements', async ({ page }) => {
        await page.goto('/')
        await expect(page.getByRole('article')).toHaveCount(4)
      })
    })
  })

  test.describe('action tests', () => {
    test('should redirect to the last post', async ({ page }) => {
      await page.goto('/')
      await page.getByText('Check out').click()

      await expect(page).toHaveTitle(/Why is geithub the best option/)
    })

    test.describe('posts component', () => {
      test.describe('search box', () => {
        test('should found an element', async ({ page }) => {
          await page.goto('/')
          await page.getByLabel('Search').fill('why is')

          await expect(page.getByRole('article')).toHaveCount(3)
        })

        test('should not found an element', async ({ page }) => {
          await page.goto('/')
          await page.getByLabel('Search').fill('why is the login')

          await expect(page.getByRole('article')).toHaveCount(0)
        })
      })

      test.describe('filter by', () => {
        test('should found all bun elements', async ({ page }) => {
          await page.goto('/')
          await page.getByLabel('Filter by').selectOption('Bun')
          await expect(page.getByRole('article')).toHaveCount(1)
        })

        test('should not found any element', async ({ page }) => {
          await page.goto('/')
          await page.getByLabel('Filter by').selectOption('Astro')
          await expect(page.getByRole('article')).toHaveCount(0)
        })
      })
    })
  })

  /* test('get started link', async ({ page }) => {

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click()

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
  }) */
})
