const express =require('express');
const app =express();
const userRouter=require('./api/route/user');
const mongoose=require("mongoose");
const bodyParser =require('body-parser');
var cors = require('cors');

app.use(cors())

mongoose.connect('mongodb+srv://arunkashyap230:Iphone7500@cluster0.j9ywzjj.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.error(err);
});

mongoose.connection.on('connected',connected=>{
    console.log("DATABASE CONNECTED");
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/user',userRouter);


module.exports=app;