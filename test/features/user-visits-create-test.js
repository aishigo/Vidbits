const {assert} = require('chai');
const {buildVideoObject} = require('../test-utils');

describe('User visits the create page', () => {
    describe('and posts a new video', () => {
        it('and it is rendered', () => {
            // Must create the test item
            const videoToCreate = buildVideoObject();
            console.log(videoToCreate);
            const landingPageTitle = "Add new item";
            // Navigate to the page
            browser.url('/videos/create');
            // Fill in the form
            browser.setValue('#title-input', videoToCreate.title);
            browser.setValue('#description-input', videoToCreate.description);
            browser.setValue('#videoUrl-input', videoToCreate.videoUrl);
            browser.click('#submit-button');

            // Verify we end up on the landing page
            assert.include(browser.getUrl(), '/videos');
            // Verify form title and description
            console.log('XXXXXXXX: ' + browser.getText('body'));
            assert.include(browser.getText('body'), videoToCreate.title);
            assert.include(browser.getText('body'), videoToCreate.description);
            // assert.include(browser.getAttribute('body img', 'src'), videoToCreate.videoUrl);
        });
	    it('should add title to videos-container', () => {
            browser.url('/');
            console.log('YYYYYYYY: ' + browser.getText('#videos-container'));
	    });
    })
});