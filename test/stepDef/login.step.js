const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");


Given(/^I open KasirDemo website$/, async () => {
    await Page.open('/');
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('warungaja@email.com', 'warung@123');
    
})

Then(/^I Should be on the Dashboard page$/, async () => {
    await LoginPage.login('warungaja@email.com', 'warung@123');
    await DashboardPage.assertDashboardUrl();
    await LoginPage.logout();
})

When(/^I login with invalid email$/, async () => {
    await LoginPage.login('emailaja', 'warung@123');
})

Then(/^I Should see an error email message$/, async () => {
    await LoginPage.assertErrorMessage('"email" must be a valid email');

})

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('warungaja@email.com', '123456');
})

Then(/^I Should see an error password message$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');

})

//Data driven test (Scenario Outline) step definitions

When (/^I login with(\w+) and (.+)$/, async(email,password) => {
    await LoginPage.login(email,password);
})


