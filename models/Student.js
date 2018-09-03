const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const StudentSchema = mongoose.Schema({
  student_Id:{
      type: Number,
      required:true,
      unique: true
  },  
  student_first_name: {
    type: String,
    required: true
  },

  student_last_name: {
    type: String,
    required: true
  },
  email: {type: String},
  student_password: {
  	type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true,
  }
});

const Student = mongoose.model('Student', StudentSchema);

// exporting js from one file to another
module.exports = {Student};