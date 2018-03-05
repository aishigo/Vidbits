// basic server side create tests
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities');
const Video = require('../../models/video');
const app = require('../../app');

const {parseTextFromHTML, buildVideoObject} = require('../test-utils');

describe('POST Server ', () => {
	beforeEach(connectDatabaseAndDropData);
	afterEach(disconnectDatabase);
	it('checks route for a 201 code', async() => {
		console.log('hello videos test');
		const expectedStatusCode = 201;
		const itemToCreate = buildVideoObject();
		console.log(itemToCreate);
		const response = await request(app)
			.post('/videos')
			.type('form')
			.send(itemToCreate);
		assert.equal(response.status, expectedStatusCode);
	});
	it('checks for video existing in database', async () => {
		const itemToCreate = buildVideoObject();
		console.log(itemToCreate);
		const response = await request(app)
			.post('/videos')
			.type('form')
			.send(itemToCreate);
		const result = await Video.findOne({});
		assert.strictEqual(itemToCreate.title, result.title);
		assert.strictEqual(itemToCreate.description, result.description);
	})
});

