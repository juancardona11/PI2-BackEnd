const Treatment = require('./treatment.dao.js');


exports.createTreatment = (req, res, next) => {
  const newTreatment = {
    name: req.body.name,
    description: req.body.description
  }

  Treatment.create(newTreatment, (err, user) => {
    if (err) return res.status(500).send('Server error');
    res.send({ message: "Tratamiento creado!"});
  });
}










