// const { Schema, model } = require('mongoose');
//
// const questionSchema = new Schema({
// 	question: String,
// 	domain: Array,
// 	level: Array,
// 	type: String,
// 	usage: Number
// }, {
// 	timestamps: true
// })
//
// const Question = model('Question', questionSchema)

const Question = {
	coding3: [`Here's an L3 question A`, `Here's an L3 question B`, `Here's an L3 question C`, `Here's an L3 question D`],
	culture3: [`This is a culture add question A`, `This is a culture add question B`]
}

module.exports = Question;