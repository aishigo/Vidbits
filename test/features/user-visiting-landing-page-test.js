const {assert} = require('chai');

describe('User visiting landing page', () => {
    describe('with no existing videos', () => {
        it('shows no videos', () => {
            browser.url('/');

            assert.equal(browser.getText('#videos-container'), '');
        });
    });

    describe('visits videos/create.html', () => {
        it('contains the text "Save a video"', () => {
            browser.url('/');
            // browser.click('a[href="/videos/create"]');

            browser.click('#create-button');
            console.log(browser.getText('body'));
            assert.include(browser.getText('body'), 'Save a video');
        });
    });
});