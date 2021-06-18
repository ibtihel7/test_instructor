const mongoose = require ('mongoose');

const Schema = mongoose.Schema; 

const postModel = new Schema({
	title: { type: String },
	user: { type: String }
});

const Posts = mongoose.model('Posts', postModel);
