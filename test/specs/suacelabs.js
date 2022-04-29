const loginSauce = require('../pageobjects/login'); 


describe('As a user i want', () =>{
    it('Login', async() =>{
        // await browser.url('https://www.saucedemo.com/')
        await loginSauce.open();
        browser.maximizeWindow();

        // await loginSauce.usernameInput.waitForDisplayed({revers : false});
        // await loginSauce.login('standard_user', 'secret_sauce');
        
        await loginSauce.loginText.waitForDisplayed();
        await loginSauce.loginText.click();
    });

    // it('Login with valid phonenumber', async() =>{
    //     await loginSauce.modalTextLogin.waitForDisplayed();
    //     await loginSauce.login('081213286926');
    // });

    it('Login with empty phone number', async() => {
        await loginSauce.modalTextLogin.waitForDisplayed();
        await loginSauce.login('');
    });

    it('Login with invalid phone number', async()=> {
        await loginSauce.modalTextLogin.waitForDisplayed();
        await loginSauce.login('8800');

        await loginSauce.ubahNomorHandphone.waitForDisplayed();
        await loginSauce.ubahNomorHandphone.click();
        browser.pause(10000);
    });    
});