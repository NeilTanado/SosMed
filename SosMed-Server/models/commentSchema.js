const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentsSchema = mongoose.Schema({
  comment : String,
  post : {type:Schema.Types.ObjectId,ref:'post'},
  owner: {type:Schema.Types.ObjectId,ref:'user'},
  like : [{type:Schema.Types.ObjectId,ref:'user'}],
  dislike : [{type:Schema.Types.ObjectId,ref:'user'}]
});


let Comments = mongoose.model('comments',commentsSchema);


module.exports = Comments;
