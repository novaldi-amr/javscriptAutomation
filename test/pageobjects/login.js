const PageSaucelabs = require('./pagesaucelabs')

class loginSauce extends PageSaucelabs {

    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    async login(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.btnLogin.click();
    }

}

module.exports = new loginSauce();