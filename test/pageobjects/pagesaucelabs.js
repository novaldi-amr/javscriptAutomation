module.exports = class PageSaucelabs{

    open (path) {
        browser.fullscreenWindow()
        return browser.url(`https://moladin.com/`);
    }
}