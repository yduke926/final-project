const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const StudentSpecialitySchema = mongoose.Schema({
  student_Id: {
    type: String,
    required: true, 
    unique: true
    
  },
 SpecialityCode: {
    type: String,
    required: true,
  
  }
  
});

const  StudentSpeciality = mongoose.model('StudentSpeciality',StudentSpecialitySchema);

// exporting js from one file to another
module.exports =  {StudentSpeciality};