const express = require('express');
const router = express.Router();
const { Employee } = require('../models');

//ENDPOINTS CREATION:
//Get Request:
router.get("/", async (req,res) => {
    const listOfEmployee = await Employee.findAll(); //Gets all the employee info from employee table
    res.json(listOfEmployee);
});

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id;
    const post = await Employee.findByPk(id);
    res.json(post);
});

//Post Request:
router.post("/", async (req,res) => {
    const post = req.body;
    await Employee.create(post); //posts the data for a employee inputted
    res.json(post);
});


module.exports = router;