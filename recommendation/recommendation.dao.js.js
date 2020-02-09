const mongoose = require('mongoose');
const recommendationSchema = require('./recommendation.model.js');

recommendationSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  } 
}

const recommendationModel = mongoose.model('Recommendation', recommendationSchema);
module.exports = recommendationModel;