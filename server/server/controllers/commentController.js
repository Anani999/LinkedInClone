const Comment = require('../models/Comment');
const Profile = require('../models/Userprofile');
const Post = require('../models/Post');

exports.createComment = async(req,res) => {
    const user = req.user;
    const { content , post} = req.body;
    try{
        const userpost = await Post.findById(post);
        if(!userpost){
            return res.status(400).json({msg:'No posts were found !'});
        }
        const profile = await Profile.findOne({user})
        const newComment = await Comment.create({profile,post:userpost,content});
        res.status(200).json(newComment)
    }catch(err){
        return res.status(500).json({msg:'Error while creating comment',error:err.message})
    }
}

exports.getComments = async(req,res) => {
    const postId = req.params.id;
    try{
        const post = await Post.findById(postId);
        if(!post){
            return res.status(400).json({msg:'post not found'});
        }
        const comments = await Comment.find({post}).populate('profile');
        res.status(200).json(comments);
    }catch(err){
        res.status(500).json({msg:'Error while getting comments ', error:err.message});
    }
}
