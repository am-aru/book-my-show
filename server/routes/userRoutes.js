const express = require ("express");
const User = require ('../models/userModels');

const userRouter = express.Router();
userRouter.post('/register' , async(req , res) => {
try{
   const userExists = await User.findOne({email : req.body.email }) ;
   if(userExists){
    return res.send({
        success : false,
        message: "user exists already"
    });
}
    const newUser = new User(req.body);
    await newUser.save();
   res.send({
    success : true ,
    message : "user registered successfully"
   });
}catch(err){
    res.status(404).json({ message : err.message})
}
});

userRouter.post('/login' , async(req , res) => {
    try{
       const user = await User.findOne({email : req.body.email }) ;
       if(!user){
        return res.send({
            success : false,
            message: "user not found"
        });
    }
        if(req.body.password !== user.password){
            return res.send({
                success : false,
            message: "incorrect password"
            })
        }
        res.send({
            success : true,
        message: "user login successfully"
        })
    }catch(err){
        res.status(404).json({ message : err.message})
    }
    });
    

module.exports = userRouter;