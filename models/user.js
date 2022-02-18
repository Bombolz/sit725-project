var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var userSchema = new Schema({
    name:  String,
    email: String
  },{
    collection: 'User'
  });

var User = module.exports  = mongoose.model('User', userSchema);