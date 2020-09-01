const User = require('../models/User');

exports.home = (req, res) => {
  User.findOne({ name: 'Juan' }).exec((err, usuario) => {
    console.log(usuario);
    res.render('index', { titulo: 'Mi primer app con Pug', datos: usuario });
  });
};
