let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GeneroSchema = new Schema({
    // I declared a schema property as unique but I can still save duplicates: https://mongoosejs.com/docs/faq.html
    nome: { type: String, required: true, max: 100, unique: true },
    descricao: { type: String, max: 500, required: true }
});

GeneroSchema
    .virtual('url')
    .get(function () {
        return '/inicio/genero/' + this.nome;
    });

module.exports = mongoose.model('Genero', GeneroSchema);