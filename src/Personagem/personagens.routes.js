const router = require('express').Router();
const personagemController = require('./personagem.controller');

router.post('/', personagemController.createPersonagemrController);
router.get('/', personagemController.findAllPersonagensControler);
router.get(
  '/personagem/:id',
  personagemController.findByIdPersonagemController,
);
router.put('/update/:id', personagemController.updatePersonagemController);
router.delete('/delete/:id', personagemController.deletePersonagemController);

module.exports = router;
