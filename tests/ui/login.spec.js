const {test, expect}= require('@playwright/test');
const {LoginPage}= require('../../pages/LoginPage');
const { randomUUID } = require('node:crypto');

//Test 1: Verify successful login by Entering valid email and password
test('Successful login.', async({page})=>{
const loginPage = new LoginPage(page);
const email = "sanket@mail.com";
const password = "Sanket*31897";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(page.getByTestId("user-email-display")).toHaveText(email);
await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

});

//Test 2: Verify login by Entering valid email and invalid password
test('Login with incorrect password.', async({page})=>{
const loginPage = new LoginPage(page);
const email = "sanket@mail.com";
const password = "Sanket*318";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(
        page.getByText('Invalid email or password', { exact: true })
    ).toBeVisible();

});

//Test 3: Verify login with unregistered email.
test('Login with unregistered email.', async({page})=>{
const loginPage = new LoginPage(page);
const email = `sanket${randomUUID()}@mail.com`;
const password = "Sanket*31897";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(
        page.getByText('Invalid email or password', { exact: true })
    ).toBeVisible();

});

//Test 4: Verify Login with an empty email.
test('Login with empty email.', async({page})=>{
const loginPage = new LoginPage(page);
const email = " ";
const password = "Sanket*31897";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(
        page.getByText('Enter a valid email', { exact: true })
    ).toBeVisible();

});


//Test 5: Verify Login with an empty password.
test('Login with empty password.', async({page})=>{
const loginPage = new LoginPage(page);
const email = "sanket@mail.com";
const password = " ";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(
        page.getByText('Password must be at least 6 characters', { exact: true })
    ).toBeVisible();

});


//Test 6: Verify Login with an empty email and password.
test('Login with an empty email and password.', async({page})=>{
const loginPage = new LoginPage(page);
const email = " ";
const password = " ";
await loginPage.gotoLoginPage();
await loginPage.enterCredentials(email,password);
await loginPage.signIn();
await expect(
        page.getByText('Enter a valid email', { exact: true })
    ).toBeVisible();
await expect(
        page.getByText('Password must be at least 6 characters', { exact: true })
    ).toBeVisible();

});



