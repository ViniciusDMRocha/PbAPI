const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Cliente = require('../models/clienteModel');
const Cidade = require('../models/cidadeModel');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
    console.log('DB conectado com sucesso');
});

const clientes = JSON.parse(fs.readFileSync(`${__dirname}/clientes.json`, 'utf-8'));
const cidades = JSON.parse(fs.readFileSync(`${__dirname}/cidades.json`, 'utf-8'));

const importData = async () => {
    try {
        await Cidade.create(cidades);
        await Cliente.create(clientes);
        console.log('Dados carregados com sucesso!.');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

importData();
