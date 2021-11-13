const { Router } = require("express");
var express=require("express");

var router=express.Router();

const {check,validationResult}=require('express-validator');

router.get('/test',(req,res)=>{
    res.send("I'm from auth router");
})

module.exports=Router;