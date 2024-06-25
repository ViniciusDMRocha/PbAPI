const Cidade = require('../models/cidadeModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCidades = catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Cidade.find(queryObj);
    const cidades = await query;

    res.status(200).json({
        status: 'sucess',
        results: cidades.length,
        data: {
            cidades,
        },
    });
});

exports.getCidadeById = catchAsync(async (req, res, next) => {
    const cidade = await Cidade.findById(req.params.id);

    if (!cidade) {
        return next(new AppError('Nenhuma cidade encontrada com esse ID', 404));
    }

    res.status(200).json({
        status: 'sucess',
        data: {
            cidade,
        },
    });
});

exports.getCidadeByNome = catchAsync(async (req, res, next) => {
    const cidade = await Cidade.findOne({ slug: req.params.nome });

    if (!cidade) {
        return next(new AppError('Nenhuma cidade encontrada com esse Nome', 404));
    }

    res.status(200).json({
        status: 'sucess',
        data: {
            cidade,
        },
    });
});

exports.getCidadeByEstado = catchAsync(async (req, res, next) => {
    const cidades = await Cidade.find({ estado: req.params.estado });

    if (!cidades) {
        return next(new AppError('Nenhuma cidade encontrada com esse Estado', 404));
    }

    res.status(200).json({
        status: 'sucess',
        results: cidades.length,
        data: {
            cidades,
        },
    });
});

exports.createCidade = catchAsync(async (req, res, next) => {
    const neewCidade = await Cidade.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: neewCidade,
        },
    });
});

exports.updateCidade = catchAsync(async (req, res, next) => {
    const cidade = await Cidade.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!cidade) {
        return next(new AppError('Nenhum cidade encontrado com esse ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            cidade,
        },
    });
});

exports.deleteCidade = catchAsync(async (req, res, next) => {
    const cidade = await Cidade.findByIdAndDelete(req.params.id);

    if (!cidade) {
        return next(new AppError('Nenhuma cidade encontrado com esse ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});
