const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Message = new Schema({
	// _id: String,
	name: String,
	message: String
})


module.exports = mongoose.model('Message', Message)