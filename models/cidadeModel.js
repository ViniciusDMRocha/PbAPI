const mongoose = require('mongoose');
const slugify = require('slugify');

const cidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        unique: true,
        required: [true, 'O nome da cidade precisa ser informado.'],
        trim: true,
    },
    estado: {
        type: String,
        required: [true, 'O estado da cidade precisa ser informado.'],
        trim: true,
    },
    slug: {
        type: String,
        select: false,
    },
});

cidadeSchema.pre('save', function (next) {
    this.slug = slugify(this.nome, { lower: true });
    next();
});

cidadeSchema.post('findOneAndUpdate', async function (doc) {
    this.slug = slugify(doc.nome, { lower: true });
    await doc.save();
});

const Cidade = mongoose.model('Cidade', cidadeSchema);

module.exports = Cidade;
