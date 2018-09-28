let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StudentreportSchema = new mongoose.Schema({
    userId: String,
    // firstName: String,
    // lastName: String,
    date: Date,
    year: String,
    specialty: String,
    report: String
});

let Studentreport = mongoose.model('Studentreport', StudentreportSchema);
module.exports = Studentreport;

