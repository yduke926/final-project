let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let User = require('../models/user');

router.post('/register', ((req, res, next) => {
  console.log(req.body);
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.setPassword(req.body.password);
  newUser.save((err) => {
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({token: newUser.generateJWT()})
    }
  })
}));

router.post('/login', ((req, res) => {
  User.findOne({email: req.body.email}, ((err, user) => {
    if(err) {
      res.sendStatus(500);
    } else if(user) {
      if(user.validatePassword(req.body.password)) {
        res.json({token: user.generateJWT()})
      } else {
        res.send('Incorrect Password')
      }
    } else {
      res.sendStatus(404);
    }
  }))
}))

router.get('/all', (req, res) => {
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

router.delete('/:id',(req,res)=>{
  console.log("Delete this Id",req.params);
  if(mongoose.Types.ObjectId.isValid(req.params.id)) {
      User.findOneAndDelete({_id: req.params.id})
        .then((docs)=>{
           if(docs) {
              res.send({"success":true,data:req.params.id})
           } else {
              res.send({"success":false,data:"no such user exist"});
           }
      }).catch((err)=>{
          res.send(err);
      })
    } else {
        res.send({"success":false,data:"please provide correct Id"});
    }
  })

module.exports = router;