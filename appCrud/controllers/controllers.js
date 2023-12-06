var express = require('express');

const listPersonas = (req, res, next) => {
    const db = req.app.get("db");
    const query = "SELECT * from persona";
    db.all(query, function(err, rows){ // metodo para que corra la consulta //function toma dos parametros: manipulador de error, fila de las tablas.
        if (err){
          console.log(err);
          return;
        }
        res.render("personas", { personas: rows}); //dibujar la plantilla en el navegador por medio de "vista/personas.ejs" //Render toma: nombre de la plantilla y un objeto con info, a ese objeto le paso como valor las filas de datos.
    })
};

module.exports = {listPersonas};

const agregarDato = (req,res,next) => {
  const db = req.app.get("db"); //conexion a base de datos.
  const nombre = req.body.nombre //saco del form la info en la parte de nombre.
  const email = req.body.email; //saco del form la info en la parte de email.
  const query = "INSERT into persona(nombre, email) VALUES (?, ?)"; //agrego datos al form por medio de query.
  db.run(query, [nombre,email], function(err){ //hago funcionar la base de datos por medio de insertar datos(query) donde va a recibir un array de nombre y email.
    if (err){
      console.log(err);
      return;
    }
    res.redirect("/personas"); //en la respuesta me redirige a la url tabla personas.
  })
};
module.exports = {agregarDato};

const datoItem = (req, res, next) => {
    var db = req.app.get('db'); 
    var id = req.params.id; // toma el id
    db.get("SELECT * FROM persona WHERE id=?", id, function(err, row) {
      if (err) {
        console.error(err);
        return;
      }
      res.render('edit', {item: row}); // va a mostrar por navegador la fila del item consultado.
    });
};
module.exports = {datoItem};

const nuevoDato = (req, res, next) => {
    var db = req.app.get('db');
  var id = req.params.id;
  var nombre = req.body.nombre;
  var email = req.body.email;
  db.run("UPDATE persona SET nombre=? , email=? WHERE id=?", [nombre,email,id], function(err) {
    if (err) {
      console.log(err)
      return;
    }
    res.redirect('/personas');
  });
}; 
module.exports = {nuevoDato};

const borrarDato = (req, res, next) => {
    var db = req.app.get('db'); 
  var id = req.params.id;
  db.run("DELETE FROM persona WHERE id=?",id, function(err) {
    if (err) {
      console.log(err)
      return;
    }
    res.redirect('/personas');
  });
};
module.exports = {borrarDato};
