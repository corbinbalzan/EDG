const express = require("express");

const HT = require("../models/dv");

const router = express.Router();

router.post("", (req, res, next) => {
  const dv = new DV({
    name: req.body.name,
    typeOfVictim: req.body.typeOfVictim,
    serviceProvided: req.body.serviceProvided
  });
  dv.save().then(newDV => {
    res.status(201).json({
      message: "person added successfully!",
      dvId: newDV._id
    });
  });
});

router.get("", (req, res, next) => {
  DV.find().then(documents => {
    res.status(200).json({
      message: "DV info fetched sucessfully!",
      dv: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  DV.findById(req.params.id).then(dv => {
    if (dv) {
      res.status(200).json(dv);
    } else {
      res.status(404).json({ message: "HT Person not found." });
    }
  });
});

module.exports = router;
