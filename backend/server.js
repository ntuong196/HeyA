const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express()
const http = require('http').Server(app)
const dbPromise = require('./models/db')
const message = require('./models/message')
var jwt = require('jsonwebtoken')


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// })


app.use(bodyParser.urlencoded({extended: false}))

const port = process.env.PORT || 8080


// app.use vs app.get
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

const messages=[
	{name:'Steve_', message:'HeyA, How are you doing?'},
	{name:'Nat_', message:'Hi, we met in uni yesterday.'}
]
const users = [{firstName: 'Steve_', email: 'st@qut.au', password: 'lit', id: 0}]
// ROUTES FOR THE API
// =============================================================================

// create our router

const api = express.Router()
const auth = express.Router()

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
	const result = messages.filter(message => message.name == user)
	res.json(result)
})


api.get('/users/me', checkAuthenticated, (req,res) => {
    res.json(users[req.user]);
})

api.post('/users/me', checkAuthenticated, (req,res) => {
    var user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
})


api.post('/messages',(req,res)=>{
	// console.log(req.body)
	// res.sendStatus(200)
	messages.push(req.body)
	res.json(req.body)
})

api.delete('/messages',(req,res,err)=>{
	// console.log(req.body)
	// res.sendStatus(200)
  const index = messages.indexOf(req)
	messages.splice(index,1)
	res.json(messages)
  console.log(err)
})


// DATABASE CONNECTION HERE
// ==========================================================

api.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });


    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
api.route('/bears/:bear_id')

    // get the bear with that id
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

    // update the bear with this id
    .put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })

    // delete the bear with this id
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// AUTHENTICATION HERE
// ==========================================================
auth.post('/login', jsonParser, (req, res) => {
    var user = users.find(user => user.email == req.body.email)

    if (!user) sendAuthError(res)

    if (user.password == req.body.password) sendToken(user, res)
    else sendAuthError(res)
})

auth.post('/register',jsonParser, (req, res) => {
    var index = users.push(req.body) - 1

    var user = users[index]
    user.id = index

    sendToken(user, res)
})

function sendToken(user, res) {
    var token = jwt.sign(user.id, '256')
    res.json({ firstName: user.firstName, token })
}

function sendAuthError(res) {
    return res.json({ success: false, message: 'email or password incorrect' });
}

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized requested. Missing authentication header'});

    var token = req.header('authorization').split(' ')[1]

    var payload = jwt.decode(token, '256')

    if(!payload)
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});

    req.user = payload

    next()
}

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api',api)
app.use('/auth',auth)

// START THE SERVER
// =============================================================================
const server = http.listen(port,()=>{
	console.log('Server is listening on port', server.address().port)
})
