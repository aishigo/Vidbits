const router = require('express').Router();
const Video = require('../models/video');

router.get('/', (req, res, next) => {
	console.log('landing page handlebars');
	res.render('index.handlebars');
});

router.post('/videos', async (req, res, next) => {
	console.log('render show.handlebars');
	const {title, description} = req.body;
	const createdVideo = await Video.create({title, description});
	res.status(201);
	res.render('show.handlebars', {title: title, description: description});
});

module.exports = router;
