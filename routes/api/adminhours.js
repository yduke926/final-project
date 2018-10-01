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


module.exports = router;