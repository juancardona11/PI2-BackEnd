const Recommendation = require('./recommendation.dao');


exports.createRecommendation = (req, res, next) => {
  const newRecommendation = {
    name: req.body.name,
    text: req.body.text,
    user: req.body.user,
    doctor: req.body.doctor
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('Recommendation exists');
    if (err) return res.status(500).send('Server error');
    res.send({ message: "Recomendación creada!"});
  });
}










