let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let HabilidadeSchema = new Schema({
    nome: { type: String, max: 100, required: true },
    descricao: { type: String, max: 500, required: true },
    tipo: { type: String, enum: ['Ataque', 'Defesa', 'Suporte', 'Outro'], max: 50, required: true },
    especies: [{ type: Schema.Types.ObjectId, ref: 'Especie' }]
});

HabilidadeSchema
    .virtual('url')
    .get(function () {
        return '/wiki/' + this.nome.replace(' ', '_');
    });

module.exports = mongoose.model('Habilidade', HabilidadeSchema);