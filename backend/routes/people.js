const express = require('express');

const Person = require("../models/person");

const router = express.Router();

router.post('' ,(req, res, next) => {
    const person= new Person({
        
        name: req.body.name,
        dateBirth: req.body.dateBirth,
        age: req.body.age,
        gender: req.body.age,
        countryOrigin: req.body.countryOrigin,
        language: req.body.countryOrgin,
        firstContactDate: req.body.firstContractDate,
        timeStamp: req.body.timeStamp
    });
    post.save().then(newPerson => {
        res.status(201).json({
            message: "person added successfully!",
            postId: newPerson._id
        });
    });
});

module.exports = router;