const express = require('express');
const cidadeController = require('../controllers/cidadeController');

const router = express.Router();

router.route('/').get(cidadeController.getAllCidades).post(cidadeController.createCidade);

router.route('/estado/:estado').get(cidadeController.getCidadeByEstado);

router.route('/nome/:nome').get(cidadeController.getCidadeByNome);

router
    .route('/:id')
    .get(cidadeController.getCidadeById)
    .patch(cidadeController.updateCidade)
    .delete(cidadeController.deleteCidade);

module.exports = router;
