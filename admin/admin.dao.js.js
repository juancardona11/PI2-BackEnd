const mongoose = require('mongoose');
const adminSchema = require('./admin.model.js');

adminSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  } 
}

const adminModel = mongoose.model('Administrator', adminSchema);
module.exports = adminModel;