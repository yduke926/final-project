const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Studentreports = require('../models/studentreport');



router.get('/reports/:userId', (req, res) => {
    Studentreports.find({ userId: req.params.userId }, function(err, studentreports){
        if(err){
            console.log(err);
            (res.end())
        } else {
            //console.log(users);
            res.json(studentreports);
        }
    })
})
module.exports = router;