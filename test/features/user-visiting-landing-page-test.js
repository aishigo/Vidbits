const {assert} = require('chai');

describe('User visiting landing page', () => {
    describe('with no existing videos', () => {
        it('shows no videos', () => {
            browser.url('/');
            console.log('============: ' + browser.getText('#videos-container'));

            assert.equal(browser.getText('#videos-container'), '');
        });
    });

    describe('visits landing page', () => {
        it('contains the text "Save a video"', () => {
            browser.url('/');
            browser.click('#create-button');
            assert.include(browser.getText('body'), 'Save a video');
        });
    });
});