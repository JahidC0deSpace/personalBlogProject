import PostModel from "../models/Blog.js";
import UserModel from "../models/User.js";
import fs from 'fs';
import path from 'path';


const getAllDashboardData = async (req, res) => {
    try {
        const Posts = await PostModel.find();


        if (!Posts) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({suscces:true, Posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({suscces:false,message:"Internal Server Error" });
        
    }
};

const GetUser = async (req, res) => {
    try {
        const Users = await UserModel.find();

        if (!Users) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({suscces:true,Users });
    } catch (error) {
        console.log(error);
        res.status(500).json({suscces:false,message:"Internal Server Error" });
        
    }
};

const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const ExistingUser = await UserModel.findById(userId);

        if (!ExistingUser) {
            return res.status(404).json({suscces:false ,message: "User not found" });
        }

        if (ExistingUser.role == "admin") {
            return res.status(403).json({ suscces:false ,message: "Cannot delete admin user" });
        }

        if (ExistingUser.profile){
            const profilePath = path.join('public/images', ExistingUser.profile);
            fs.promises.unlink(profilePath)
            .then(() => {console.log('Profile image deleted successfully');})
            .catch((err) => {console.error('Error deleting profile image:', err);});
        }
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        res.status(200).json({ suscces:true ,message: "User deleted successfully", deletedUser });

    } catch (error) {
        console.log(error);
        res.status(500).json({suscces:false,message:"Internal Server Error" });
        
    }
};

export { getAllDashboardData,GetUser,DeleteUser };