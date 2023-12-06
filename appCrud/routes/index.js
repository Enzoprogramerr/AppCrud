var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/personas", controllers.listPersonas);

router.get('/agregar', function(req, res, next) { //ruta para get agregar.
  res.render('agregar', {});
});

router.post("/agregar", controllers.agregarDato); // método para agregar datos.

router.get('/edit/:id', controllers.datoItem);  // metodo get para solicitar datos.

router.post('/update/:id', controllers.nuevoDato); // metodo para actualizar dato por medio de id.

router.get('/delete/:id', controllers.borrarDato); // solicito por medio de "get" borrar con un identificador de objeto "id"
  

module.exports = router;
