const Cliente = require('../models/clienteModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
// );

exports.getAllClientes = catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Cliente.find(queryObj);
    const clientes = await query;

    res.status(200).json({
        status: 'sucess',
        results: clientes.length,
        data: {
            clientes,
        },
    });
});

exports.getClienteByName = catchAsync(async (req, res, next) => {
    const cliente = await Cliente.findOne({ slug: req.params.nome });

    if (!cliente) {
        return next(new AppError('Nenhum cliente encontrado com esse nome', 404));
    }

    res.status(200).json({
        status: 'sucess',
        data: {
            cliente,
        },
    });
});

exports.getClienteById = catchAsync(async (req, res, next) => {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
        return next(new AppError('Nenhum cliente encontrado com esse ID', 404));
    }

    res.status(200).json({
        status: 'sucess',
        data: {
            cliente,
        },
    });
});

exports.createCliente = catchAsync(async (req, res, next) => {
    const newCliente = await Cliente.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: newCliente,
        },
    });
});

exports.updateCliente = catchAsync(async (req, res, next) => {
    const excludeFields = ['idade', 'cidade', 'sexo', 'dataDeNascimento'];
    excludeFields.forEach((el) => delete req.body[el]);

    const cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!cliente) {
        return next(new AppError('Nenhum cliente encontrado com esse ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            cliente,
        },
    });
});

exports.deleteCliente = catchAsync(async (req, res, next) => {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);

    if (!cliente) {
        return next(new AppError('Nenhum cliente encontrado com esse ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});
