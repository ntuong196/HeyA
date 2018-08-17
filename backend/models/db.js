
// db.js
// Mongodb 3+
const assert = require('assert'),
    mongoose = require('mongoose');
    // message = require('./models/message');


const dbUrl ='mongodb://steve:tuong123@ds229621.mlab.com:29621/irc'

const LcDbUrl ='mongodb://localhost:27017/irc' 

module.exports = new Promise((resolve, reject) => {
  
    mongoose.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {

        if (err) {
            return reject(err)
        }

        console.log("Successfully connected to MongoDB.")

        // resolve(client.db())
    });
})
