const { default: mongoose, model } = require("mongoose");


const userSchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    email:String,
    fname:String,
    lname:String

});

module.exports=mongoose.model('User',userSchema);