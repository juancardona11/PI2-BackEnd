const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const professionalSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  pin:{
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: false,
    trim: true
  },
  qualification: {
    type: String,
    required: false,
    trim: true
  },
  city: {
    type: String,
    required: false,
    trim: true
  },
  eps: {
    type: String,
    required: false,
    trim: true
  },
  university: {
    type: String,
    required: false,
    trim: true
  },
  state: {
    type: String,
    required: false,
    trim: true
  },
  experience: {
    type: String,
    required: false,
    trim: true
  }, 
}, {
    timestamps: true
  });

module.exports = professionalSchema;