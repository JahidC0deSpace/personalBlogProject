import PostModel from "../models/Blog.js";

const GetSinglePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const FindPost =  await PostModel.findById(postId)
        .populate({
            path: 'comments',
            populate: {
                path:"userId",
            }
        })
        if(!FindPost){
            return res.status(404).json({success:false,message:"Post not found"});
        }
        return res.status(200).json({success:true,post:FindPost});
    } catch (error) {
      console.log(error);
        res.status(500).json({success:false,message:"internal server error"});
        
    }
};

export {GetSinglePost}

