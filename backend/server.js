const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const dbPromise = require('./models/db')
const message = require('./models/message')

app.use(bodyParser.urlencoded({extended: false}))

const port = process.env.PORT || 8080

// app.use vs app.get
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const messages=[
	{name:'Steve_', message:'Second text'},
	{name:'Kendric_', message:'Third text'}
]

// ROUTES FOR THE API
// =============================================================================

// create our router

const api = express.Router()

// api.use(function(req, res, next) {
// 	// do logging
// 	console.log('Something is happening.');
// 	next();
// });

api.get('/messages',(req,res)=>{
	res.json(messages)
})

api.get('/messages/:user', (req,res)=>{
	const user = req.params.user
	const result = messages.filter(message => message.user == user)
	res.json(result)
})



api.post('/messages',(req,res)=>{
	// console.log(req.body)
	// res.sendStatus(200)
	messages.push(req.body)
	res.json(req.body)
})


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api',api)

// START THE SERVER
// =============================================================================
const server = http.listen(port,()=>{
	console.log('Server is listening on port', server.address().port)
})