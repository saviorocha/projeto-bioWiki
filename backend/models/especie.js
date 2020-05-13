let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let EspecieSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    genero: { type: Schema.Types.ObjectId, ref: 'Genero', max: 100, required: true },
    descricao: { type: String, max: 500, required: true },
    status: { type: [Number], max: 5, min: 5 }
});

EspecieSchema
    .virtual('nome_cientifico')
    .get(function () {
        return this.genero.nome + ' ' + this.nome;
    });

EspecieSchema
    .virtual('url')
    .get(function () {
        return '/inicio/especie/' + this.nome_cientifico.trim();
    });

module.exports = mongoose.model('Especie', EspecieSchema);
