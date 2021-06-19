const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
	title: { type: String },
	user: { type: String }
});

module.exports = mongoose.model('Posts', postSchema);




