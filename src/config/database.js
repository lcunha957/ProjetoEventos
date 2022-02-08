const mysql = require("mysql");
const Sequelize = require ("sequelize");

const sequelize = new Sequelize('database', 'username', 'password', {
    host: "localhost",
    dialect : "mysql",
    operatorsAliases: false,
    password: "listagemeventos",
    database: "listagemeventos"
  });
  
  sequelize.authenticate().then(function(){
        console.log("CONEXÃO com banco de dados listagemeventos OK!");
      }).catch(function(error){
        console.log("Erro na CONEXÃO com o banco de dados listagemeventos!"+ error);
  });

connection.query("SELECT * from CadastroUsuario", function (err, rows, fields) {
  if (err) {
    console.log("Resultado:", rows);
  } else {
    console.log("Erro ao realizar a consulta");
  }
});
module.exports = connection;
