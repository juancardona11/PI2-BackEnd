const Treatments = require('./treatment.controller.js');

module.exports = (router) => {
  router.post('/register',  Treatments.createUser);
 
}
