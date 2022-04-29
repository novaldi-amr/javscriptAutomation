const PageSaucelabs = require('./pagesaucelabs')

class loginSauce extends PageSaucelabs {

    get buttonSubmitLogin(){
        return $('button[type="submit"]');
    }

    get loginText () {
        return $('div[class="profile"]')
    }

    get modalTextLogin(){
        return $('div[class="modal-content"]');
    }

    get nomorHandphoneField(){
        return $('input[data-testid="phone"]');
    }

    get ubahNomorHandphone(){
        return $('button[class="btn-ubah w-100 mt-32 btn btn-primary"]');
    }

    async login(username){
        await this.nomorHandphoneField.setValue(username);
        await this.buttonSubmitLogin.click();
    }
 
}

module.exports = new loginSauce();