const _ = require('lodash');
const config = require('nconf');
const router = require('express').Router();

const render = require('vitreum/steps/render');
const pageTemplate = require('./page.template.js');

router.get('/', (req, res) => {
	render('home', pageTemplate, {
		url    : req.url,
		config : config.get('client')
	})
		.then((page) => res.send(page))
		.catch((err) => console.log(err));
});

module.exports = router;