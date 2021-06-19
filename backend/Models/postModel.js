const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  points: { type: Number },
  user: { type: String },
  time: { type: Number },
  time_ago: { type: String },
  comments_count: { type: Number },
  type: { type: String },
  url: { type: String },
  domain: { type: String },
});

module.exports = mongoose.model("Posts", postSchema);
