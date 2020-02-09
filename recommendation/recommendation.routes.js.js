const Recommendations = require('./recommendation.controller.js');

module.exports = (router) => {
  router.post('/register',  Recommendations.createRecommendation);
 
}
