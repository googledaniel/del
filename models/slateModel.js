const { Schema, model } = require('mongoose');

const slateSchema = new Schema({
	candidateName: String,
	codingLanguage: String,
	domain: Array,
	level: Number,
	questions: [{ type: Schema.Types.ObjectId, ref:'Question'}]

}, {
	timestamps: true
})

const Slate = model('Slate', slateSchema)

module.exports = Slate;