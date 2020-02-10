const Recommendations = require('./recommendation.controller');

module.exports = (router) => {
  router.post('/register',  Recommendations.createRecommendation);
 
}
