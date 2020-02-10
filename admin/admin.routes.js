const Admins = require('./admin.controller');

module.exports = (router) => {
  router.post('/register',  Admins.createUser);
 
}
