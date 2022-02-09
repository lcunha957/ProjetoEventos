const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  dialect: "mysql",
  database: "ProjetoEventosBD",
  operatorsAliases: false,
  port: 4800,
});
  
connection.connect(function(err){
if (err){
  console.error('erro de conexão com o banco de dados: ' + err.stack);
}
else {
  console.log('Banco de dados conectado com o ID: ' + connection.threadId);
 
}

});
module.exports = connection;
