const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../../pages/RegistrationPage');
const { randomUUID } = require('node:crypto');

//Test 1: Verify successful registration with valid email and password
test("Successful registration with valid email and password", async ({ page }) => {
    const email = `sanket.qa.${randomUUID()}@example.com`;
    const password = "Sanket*31897";
    const confirmPassword = "Sanket*31897";
    const registrationPage = new RegistrationPage(page);
    await registrationPage.gotoRegisterPage();
    await registrationPage.fillRegistrationForm(email, password, confirmPassword);
    await registrationPage.createAccount();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();


});

//Test 2: Enter a password that doesn't meet the minimum length requirement. 
// Verify the appropriate validation message.
test('Register with Invalid password', async ({ page }) => {
    const email = `sanket.qa.${randomUUID()}@example.com`;
    const password = "San@123";
    const confirmPassword = "San@123";
    const registrationPage = new RegistrationPage(page);
    await registrationPage.gotoRegisterPage();
    await registrationPage.fillRegistrationForm(email, password, confirmPassword);
    await registrationPage.createAccount();
    await expect(
        page.getByText(
            'Password does not meet the requirements below',
            { exact: true }
        )
    ).toBeVisible();

});



//Test 3: Enter different values in Password and Confirm Password. Verify the mismatch validation.
test('Register with Password mismatch', async ({ page }) => {
    const email = `sanket.qa.${randomUUID()}@example.com`;
    const password = "San@12345";
    const confirmPassword = "San@1234";
    const registrationPage = new RegistrationPage(page);
    await registrationPage.gotoRegisterPage();
    await registrationPage.fillRegistrationForm(email, password, confirmPassword);
    await registrationPage.createAccount();
    await expect(
        page.getByText(
            'Passwords do not match',
            { exact: true }
        )
    ).toBeVisible();

});



//Test 4: Register an account and attempt registration again using the same email. Verify the duplicate-email error.
test('Register with Duplicate email', async ({ page }) => {

    const email = `sanket.qa.${randomUUID()}@example.com`;
    const password = "Sanket*31897";
    const confirmPassword = "Sanket*31897";
    const registrationPage = new RegistrationPage(page);

    // First registration
    await registrationPage.gotoRegisterPage();

    await registrationPage.fillRegistrationForm(
        email,
        password,
        confirmPassword
    );

    await registrationPage.createAccount();

    await expect(
        page.getByRole('link', { name: 'Home' })
    ).toBeVisible();

    // Second registration with the same email
    await registrationPage.gotoRegisterPage();

    await registrationPage.fillRegistrationForm(
        email,
        password,
        confirmPassword
    );

    await registrationPage.createAccount();

    await expect(
        page.getByText('Email already registered', { exact: true })
    ).toBeVisible();

});


