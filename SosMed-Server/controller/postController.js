const Post = require('../models/postSchema');
const User = require('../models/userSchema');
const Comments = require('../models/commentSchema');
const jwt = require('jsonwebtoken');

module.exports ={

  createPost:(req,res)=>{
    var decoded = jwt.verify(req.headers.token, 'secret');
    var newPost = new Post({
      post: req.body.post
    });
    newPost.save()
      .then(dataPost=>{
        User.findOneAndUpdate({_id:decoded.id},{
          $push:{
            userpost:dataPost._id
          }
        })
        .then((value) => {
          res.status(200).json({
            message:'berhasil create question',
            value
          });
        })
        .catch((err) => {
          res.status(500).json({
            message:'gagal create ada yang salah'
          });
        })
      })
      .catch((err) => {
        res.status(500).json({
          message:'gagal create ada yang salah'
        })
      })
  },

  readBook:(req,res)=>{
    Book.find()
    .populate('comment')
    .then(data=>{
      res.status(200).json({
        message: 'data dikirim',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'error'
      })
    })
  },

  readOnePost:(req,res)=>{
    Book.findOne({_id : req.body.id})
    .populate('user')
    .then((value) => {
      res.status(200).json({
        message:'data dikirim',
        value
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      })
    })
  },

  deletePost:(req,res)=>{
    Book.findByIdAndRemove({
      _id:req.params.id
    })
    .then(data=>{
      res.status(200).json({
        message: 'data didelete',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      })
    })
  }
}
