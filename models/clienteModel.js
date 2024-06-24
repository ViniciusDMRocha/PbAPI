const mongoose = require('mongoose');
const slugify = require('slugify');
const AppError = require('../utils/appError');
const Cidade = require('./cidadeModel');

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Por favor nos informe seu nome completo.'],
    },
    sexo: {
        type: String,
        enum: ['masculino', 'feminino'],
        required: [true, 'Por favor nos informe seu sexo.'],
    },
    slug: {
        type: String,
        select: false,
    },
    dataDeNascimento: {
        type: Date,
        required: [true, 'Por favor nos sua data de nascimento.'],
    },
    idade: {
        type: Number,
        required: [true, 'Por favor nos sua idade.'],
    },
    cidade: {
        type: String,
        required: [true, 'Por favor informe o nome da cidade.'],
        trim: true,
    },
});

clienteSchema.pre('save', async function (next) {
    const cidade = await Cidade.find({ nome: this.cidade });
    if (cidade == 0) {
        next(new AppError('A cidade informada nao foi encontrada, cadastre-a primeiro', 400));
    }
    next();
});

clienteSchema.pre('save', function (next) {
    this.slug = slugify(this.nome, { lower: true });
    next();
});

clienteSchema.post('findOneAndUpdate', async function (doc) {
    this.slug = slugify(doc.nome, { lower: true });
    await doc.save();
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
