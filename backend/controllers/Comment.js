import CommentModel from "../models/Comment.js";
import PostModel from "../models/Blog.js";


const AddComment = async (req, res) => {
    try {
        const { postId, userId,comment } = req.body;

        const newComment = new CommentModel({
            postId,
            userId,
            comment
        });

        await newComment.save();
        const ExsitsPost = await PostModel.findById(postId);
        if(!ExsitsPost){
            res.status(404).send({success:false, message:'Post not found'});
        }
        ExsitsPost.comments.push(newComment._id);
        await ExsitsPost.save();
        res.status(200).send({success:true, message:'Comment added successfully', comment: newComment});

    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'Internal Server Error'});
    }
};

export   {AddComment} ;