
import PostModel from "../models/Blog.js";
import fs from 'fs';
import path from 'path';




// Create Post
const CreatePost = async (req, res) => {
    try {
        const {title,desc} = req.body;

        const imagePath = req.file.path;
        const CreateBlog = new PostModel({
            title,
            desc,
            image: imagePath,
        });
        await CreateBlog.save();
        return res.status(200).json({success:true,message:"Blog created successfully",post:CreateBlog});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"internal server error"});
    }
};


// Update Post
const UpdatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const {title,desc} = req.body;

        const postUpdate = await PostModel.findById(postId);
        if(!postUpdate){
            return res.status(404).json({success:false,message:"Post not found"});
        }
        if(title){
            postUpdate.title = title;
        }
        if(desc){
            postUpdate.desc = desc;
        }
        if(req.file){
            postUpdate.image = req.file.filename;
        }

        await postUpdate.save();
        return res.status(200).json({success:true,message:"Post updated successfully",postUpdate});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"internal server error"});
    }
};

// Get Posts
const GetPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        if(!posts){
            return res.status(404).json({success:false,message:"No posts found"});
        }
        return res.status(200).json({success:true,posts});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"internal server error"});
    }
};

// Delete Post
const DeletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        const FindPost = await PostModel.findById(postId);
        if(!FindPost){
            return res.status(404).json({success:false,message:"Post not found"});
        }
        if(FindPost.image){
            const imagePath = path.join(FindPost.image);
            fs.promises.unlink(imagePath)
            .then(() => {console.log("Image file deleted successfully");})
            .catch((err) => {console.log("Error deleting image file:", err)});
        }
        const deletePost = await PostModel.findByIdAndDelete(postId);
        return res.status(200).json({success:true,message:"Post deleted successfully",post:deletePost});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"internal server error"});
    }
}



export { CreatePost, DeletePost,GetPosts,UpdatePost }; 