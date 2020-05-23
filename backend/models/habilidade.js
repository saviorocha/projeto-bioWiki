let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let HabilidadeSchema = new Schema({
    nome: { type: String, max: 100, required: true, unique: true },
    descricao: { type: String, max: 500, required: true },
    tipo: { type: String, enum: ['Ataque', 'Defesa', 'Suporte', 'Outro'], max: 50, required: true }
});

HabilidadeSchema
    .virtual('url')
    .get(function() {
        return '/wiki/' + this.nome;
    });

module.exports = mongoose.model('Habilidade', HabilidadeSchema);