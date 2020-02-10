const Users = require('./user.controller');

module.exports = (router) => {
  router.post('/register',  Users.createUser);
}
