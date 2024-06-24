const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const clienteRouter = require('./routes/clienteRoutes');
const cidadeRouter = require('./routes/cidadeRoutes');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

app.use('/api/v1/cidades', cidadeRouter);
app.use('/api/v1/clientes', clienteRouter);

app.all('*', (req, res, next) => {
    next(
        new AppError(`Não foi possivel encontrar o endereço ${req.originalUrl} neste server`, 404),
    );
});

app.use(globalErrorHandler);

module.exports = app;
