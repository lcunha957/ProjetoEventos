const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser");
const morgan = require('morgan');
const {sequelize} = require('./database');


app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
    extended: true,
})
);


const rotas = require("../app/rotas/rotas");

rotas(app);

app.use("/estatico", express.static("src/app/views/usuarios"));

app.get("/add-usuario", function(req,res){
res.send("Formulário para cadastrar usuários")
});

module.exports = app;
