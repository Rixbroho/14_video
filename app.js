const express= require('express');
const cookieParser=require('cookie-parser');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const port=3000;

app.use(cookieParser());

//makeing token and storing in cookie
app.get('/',(req,res)=>{
    let token=jwt.sign({email:"ok@gmail.com"},"secret");
    // console.log(token)
    res.cookie('token',token);
    res.send("hello world")
});

//verifying token from cookie
app.get('/app',(req,res)=>{
    let data=jwt.verify(req.cookies.token,'secret')
    console.log(data);
    res.send("done")
})

// listening to server
app.listen(port,()=>{
    console.log(`backend is working in ${port} port`)
});