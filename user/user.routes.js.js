const Users = require('./user.controller.js');

module.exports = (router) => {
  router.post('/register',  Users.createUser);
}
