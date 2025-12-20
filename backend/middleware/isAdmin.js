import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';


const isAdmin = async (req, res,next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({success:fase, message:'Access Denied. No token provided.'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await UserModel.findById(decoded.id);
        if(!user){
            return res.status(404).send({success:false, message:'User not found.'});
        }

        if (user.role !== 'admin') {
            return res.status(403).send({success:false, message:'Access Denied. Admins only.'});
        }
        
        next();
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'Internal Server Error'});
    }
}

const isLoggedIn = async (req, res,next) => {
 try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({success:fase, message:'Access Denied. No token provided.'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await UserModel.findById(decoded.id);
        if(!user){
            return res.status(404).send({success:false, message:'User not found.'});
        }

        req.user = user; 
        next();   
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'Internal Server Error'});
    }
}

export  { isAdmin, isLoggedIn };