#! /usr/bin/env node

//argumentos na linha de comando
let userArgs = process.argv.slice(2);

let async = require('async');
// let Habilidade = require('./models/habilidade');
let Genero = require('./models/genero');
let Especie = require('./models/especie');

let mongoose = require('mongoose');
let mongoDB = userArgs[0]; // mongodb url
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// let habilidades = []
let generos = []
let especies = []

function createGenero(nome, descricao, cb) {
    generoDetail = { nome: nome, descricao: descricao }
    let genero = new Genero(generoDetail);

    genero.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('Novo genero: ' + genero);
        generos.push(genero);
        cb(null, genero);
    });
}

function createEspecie(nome, genero, descricao, status, cb) {
    especieDetail = {
        nome: nome,
        genero: genero,
        descricao: descricao,
        status: status
    }
    let especie = new Especie(especieDetail);
    especie.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('Nova especie: ' + especie);
        especies.push(especie);
        cb(null, especie);
    });
}

function habilidadeCreate(nome, descricao, tipo, cb) {
    habDetail = { nome: nome, descricao: descricao, tipo: tipo }
    let hab = new Habilidade(habDetail);

    hab.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('Nova habilidade: ' + hab);
        habilidades.push(hab)
        cb(null, hab)
    });
}

function generoCreate(cb) {
    // executa cada funcao uma depois da outra (em serie)
    async.series([
        function (callback) {
            createGenero('Homo', 'Homo é o gênero que inclui automaticamente os humanos modernos (Homo sapiens sapiens) e espécies estreitamente relacionadas com eles.', callback);
        },
        function (callback) {
            createGenero('Glaucidium', 'Glaucidium é um gênero de coruja da família Strigidae. Popularmente são chamadas de caburés ou mochos.', callback);
        },
        function (callback) {
            createGenero('Felis', 'Felis é um gênero de mamíferos do grupo dos felídeos, constituído por seis espécies, incluindo o gato doméstico. ', callback);
        }
    ],
        cb);
}

// function habilidadeCreate(cb) {
//     // executa cada funcao uma depois da outra (em serie)
//     async.series([
//         function (callback) {
//             habilidadeCreate('', '', '', callback);
//         },
//         function (callback) {
//             habilidadeCreate('', '', '', callback);
//         },
//         function (callback) {
//             habilidadeCreate('', '', '', callback);
//         }
//     ],
//         cb);
// }

function especieCreate(cb) {
    // executa cada funcao uma depois da outra (em serie)
    async.series([
        function (callback) {
            createEspecie('sapiens', retrieve('Homo'), 'Humano (taxonomicamente Homo sapiens[2][3]), termo que deriva do latim "homem sábio",[4] ser humano, ser pessoa, gente ou homem, é a única espécie animal de primata bípede do género Homo ainda viva.', [10, 5, 1, 7, 4], callback);
        },
        function (callback) {
            createEspecie('passerinum', retrieve('Glaucidium'), 'O mocho-pigmeu (Glaucidium passerinum) é uma espécie de ave da família Strigidae.', [6, 4, 2, 8, 5], callback);
        },
        function (callback) {
            createEspecie('catus', retrieve('Felis'), 'O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico,[4] é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. ', [2, 1, 3, 1, 2], callback);
        }
    ],
        cb);
}

async function retrieve(genero) {
    const doc = await Genero.findOne({nome: genero});
    return Array.of(doc);
}


// let q = Genero
//     .find({}, 'nome descricao')
//     .exec(function (err, query_generos) {
//         if (err) { console.log('GENERO ERR: ' + err); }
//         console.log(query_generos);
//     });

// async.series([
//     generoCreate,
//     especieCreate
// ],
//     function (err, results) {
//         if (err) { console.log('FINAL ERR: ' + err); }
//         else { console.log('yay'); }
//         mongoose.connect.close();
//     }
// );
especieCreate(function (err, results) {
    if (err) { console.log('FINAL ERR: ' + err); }
});