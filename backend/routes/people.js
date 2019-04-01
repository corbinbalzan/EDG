const express = require("express");

const Person = require("../models/person");

const router = express.Router();

router.post("", (req, res, next) => {
  const person = new Person({
    name: req.body.name,
    dateBirth: req.body.dateBirth,
    age: req.body.age,
    gender: req.body.age,
    countryOrigin: req.body.countryOrigin,
    language: req.body.language,
    countryResidence: req.body.countryResidence,
    firstContactDate: req.body.firstContactDate,
    typeDvHt: req.body.typeDvHt
  });
  person.save().then(newPerson => {
    res.status(201).json({
      message: "person added successfully!",
      personId: newPerson._id
    });
  });
});

router.get("", (req, res, next) => {
  Person.find().then(documents => {
    res.status(200).json({
      message: "People fetched sucessfully!",
      people: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ message: "Person not found." });
    }
  });
});

module.exports = router;
