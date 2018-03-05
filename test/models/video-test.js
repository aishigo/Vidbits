const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const Video = require('../../models/video');

async function connectDatabase() {
	await mongoose.connect(databaseUrl, options);
	await mongoose.connection.db.dropDatabase();
}

async function disconnectDatabase() {
	await mongoose.disconnect();
}

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