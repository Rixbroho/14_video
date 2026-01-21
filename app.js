const express= require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.cookie("name","Ram")
    res.send("hello world")
});

app.get('/app',(req,res)=>{
    res.send("app");
});

app.listen(port,()=>{
    console.log(`backend is working in ${port} port`)
});