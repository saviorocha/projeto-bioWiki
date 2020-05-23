let Habilidade = require('../models/habilidade');

exports.habilidade_list = function (req, res) {
    Habilidade.find({}, 'nome')
        .exec(function (err, list_habilidade) {
            if (err) { return next(err); }
            res.render('habilidade_list', {title: 'Lista de habilidades', habilidade_list: list_habilidade});
        });
}

exports.habilidade_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_detail: ');
}

exports.habilidade_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_create_get');
}

exports.habilidade_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_create_post');
}

exports.habilidade_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_update_get');
}

exports.habilidade_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_update_post');
}

exports.habilidade_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_delete_get');
}

exports.habilidade_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: habilidade_delete_post');
}
