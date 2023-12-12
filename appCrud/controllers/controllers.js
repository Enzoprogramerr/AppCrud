var express = require('express');

const listPersonas = (req, res, next) => {
    const db = req.app.get("db");
    const query = "SELECT * from persona";
    db.query(query, function(err, rows){ // metodo para que corra la consulta //function toma dos parametros: manipulador de error, fila de las tablas.
        if (err){
          console.log(err);
          return;
        }
        res.render("personas", { personas: rows, title:"Personas"}); //dibujar la plantilla en el navegador por medio de "vista/personas.ejs" //Render toma: nombre de la plantilla y un objeto con info, a ese objeto le paso como valor las filas de datos.
    })
};

const getAgregar = (req, res, next) => { //ruta para get agregar.
  res.render('agregar',  { title: "Agregar" });
};

const postagregarDato = (req,res,next) => {
  const db = req.app.get("db"); //conexion a base de datos.
  const nombre = req.body.nombre //saco del form la info en la parte de nombre.
  const email = req.body.email; //saco del form la info en la parte de email.
  const query = "INSERT into persona(nombre, email) VALUES (?, ?)"; //agrego datos al form por medio de query.
  db.query(query, [nombre,email], function(err){ //hago funcionar la base de datos por medio de insertar datos(query) donde va a recibir un array de nombre y email.
    if (err){
      console.log(err);
      return;
    }
    res.redirect("/personas"); //en la respuesta me redirige a la url tabla personas.
  })
};


const getdatoItem = (req, res, next) => {
    var db = req.app.get('db'); 
    var id = req.params.id; // toma el id
    db.query("SELECT * FROM persona WHERE id=?", [id], function(err, rows) {
      if (err) {
        console.error(err);
        return;
      }
      res.render('edit', {item: rows[0], title:"Editar"}); // va a mostrar por navegador la fila del item consultado.
    });
};


const postnuevoDato = (req, res, next) => {
  var db = req.app.get('db');
  var id = req.params.id;
  var nombre = req.body.nombre;
  var email = req.body.email;
  db.query("UPDATE persona SET nombre=? , email=? WHERE id=?", [nombre,email,id], function(err) {
    if (err) {
      console.log(err)
      return;
    }
    res.redirect('/personas');
  });
}; 

const getborrarDato = (req, res, next) => {
  var db = req.app.get('db'); 
  var id = req.params.id;
  db.query("DELETE FROM persona WHERE id=?",id, function(err) {
    if (err) {
      console.log(err)
      return;
    }
    res.redirect('/personas');
  });
};

const postDeletePersona = function(req, res,next) {
  var db = req.app.get('db');
  var id = req.params.id;
  db.query("DELETE FROM persona WHERE id=?", id, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    res.redirect('/personas');
  });
}

const buscarPersona = (req, res, next) => {
  res.render('busqueda', {title:"Buscar"});
};

const buscarPersonaResultados = (req, res,next) => {
  const db = req.app.get("db");
  const keyword = req.body.keyword;
  const query = 'SELECT * FROM persona WHERE nombre LIKE ?';
  db.query(query, [`%${keyword}%`], (err, rows) => {         // query para hacer una busqueda con la palabra "keyword"
      if (err) throw err;
      res.render('resultados', {personas:rows, title: "Resultados" })
  })
};

module.exports = {listPersonas, 
  getAgregar,
  postagregarDato,
  postnuevoDato,
  getborrarDato,
  getdatoItem,
  postDeletePersona,
  buscarPersona,
  buscarPersonaResultados};
