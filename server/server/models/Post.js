const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, ref:'User', required:true},
    caption:{type:String,required:true},
    mediaUrl:{type:String},
    mediaType:{type:String, enum:['image','video']},
    createdAt:{type:Date, default:Date.now()}
    
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;