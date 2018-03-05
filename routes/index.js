var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

router.get('/hello', (req, res, next) => {
	console.log('hello');
	res.render('hello.handlebars', {foo: 'WTF'});
});

router.get('/videos', (req, res, next) => {
	console.log('GET videos');
	res.render('hello.handlebars', {foo: 'videos'});
});

router.post('/videos', (req, res, next) => {
	console.log('POST videos');
	res.sendStatus(201);
});

module.exports = router;