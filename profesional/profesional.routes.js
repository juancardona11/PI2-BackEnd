const Professional = require('./profesional.controller');


module.exports = (router) => {
  router.post('/register',  Professional.createUser);

}
