let Especie = require('../models/especie');
let Genero = require('../models/genero');
let Habilidade = require('../models/habilidade');

let async = require('async');

exports.index = function (req, res) {
    async.parallel({
        especie_count: function (callback) {
            Especie.countDocuments({}, callback);
        },
        genero_count: function (callback) {
            Genero.countDocuments({}, callback);
        },
        habilidade_count: function (callback) {
            Habilidade.countDocuments({}, callback);
        }
    }, function (err, results) {
        res.render('index', { title: 'Página Inicial', error: err, data: results });
    });
}