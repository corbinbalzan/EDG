const express = require("express");

const HT = require("../models/ht");

const router = express.Router();

router.post("", (req, res, next) => {
  const ht = new HT({
    name: req.body.name,
    lastDateService: req.body.lastDateService,
    dependents: req.body.dependents,
    typeOfIndustry: req.body.typeOfIndustry,
    continuedPresence: req.body.continuedPresence,
    immigrationStatus: req.body.immigrationStatus,
    investigation: req.body.investigation,
    otherFormsOfVictimization: req.body.otherFormsOfVictimization,
    housingSituationAtEnrollmentTime: req.body.housingSituationAtEnrollmentTime,
    goalsAtEnrollmentTime: req.body.goalsAtEnrollmentTime
  });
  ht.save().then(newHT => {
    res.status(201).json({
      message: "person added successfully!",
      htId: newHT._id
    });
  });
});

router.get("", (req, res, next) => {
  HT.find().then(documents => {
    res.status(200).json({
      message: "HT info fetched sucessfully!",
      ht: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  HT.findById(req.params.id).then(ht => {
    if (ht) {
      res.status(200).json(ht);
    } else {
      res.status(404).json({ message: "HT Person not found." });
    }
  });
});

module.exports = router;
