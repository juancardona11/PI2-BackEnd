const User = require('./professional.dao');


exports.createUser = (req, res, next) => {
  const newUser = {
    userName: req.body.userName,
    password: req.body.password,
    pin: req.body.pin,
    specialization: req.body.specialization,
    qualification: req.body.qualification,
    city: req.body.city,
    eps: req.body.eps,
    university: req.body.university,
    experience: req.body.experience,
    state: req.body.state,
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('User Name exists');
    if (err) return res.status(500).send('Server error');
    res.send({ message: "Usuario creado!"});
  });
}










