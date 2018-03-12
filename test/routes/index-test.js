// basic server side create tests
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities');
const Video = require('../../models/video');
const app = require('../../app');

const {parseTextFromHTML, seedVideoToDatabase} = require('../test-utils');

describe('GET /', () => {
	beforeEach(connectDatabaseAndDropData);
	afterEach(disconnectDatabase);
	it('renders existing videos', async () => {
		// Create a video
		const videoObject = await seedVideoToDatabase({title: 'test1'});
		const videoObject2 = await seedVideoToDatabase({title: 'test2'});
		// console.log('WWWWW');
		// console.log(videoObject);
		// Navigate to landing page
		const response = await request(app).get('/');
		console.log("###################: ", response.text);
		// Check for video
		const testData = parseTextFromHTML(response.text, '#videos-container');
        console.log('KKKKKKKKK: ' + testData);
        assert.include(testData, videoObject.title);
        assert.include(testData, videoObject2.title);
	})
});