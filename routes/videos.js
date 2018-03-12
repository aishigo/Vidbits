const router = require('express').Router();
const Video = require('../models/video');
const {connectDatabase, disconnectDatabase} = require('../test/database-utilities');

const getVideos = async () => {
	// res.render('index.handlebars', {videos: []});
	// return;
	let foundVideos = await Video.find();
	console.log("TOTOTOTOTOTO: " + foundVideos);
	console.log(foundVideos);
	return foundVideos;
};

router.get('/', async (req, res, next) => {
	console.log('landing page handlebars');
	const foundVideos = await getVideos(res);
	res.render('index.handlebars', {videos: foundVideos});
});

router.get('/videos/create', (req, res, next) => {
	console.log('videos/create');
	res.render('create.handlebars');
});

router.post('/videos', async (req, res, next) => {
	console.log('render show.handlebars');
	const {title, description} = req.body;
	const createdVideo = await Video.create({title, description});
	res.status(201);
	res.render('show.handlebars', {title: title, description: description});
});

module.exports = router;
