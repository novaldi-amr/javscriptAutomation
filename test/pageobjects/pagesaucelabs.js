module.exports = class PageSaucelabs{

    open (path) {
        browser.fullscreenWindow()
        return browser.url(`https://www.saucedemo.com/`);
    }
}