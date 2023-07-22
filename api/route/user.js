const express =require("express");
const user_model=require("../models/user_model");
const { default: mongoose } = require("mongoose");

const router=express.Router();


// SIGN API'S
router.post('/signup',(req,res,next)=>{
        const user=new user_model({
        _id:new mongoose.Types.ObjectId,
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
      
        fname:req.body.fname,
        lname:req.body.lname,

    })

    user.save().then(result=>{
        res.status(201).json({
            newUser:result
        });
    }).catch(err=>{
        res.status(500).json({
            error:"Some ERROR"
        });
    });

});

// login
 router.post('/login',async(req,res,next)=>{
    
    user_model.findOne({email:req.body.email,password:req.body.password}).then(result=>{
        if(result!=null){
            res.status(200).json({
                newUser:result
            });
        }else{
            res.status(404).json({
                message:"User Not Found"
            });
        }
        
        
    }).catch(err=>{
        res.status(500).json({
            error:"Some ERROR"
        });
    });

});

module.exports=router;