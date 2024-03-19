const express=require('express');
// const studentmodel = require('../models/student-model');
// const routes=express();
const routes=express();

routes.get('/',(req,res)=>{
    res.render('index');
})


module.exports=routes;