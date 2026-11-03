import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const shufflesCardstxt = await page.locator('#shuffle').textContent();
  console.log('shufflesCardstxt:', shufflesCardstxt);
   
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Deck of Cards/);
});


