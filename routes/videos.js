const router = require('express').Router();
const Video = require('../models/video');

router.post('/videos', async (req, res, next) => {
	const {title, description} = req.body;
	const createdVideo = await Video.create({title, description});
	res.status(201);
	res.render('show.handlebars', {title: title, description: description});
});

module.exports = router;
