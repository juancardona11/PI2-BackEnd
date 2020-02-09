const Admins = require('./admin.controller.js');

module.exports = (router) => {
  router.post('/register',  Admins.createUser);
 
}
