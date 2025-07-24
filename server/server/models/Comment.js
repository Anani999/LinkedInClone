const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    profile:{type:mongoose.Types.ObjectId,ref:'UserProfile',required:true},
    post:{type:mongoose.Types.ObjectId,ref:'Post',required:true},
    content:{type:String,required:true},
    likes:{type:Number,default:0},
    hearts:{type:Number,default:0},
    timeStamp:{type:Date,default:Date.now()}
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;