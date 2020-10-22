const User = require('../Models/User')
const bcrypt = require("bcryptjs");
const e = require('express');

exports.createNewUser = async (req,res)=>{
    let newUser = new User(req.body)
    newUser.save(async (err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send("Success:Account created")
        }
    })
    
}

exports.login = async (req,res) => {
    const {email,password} = req.body;
    console.log(req.body)
    User.findOne({email},async (err,user)=>{
        if(err){
            res.send(500).send(err)
        }
        else{
                const valid = await bcrypt.compare(password,user.password)
                if(valid){
                    res.status(201).send ({
                        'status': 'success',
                        'userId': user._id
                       })
                }
                else{
                    res.send("Incorrect Username or Password");
                }
        }
    })
}

exports.makenote = async (req,res) => {
    User.findOne({_id: req.params.userid}, (err,user)=>{
        if(err){
            res.status(500).send("No such user found")
        }
        else{
            if(user){
                data = req.body
                user.notes.push({
                    data
                })
                if (user.save()){
                    res.status(200).send("Note Created")
                }
                else{
                    res.send("Unable to save")
                }
            }
        }
    })
}

exports.readNotes = async (req,res) => {
    User.findOne({_id: req.params.userid}, (err,user)=>{
        if(err){
            res.status(500).send("No such user found")
        }
        else{
            if(user){
                data = user.notes
                res.send(data)
            }
        }
    })
}