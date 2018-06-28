const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = mongoose.Schema({
  post : String,
  owner:{type:Schema.Types.ObjectId,ref:'user'},
  comment:[{type:Schema.Types.ObjectId,ref:'comment'}],
  like : [{type:Schema.Types.ObjectId,ref:'user'}],
  dislike : [{type:Schema.Types.ObjectId,ref:'user'}]
});


let Post = mongoose.model('post',postSchema);


module.exports = Post;
