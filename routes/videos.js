const router = require('express').Router();
const Video = require('../models/video');

const getVideos = () => {
	let foundVideos = Video;
	return [{title: "test1"}, {title: "test2"}];
};

router.get('/', (req, res, next) => {
	console.log('landing page handlebars, getVideos: ' + getVideos());
	res.render('index.handlebars', {videos: getVideos()});
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
