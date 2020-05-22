let Especie = require('../models/especie');

exports.especie_list = function (req, res, next) {
    Especie.find({}, 'nome genero habilidades')
        .populate('genero')
        .exec(function (err, list_especies) {
            if (err) { return next(err); }
            res.render('especie_list', { title: 'Lista de Espécies', especies_list: list_especies });
        });
}

exports.especie_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_detail: ' + req.params.id);
}

exports.especie_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_create_get');
}

exports.especie_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_create_post');
}

exports.especie_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_update_get');
}

exports.especie_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_update_post');
}

exports.especie_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_delete_get');
}

exports.especie_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: especie_delete_post');
}
