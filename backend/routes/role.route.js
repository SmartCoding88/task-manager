const express = require('express');
const route = express.Router();
const Role = require('../models/role.model');

//create new Role
route.post("/", (req, res)=>{
    let roleInfo = req.body
    Role.create({
       name: roleInfo.name,
       _permissions: ['create', 'read', 'delete', 'update']
    })
    .then((role)=>{
        console.log("Created role: ",role);
        res.status(201).json(role)
    })
    .catch((err)=>{
        console.log("Unable to create new role", err);
    })
})
module.exports = route;