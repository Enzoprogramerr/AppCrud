var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/personas", controllers.listPersonas);
router.get('/agregar', controllers.getAgregar);
router.post("/agregar", controllers.postagregarDato); // método para agregar datos.
router.get('/edit/:id', controllers.getdatoItem);  // metodo get para solicitar datos.
router.post('/update/:id', controllers.postnuevoDato); // metodo para actualizar dato por medio de id.
router.get('/delete/:id', controllers.getborrarDato); // solicito por medio de "get" borrar con un identificador de objeto "id"
router.post('/delete/:id', controllers.postDeletePersona); // borro el dato
router.get('/buscar', controllers.buscarPersona); 
router.post('/resultados', controllers.buscarPersonaResultados);

module.exports = router;
