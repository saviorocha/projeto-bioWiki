let Genero = require('../models/genero');
let Especie = require('../models/especie');
let async = require('async');

exports.genero_list = function (req, res, next) {
    Genero.find({}, 'nome')
        .exec(function (err, list_genero) {
            if (err) { return next(err); }
            res.render('genero_list', { title: 'Lista de Gêneros', genero_list: list_genero });
        });
}

//tá dando erro nessa caralha
exports.genero_detail = function (req, res) {
    
    async.parallel({
        genero: function (callback) {
            Genero.findById(req.params.id)
                .exec(callback);
        },
        genero_especie: function (callback) {
            Especie.find({ 'genero': req.params.id })
                .exec(callback);
        }
    }, function (err, results) {
        if (err) { return next(err); }
        if (results == null) {
            let err = new Error('Gênero não encontrado');
            err.status = 404;
            return next(err); // propaga o erro até o error handler do app.js
        }
        res.render('genero_detail', { title: 'Detalhe do Gênero', genero: results.genero, genero_especie: results.genero_especie });// ambos requests tiveram sucesso, renderiza a pagina
    });
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
