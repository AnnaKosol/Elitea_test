import { test, expect } from '@playwright/test';

test('Verify navigation to Client Work page', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.click('header >> text=Services');

  // Click on "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});