const express = require('express');
const rout = express.Router();
const user = require('../model/user');
rout.get('/',(req,res)=>{
   res.send('hello to route');
})

rout.post('/save',(req,res)=>{
      const newUser = new user({
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          email:req.body.email
      })
      newUser
            .save()
            .then(()=>console.log('data saved'))
            .catch((err)=>console.log('this is error==> ',err))
})

module.exports = rout;