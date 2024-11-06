const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  birthDate: Date,
  street: String,
  city: String,
  state: String,
  zipCode: String,
  email: String,
  phone: String,
  linkedInProfile: String,
  resume: String,
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
