const mongoose = require('mongoose');
const treatmentSchema = require('./treatment.model');

treatmentSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  } 
}

const treatmentModel = mongoose.model('Treatment', treatmentSchema);
module.exports = treatmentModel;