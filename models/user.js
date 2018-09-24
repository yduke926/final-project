let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
  name: String,
  email : String, 
  passwordHash : String,
  salt: String,
  specialtyOb: {type:String, default: 'Obstetrics'},
  specialtyOp: {type:String, default: 'Surgery'},
  specialtyFM: {type:String, default: 'Family Medicine'},
  specialtyPed: {type: String, default: 'Pediatrics'},
  specialtyObhours: {
    current: {type:Number, default: 0},
    target: {type: Number, default: 50}
  },
  specialtyFmhours: {
    current: {type:Number, default: 0},
    target: {type: Number, default: 50}
  },
  specialtyOphours: {
    current: {type:Number, default: 0},
    target: {type: Number, default: 50}
  },
  specialtyPedhours: {
    current: {type:Number, default: 0},
    target: {type: Number, default: 50}
  }
});

UserSchema.method("setPassword", function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
});

UserSchema.method("validatePassword", function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
  return (hash === this.passwordHash);
});

UserSchema.method("generateJWT", function(){
  return jwt.sign({
    id:this._id,
    email: this.email,
  }, 'SecretKey');
});

let User = mongoose.model('User', UserSchema);
module.exports = User;

