const mongoose = require('mongoose');
const userSchema = require('./user.model');

userSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  } 
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;