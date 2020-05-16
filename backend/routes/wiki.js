let express = require('express');
let router = express.Router();

let home_page = require('../controllers/index');
let generoController = require('../controllers/generoController');
let habilidadeController = require('../controllers/habilidadeController');
let especieController = require('../controllers/especieController');

// ROTA DA PAGINA INICIAL
router.get('/', home_page.index);

// ROTAS DE GENEROS

//get da pagina de criar genero
router.get('/genero/create', generoController.genero_create_get);

//post da pagina de criar genero
router.post('/genero/create', generoController.genero_create_post);

//get da pagina de deletar um genero
router.get('/genero/:id/delete', generoController.genero_delete_get);

//post da pagina de deletar um genero
router.post('/genero/:id/delete', generoController.genero_delete_post);

//get da pagina de atualizar um genero
router.get('/genero/:id/update', generoController.genero_update_get);

//post da pagina de atualizar um genero
router.post('/genero/:id/update', generoController.genero_update_post);

//get para retornar um genero
router.get('/genero/:id/', generoController.genero_detail);

//get para listar todos os generos
router.get('/generos', generoController.genero_list);

// ROTAS DE HABILIDADES

//get da pagina de criar habilidade
router.get('/habilidade/create', habilidadeController.habilidade_create_get);

//post da pagina de criar habilidade
router.post('/habilidade/create', habilidadeController.habilidade_create_post);

//get da pagina de deletar uma habilidade
router.get('/habilidade/:id/delete', habilidadeController.habilidade_delete_get);

//post da pagina de deletar uma habilidade
router.post('/habilidade/:id/delete', habilidadeController.habilidade_delete_post);

//get da pagina de atualizar uma habilidade
router.get('/habilidade/:id/update', habilidadeController.habilidade_update_get);

//post da pagina de atualizar uma habilidade
router.post('/habilidade/:id/update', habilidadeController.habilidade_update_post);

//get para retornar uma habilidade
router.get('/habilidade/:id/', habilidadeController.habilidade_detail);

//get para listar todos as habilidade
router.get('/habilidades', habilidadeController.habilidade_list);

// ROTAS DE ESPECIES

//get da pagina de criar especie
router.get('/especie/create', especieController.especie_create_get);

//post da pagina de criar especie
router.post('/especie/create', especieController.especie_create_post);

//get da pagina de deletar um especie
router.get('/especie/:id/delete', especieController.especie_delete_get);

//post da pagina de deletar um especie
router.post('/especie/:id/delete', especieController.especie_delete_post);

//get da pagina de atualizar um especie
router.get('/especie/:id/update', especieController.especie_update_get);

//post da pagina de atualizar um especie
router.post('/especie/:id/update', especieController.especie_update_post);

//get para retornar um especie
router.get('/especie/:id/', especieController.especie_detail);

//get para listar todos os especies
router.get('/especies', especieController.especie_list);

moudule.exports = router;