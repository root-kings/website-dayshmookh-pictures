/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
let router = require('express').Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/about', (req, res) => {
	res.render('about')
})

router.get('/services', (req, res) => {
	res.render('services')
})

router.get('/contact', (req, res) => {
	res.render('contact')
})


// Controllers -----

module.exports = router