import { test,expect } from '@playwright/test'; 
import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();

Given('Navigate the App via {string}', async ({ page }, url: string) => { 
    await page.goto(url); 
});


When('user enter the {string} and {string} And click login', async ({ page }, user_name: string, password: string) => {
    await page.locator('//input[@id="user-name"]').fill(user_name);
    await page.locator('//input[@id="password"]').fill(password);
    await page.locator('//input[@id="login-button"]').click(); 
});



Then('the user is logged-in successfully and user lands on the products page', async ({ page }) => {
    await expect(page.locator('//span[@class="title"]')).toContainText('Products');
  });

  
When('select {string} and add it to cart', async ({ page}, product:string ) => {
    await page.locator('//div[@data-test="inventory-item-description"]')
              .filter({hasText: product})
              .locator('button:has-text("Add to cart")').click()
});

When('click on the "cart" to open cart page and user lands on the Your Cart page', async ({ page }) => {
    await page.locator('//div[@id="shopping_cart_container"]').click();
    await expect(page.locator('//span[@data-test="title"]')).toContainText('Your Cart');
});

Then('click on the "checkout" and user lands on the checkout your information page', async ({ page }) =>{
   await page.locator('//button[@id="checkout"]').click();
    await expect(page.locator('//span[@data-test="title"]')).toContainText('Checkout: Your Information');
});

Then('user enter the {string},{string} and {string} and clicks on "continue" and user lands on Checkout: Overview page', async ({ page }, firstName: string, Last_Name: string, Zip_Postalcode: string) => {
    await page.locator('//input[@id="first-name"]').fill(firstName);
    await page.locator('//input[@id="last-name"]').fill(Last_Name);
    await page.locator('//input[@id="postal-code"]').fill(Zip_Postalcode);
    await page.locator('//input[@id="continue"]').click();
    await expect(page.locator('//span[@data-test="title"]')).toContainText('Checkout: Overview');
});

Then('click on the "Finish" order is placed successfully', async ({ page }) => {
    await page.locator('//button[@id="finish"]').click();
    await expect(page.locator('//span[@data-test="title"]')).toContainText('Checkout: Complete!');
});
