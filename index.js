const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 3000
// const DBPORT = process.env.MONGODB_URI

let app = express()

// mongoose.connect(DBPORT)
// mongoose.Promise = global.Promise

// let db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(logger('dev'))
app.use(cors())

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(express.static('build'))

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/', require('./routes'))

app.use(function(req, res) {
	res.status(404)
	if (req.accepts('html')) {
		return res.render('404', {
			url: req.url
		})
	}
	if (req.accepts('json')) {
		return res.send({
			error: 'Not found'
		})
	}
	res.type('txt').send('Not found')
})

app.listen(PORT, err => {
	if (err) {
		throw err
	}
	console.info('Listening on port ' + PORT + '...')
})
