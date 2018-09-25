const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AdminSchema = mongoose.Schema({
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
student_hours:{
    hours_remaining:Number,
    hours_completed:Number
  },
  specialty: {
    type: String,
    required: true,
  }
});
const Admin = mongoose.model('Admin', AdminSchema);
// exporting js from one file to another
module.exports = {Admin};