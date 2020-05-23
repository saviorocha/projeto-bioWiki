let Genero = require('../models/genero');

exports.genero_list = function (req, res, next) {
    Genero.find({}, 'nome')
        .exec(function (err, list_genero) {
            if (err) { return next(err); }
            res.render('genero_list', { title: 'Lista de Gêneros', genero_list: list_genero });
        });
}

exports.genero_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_detail');
}

exports.genero_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_create_get');
}

exports.genero_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_create_post');
}

exports.genero_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_update_get');
}

exports.genero_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_update_post');
}

exports.genero_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_delete_get');
}

exports.genero_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genero_delete_post');
}
