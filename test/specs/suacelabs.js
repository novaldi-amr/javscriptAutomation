const loginSauce = require('../pageobjects/login');

describe('As a user i want', () =>{
    it('Login', async() =>{
        await browser.url('https://www.saucedemo.com/')
        // await loginSauce.open();

        await loginSauce.usernameInput.waitForDisplayed({revers : false});
        await loginSauce.login('standard_user', 'secret_sauce');
    });
});