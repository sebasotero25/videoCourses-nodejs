const { Sequelize } = require("sequelize");

// crear una instancia con parametros de configuración de nuestra base de datos
// un objeto de configuración --> credenciales de mi base de datos
const db = new Sequelize({
  database: "Videocourses",
  username: "postgres", 
  host: "localhost", 
  port: "5432",
  password: "root", 
  dialect: "postgres", 
  
});

module.exports = db;