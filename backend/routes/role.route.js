const express = require('express');
const route = express.Router();
const Role = require('../models/role.model');


//retrieve roles list
route.get("/",(req, res)=>{
    Role.find({})
    .then((roles)=>{
        console.log("Roles", roles);
        res.status(200).json(roles);
    })
    .catch((err)=>{
        console.log("No roles were found!!", err);
        res.status(400).json({message: "No roles were found!!"});
    });

});

//get role by ID
route.get("/:id",(req, res)=>{
    Role.findById(req.params.id)
    .then((role)=>{
        console.log("Role: ",role)
        res.status(200).json(role)
    })
    .catch((err)=>{
        console.log("No role was found!!", err);
        res.status(400).json({message: "No role was found!!"});
    });
});

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
    });
});

module.exports = route;