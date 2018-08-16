const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const dbPromise = require('./models/db')
const message = require('./models/message')

app.use(bodyParser.urlencoded({extended: false}))

// const port = process.env.PORT || 8080

// app.use vs app.get
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const messages=[
	{user:'Steve', text:'Second text'},
	{user:'Kendric_', text:'Third text'}
]


const api = express.Router()

api.get('/messages',(req,res)=>{
	res.json(messages)
})

api.get('/messages/:user', (req,res)=>{
	const user = req.params.user
	const result = messages.filter(message => message.user == user)
	res.json(result)
})

api.post('/message',(req,res)=>{
	messages.push(req.body)
	res.json(req.body)
})


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api',api)

// START THE SERVER
// =============================================================================
const server = http.listen(3000,()=>{
	console.log('Server is listening on port', server.address().port)
})