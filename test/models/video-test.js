const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const Video = require('../../models/video');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities')l

describe('Video model checks', () => {
	it('has a title that is a string', () => {
		const titleAsInt = 12;
		const video = new Video({title: titleAsInt});
		assert.strictEqual(video.title, titleAsInt.toString());
	})
});

module.exports = {
	connectDatabase,
	disconnectDatabase,
	Video
};