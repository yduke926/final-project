const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');

router.post('/', (req, res) => {
    User.findOneAndUpdate({_id: req.body.userId}, { $inc: { ['specialty' + req.body.specialty + 'hours.current']: (parseInt(req.body.hours) || 0) }}, 
        function(err) {
            if(err) {
                console.log(err);
                res.sendStatus(500);
            }else {
                res.end();
            }
        }
    );
    res.end();
});

router.get('/load-users', (req, res) => {
    User.find({}, function(err, users){
        if(err){
            console.log(err);
            (res.end())
        } else {
            //console.log(users);
            res.json(users);
        }
    })
})


module.exports = router;