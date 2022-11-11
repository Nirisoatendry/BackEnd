const express = require ('express');
const { login, register } = require('../controller/authController');
const auth = express.Router();

auth.post('/login',(req, res)=>{
    login(req,res);
})
auth.post('/register',(req,res)=>{
    register(req,res);
})

module.exports = auth;