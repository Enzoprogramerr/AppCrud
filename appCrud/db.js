const mysql = require('mysql2') // Cargo el paquete que instalé

const db = mysql.createConnection({  //Conexion al servidor
    //host: 'localhost',
    host: 'mysql',
    user: 'root',
    password: '42384942',
});

db.connect((err) => {  //Conectar al servidor
    if (err){
        console.log("Error en la conexion al server");
        return;
    }
});

db.query("CREATE DATABASE IF NOT EXISTS cruddb2", (err) => {  //Verificar si existe la base de datos.
    if (err) {
    console.log("Error al crear la base de datos");
        return;
    }
    console.log("DB creada o ya existente")
});


db.query("USE cruddb2", (err) => {  //Seleccionar base de datos.
    if (err) {
        console.log("Error al seleccionar la DB");
            return;
        }
        console.log("Conexión exitosa");
});

const createTableOficina =  `
    CREATE TABLE  IF NOT EXISTS oficina (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        denominacion VARCHAR(255)
    )`;

// Verificar si existe la tabla persona, sino crear una.
const createTableSQL =  `
    CREATE TABLE  IF NOT EXISTS persona (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        nombre VARCHAR(255),
        email varchar(255),
        oficina_id INT,
        FOREIGN KEY (oficina_id) REFERENCES oficina(id)
    )`;
db.query(createTableOficina, (err) => {
    if (err) {
        console.log("Error al crear la tabla Oficina");
            return;
            }
});

db.query(createTableSQL, (err) => {
    if (err) {
        console.log("Error al crear la tabla Persona");
            return;
        }
});



module.exports = db // para que sea visible desde afuera