let express = require('express');
let mongoose = require('mongoose');
let studentRouter = express.Router();
let Student = require('../models/student');
studentRouter.get('/load', ((req, res) => {
Student.find({},function(err,students){
    if (err){
        console.log(err);
    }
    else
    {
        console.log(students);
        res.json(students);
    }
})
}))
studentRouter.delete('/:id',(req,res)=>{
console.log("Delete this Id",req.params)
if(mongoose.Types.ObjectId.isValid(req.params.id)) {
    Student.findOneAndDelete({_id: req.params.id})
      .then((docs)=>{
         if(docs) {
            res.redirect('/students');
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
module.exports = studentRouter;