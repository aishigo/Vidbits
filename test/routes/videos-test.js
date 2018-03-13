// basic server side create tests
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities');
const Video = require('../../models/video');
const app = require('../../app');

const {parseTextFromHTML, buildVideoObject, buildVideoObjectRaw, seedVideoToDatabase} = require('../test-utils');

describe('POST Server ', () => {
	beforeEach(connectDatabaseAndDropData);
	afterEach(disconnectDatabase);
	it('checks route for a 201 code', async() => {
		console.log('hello videos test');
		const expectedStatusCode = 201;
		const itemToCreate = buildVideoObject({title: "test1"});
		console.log(itemToCreate);
		const response = await request(app)
			.post('/videos')
			.type('form')
			.send(itemToCreate);
		assert.equal(response.status, expectedStatusCode);
	});
	it('checks for video existing in database', async () => {
		const itemToCreate1 = seedVideoToDatabase({title: "test1"});
		const itemToCreate2 = seedVideoToDatabase({title: "test2"});
		itemToCreate1.then((item1) => {
			console.log("ZOZOZO");
			console.log(item1);
			itemToCreate2.then((item2) => {
				console.log("YOYOYO");
				console.log(item2);
				const result = Video.find();
				console.log("AZAZAZA: " + result);
				assert.strictEqual(itemToCreate1.title, result.title);
				assert.strictEqual(itemToCreate1.description, result.description);
			})
		});
		return;
	});
	it('posts a video with an empty title', async () => {
		const expectedStatusCode = 400;
		const emptyTitleVideo = buildVideoObjectRaw("", "aVideoUrl", "ADescription");
		console.log('======> emptyTitleVideo.title: ' + emptyTitleVideo.title);
		const response = await request(app)
			.post('/videos')
			.type('form')
			.send(emptyTitleVideo);
		assert.equal(response.status, expectedStatusCode);
	});
	it('posts a video with an empty title and checks for "could not find title input"', async () => {
		const expectedStatusMessage = "could not find title input";
		const emptyTitleVideo = buildVideoObjectRaw("", "aVideoUrl", "ADescription");
		console.log('======> emptyTitleVideo.title: ' + emptyTitleVideo.title);
		const response = await request(app)
			.post('/videos')
			.type('form')
			.send(emptyTitleVideo);
		assert.strictEqual(response.text, expectedStatusMessage);
	});
});

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

