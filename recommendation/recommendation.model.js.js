const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const recommendationSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true,
    trim: true
  },
  doctor: {
    type: String,
    required: false,
    trim: true
  }, 
}, {
    timestamps: true
  });

module.exports = recommendationSchema;