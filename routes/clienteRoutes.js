const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

router.route('/').get(clienteController.getAllClientes).post(clienteController.createCliente); // check /

router.route('/nome/:nome').get(clienteController.getClienteByName); // chech

router
    .route('/:id')
    .get(clienteController.getClienteById) // check
    .patch(clienteController.updateCliente) // check
    .delete(clienteController.deleteCliente); // check

module.exports = router;
