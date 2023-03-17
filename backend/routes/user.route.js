const express = require('express');
const route = express.Router();
//import User Model
const User = require('../models/user.model')

//get Users list
route.get("/", (req, res)=>{
    User.find({})
    .then((users)=>{
        console.log("Users List: ",users);
        res.status(200).json(users);
    })
    .catch((err)=>{
        res.status(404).json({message: "No users were found!!"});
        console.log("No users were found!!",err)
    })
});

//get User By ID
route.get("/:id", (req, res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        console.log("User: ",user)
        res.status(200).json(user);
    })
    .catch((err)=>{
        res.status(404).json({message: "No user with id "+req.params.id+" was found!!"});
        console.log("User unfound!!",err)
    })
});

//create new User
route.post("/", (req, res)=>{
    let userInfo = req.body
    User.create({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        username: userInfo.username,
        status: false,
        password: userInfo.password,
        phone: userInfo.phone,
        role: userInfo.role,
        updated: Date.now()
    })
    .then((user)=>{
        console.log("Created User: ",user);
        res.status(201).json(user)
    })
    .catch((err)=>{
        console.log("Unable to create new user", err);
    })
})
module.exports = route;