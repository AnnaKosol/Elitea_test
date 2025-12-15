import { test, expect } from '@playwright/test';

test('Verify Client Work page is accessible from Services menu', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on the "Services" menu item in the header
  await page.click('header >> text=Services');

  // Click on the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});