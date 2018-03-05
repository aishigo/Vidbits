const router = require('express').Router();

router.post('/videos', (req, res, next) => {
	console.log('POST videos');
	res.sendStatus(201);
});

module.exports = router;
