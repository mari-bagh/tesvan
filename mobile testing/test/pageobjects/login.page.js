
class LoginPage {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get categoryBtn() {
        return $('//XCUIElementTypeCell[4]/XCUIElementTypeOther[1]/XCUIElementTypeOther')
    }

    get alertView() {
        const selector = `**XCUIElementTypeOther[1]`
        const button =  $(`-ios class chain:${selector}`)
        return button
    }

    get backBtn() {
        return $('//XCUIElementTypeButton[@name="UIKitCatalog"]')
    }

    async chooseCategoryButton() {
        await this.categoryBtn.click();
    }

    async goToPreviousPage() {
        await this.backBtn.click();
     }


    async chooseAlertView(){
        await this.alertView.click();
    }



    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
