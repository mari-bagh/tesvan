const LoginPage = require ( "../pageobjects/login.page")

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await browser.pause(1000)
        await LoginPage.chooseAlertView();

        // await LoginPage.chooseCategoryButton();
        await browser.pause(3000);

        await LoginPage.goToPreviousPage();
        await browser.pause(3000);

    });
});


