const Professional = require('./profesional.controller.js');


module.exports = (router) => {
  router.post('/register',  Professional.createUser);

}
