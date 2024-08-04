class LoginPage {
    //Definisikan locator dari element
    get emailInput(){
        return $('#email'); //locator field email
    }
    
    get passwordInput(){
        return $('#password'); //locator field password
    }

    get loginButton(){
        return $('/html/body/div[1]/div/div/div/div[2]/div/button'); //locator login button
    }

    get errorMessage(){
        return $('//*[@role="alert"]'); //locator error message
    }

    get buttonProfile(){
        return $('#menu-button-14'); // locator buttonProfile
    }

    get profileLogout(){
        return $('#menu-list-14-menuitem-12'); // locator buttonProfileLogout
    }
    //Interaksi yang ingin dilakukan pada element tersebut
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async logout(){
        await this.buttonProfile.click();
        await this.profileLogout.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMessage.getText();
    }


}

module.exports = new LoginPage();