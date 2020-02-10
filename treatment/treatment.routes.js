const Treatments = require('./treatment.controller');

module.exports = (router) => {
  router.post('/register',  Treatments.createUser);
 
}
