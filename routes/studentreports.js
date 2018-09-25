let express = require("express");
let mongoose = require("mongoose");
let router = express.Router();
let Studentreport = require('../models/studentreport');
let passport = require("passport");

router.post("/", (req, res) => {
    console.log(req.headers.authorization);
  let authToken = req.headers.authorization.split(' ')[1];
  console.log(authToken);

  let buff = new Buffer(authToken.split(".")[1], "base64");
  let decoded = buff.toString("ascii");
  console.log(decoded);
  let payload = authToken ? JSON.parse(decoded) : null;

  let newStudentreport = new Studentreport();
  newStudentreport.date = new Date();
  newStudentreport.year = req.body.year;
  newStudentreport.report = req.body.reportText;
  newStudentreport.specialty = req.body.specialty;
  newStudentreport.userId = payload.id;
  
  console.log(newStudentreport);
  newStudentreport.save(err => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get("/:id", (req, res) => {
  Studentreport.find({ userId: req.params.id }).then(Studentreport => {
    res.json(Studentreport);
  });
});

router.put("/:id", (req, res) => {
  Studentreport.findById(req.params.id, (err, studentreport) => {
    if (err) {
      res.send(err);
    } else {
      studentreport.description = req.body.newStudentreport;
      studentreport.save(err => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  Studentreport.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
