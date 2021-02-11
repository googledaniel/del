const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
	question: String,
	domain: Array,
	level: Array,
	type: String,
	usage: Number
}, {
	timestamps: true
})

const Question = model('Question', questionSchema)

module.exports = Question;