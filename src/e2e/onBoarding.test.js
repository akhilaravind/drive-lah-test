import { test, expect } from "@playwright/test";

test("onboarding flow", async ({ page }) => {
  await page.goto("/onboarding");

  await expect(
    page.getByRole('heading', { name: 'Subscription plan', exact: true })
  ).toBeVisible();
});


test('Check if page shows warning for not filling inputs' ,async({page}) =>{
    await page.goto("/onboarding?view=subscription");
    await expect(
        page.getByRole('heading', { name: 'Subscription plan', exact: true })
    ).toBeVisible();

    // Click next and see the page is not navigating
    await page.getByRole("button", { name: "Next" }).click();
    await expect(
        page.getByText('Please fill all the fields to continue')
    ).toBeVisible();
})


test('Fill subscription plans and continue' ,async({page}) =>{
    await page.goto("/onboarding?view=subscription");
    await expect(
        page.getByRole('heading', { name: 'Subscription plan', exact: true })
    ).toBeVisible();

    // Click next and see the page is not navigating
    await page.getByText("Just mates").click();
    await expect(page.getByText('Select add-ons for your subscription')).toBeVisible();

    await page.getByRole("button", { name: "Next" }).click();

    await expect(page.getByText('Device management')).toBeVisible();
})