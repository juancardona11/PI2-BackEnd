const User = require('./user.dao.js');


exports.createUser = (req, res, next) => {
  const newUser = {
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('User Name exists');
    if (err) return res.status(500).send('Server error');
    res.send({ message: "Usuario creado!"});
  });
}










