const User = require('../models/User');

exports.home = (req, res) => {
  User.find().exec((err, usuarios) => {
    console.log(usuarios);
    res.render('index', { datos: usuarios });
  });
};

exports.search = (req, res) => {
  // buscar por la query string
  User.findOne({ id: req.query.id }).exec((err, usuario) => {
    console.log(usuario);
    let dato = null;
    if (usuario) dato = [usuario];
    res.render('index', { datos: dato });
  });
};
