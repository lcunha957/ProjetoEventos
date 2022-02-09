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
app.use('/caminho',express.static('src/app/views/css'));
app.use("/estatico", express.static("src/app/views"));
app.use('/caminhoImagem1',express.static('src/app/views/imagens'));
app.use('/caminhoImagem2',express.static('src/app/views/imagens'));
app.use('/caminhoImagem3',express.static('src/app/views/imagens'));
app.use('/caminhoImagem4',express.static('src/app/views/imagens'));
app.use('/caminhoImagem5',express.static('src/app/views/imagens'));
app.set("views", path.join(__dirname,'../app/views'));
app.set("view engine", "ejs");

// Para capturar os erros se houverem durante as rotas:
app.use((req, res, next) => {
    const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);
    };
    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };
    next();
});


module.exports = app;
