const Post = require('../models/Post');
const Profile = require('../models/Userprofile');
const uploadPost = require('../services/uploadPost');

exports.createPost = [
 uploadPost.single('media')
,async(req,res) => {
    const { caption , mediaType } = req.body;
    const user = req.user;
    if(!user){
        return res.status(401).json({msg:'No user found'})
    }
    const mediaUrl = req.file ? `${process.env.baseURL}/${req.file.filename}` : '';

    try {
        const newPost = await Post.create({user,caption,mediaType,mediaUrl});
        await newPost.save()
        return res.status(200).json(newPost);
    }catch(err){
        return res.status(500).json({msg:'Error while creating Post',err})
    }
}
]

exports.updatePost = async(req,res) => {
    const {postId , payload} = req.body;
    const user = req.user;
    try{
        const post = await Post.find({_id:postId,user});
        if(!post){
            return res.status(400).json({message:'This action will not work'});
        }
        const samePost = await Post.findByIdAndUpdate(postId,payload,{new:true});
        return res.status(200).json(samePost);
    }catch(error){
        return res.status(500).json({error})
    }
}

exports.deletePost = async(req,res) => {
    const postId = req.params.id;
    const user = req.user;
    try{
        const post = await Post.findOne({_id:postId,user});

        if(!post){
            return res.status(400).json({message:'Post not found'});
        }
        
        await post.deleteOne();
        return res.status(200).json({msg:'Post deleted !'});
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

exports.myPosts = async(req,res) => {
    const user = req.user;
    try{
        const posts = await Post.find({user}).populate('user');
        const profile = await Profile.findOne({user});
        if(!posts){
            return res.status(400).json({message:'No posts found'});
        }
        return res.status(200).json({posts,profile});
    }
    catch(error){
        return res.status(500).json({error});
    }
}

exports.getPostById = async(req,res) => {
    const _id = req.params.id;
    try{
        const post = await Post.findById(_id);
        if(!post){
            return res.status(402).json({msg:"Post not found"});
        }

        return res.status(200).json(post);
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}