const express=require('express');

const app=express();

app.get('/',(req,res)=>res.send('Happy Diwali'));

app.get('/day1',(req,res)=>res.send('Happy Dhanteras'));

const port = 5000;

app.listen(port,()=>console.log(`server running on port ${port}`));