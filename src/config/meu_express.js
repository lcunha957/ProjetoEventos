const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require ("path");

app.use(
bodyParser.urlencoded({
    extended: true,
})
);

const rotas = require("../app/rotas/rotas");
rotas(app);

app.use("/estatico", express.static("src/app/views"));
app.use('/caminhoImagem1',express.static('src/app/views/imagens'));
app.use('/caminhoImagem2',express.static('src/app/views/imagens'));
app.use('/caminhoImagem3',express.static('src/app/views/imagens'));
app.use('/caminhoImagem4',express.static('src/app/views/imagens'));
app.use('/caminhoImagem5',express.static('src/app/views/imagens'));
app.set("views", path.join(__dirname,'../app/views'));
app.set("view engine", "ejs");


module.exports = app;
