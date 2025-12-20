import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
}, {timestamps: true});

const PostModel = mongoose.model("Posts", PostSchema);

export default PostModel;