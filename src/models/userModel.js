const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true, maxlength: 16 },
	lastname: { type: String, require: true, trim: true },
	username: { type: String, required: true, trim: true },
	password: { type: String, required: true, minlength: 8 },
	email: { type: String, required: true, trim: true },
	birthday: { type: String, required: true, trim: true },
	bio: { type: String, trim: true, maxlength: 200, default: 'Olá! Sou novo por aqui!' },
	favBody: { type: String, trim: true, default: 'dotted_circle' },
	profileImg: { type: String, trim: true, default: 'astronaut_man' },
	badges: { type: [[String]], trim: true, default: [] },
});

const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;
