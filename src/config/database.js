const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    dialect : "mysql",
    operatorsAliases: false,
    database: "ProjetoEventosBD"
  });
  
connection.connect(function(error){
if (error){
  console.log ("Banco de dados:" + database + "deu erro!" + error);
}
else {
  console.log ("Banco de dados:" + database + "conectado com sucesso!" );
}

});
module.exports = connection;
