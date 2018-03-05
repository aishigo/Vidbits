// basic server side create tests
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const {parseTextFromHTML, buildVideoObject} = require('../test-utils');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../setup-teardown-utils');

describe('POST Server ', () => {
	it('creates and saves video checks for a 201 code', async() => {
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
});
