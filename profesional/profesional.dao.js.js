const mongoose = require('mongoose');
const professionalSchema = require('./profesional.model.js');

professionalSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  } 
}

const professionalModel = mongoose.model('Professional', professionalSchema);
module.exports = professionalModel;