import { test, expect } from '@playwright/test';

test('Verify navigation to Client Work page', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on the "Services" menu item in the header
  await page.click('header >> text=Services');

  // Click on the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});