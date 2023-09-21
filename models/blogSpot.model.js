const { Schema } = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  name: {
    type: String,
    default: 'hahaha'
  },
  age: {
    type: Number,
    min: 18,
    index: true
  },
  bio: {
    type: String,
    match: /[a-z]/
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = BlogPost;