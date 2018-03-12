const {mongoose, databaseUrl, options} = require('../database');

const connectDatabaseAndDropData = async () => {
	mongoose.promise = global.promise;
	await mongoose.connect(databaseUrl, options);
	await mongoose.connection.db.dropDatabase();
};

const connectDatabase = async () => {
	await mongoose.connect(databaseUrl, options);
};

const disconnectDatabase = async () => {
	await mongoose.disconnect();
};

module.exports = {
	connectDatabase,
	connectDatabaseAndDropData,
	disconnectDatabase,
};