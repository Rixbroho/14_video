const express= require('express');
const cookieParser=require('cookie-parser');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const port=3000;

app.use(cookieParser());


app.get('/',(req,res)=>{
    let token=jwt.sign({email:"try@gmail.com"},"secret");
    console.log(token)
    res.cookie('token',token);
    res.send("hello world")
});


app.listen(port,()=>{
    console.log(`backend is working in ${port} port`)
});