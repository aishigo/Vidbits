const mongoose = require('mongoose');
module.exports = mongoose.model(
	'Video',
	// schema for video
	mongoose.Schema({
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	})
);