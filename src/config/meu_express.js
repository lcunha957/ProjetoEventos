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
app.use("/imagem",express.static("src/app/views/imagens"));
app.set("views", path.join(__dirname,'../app/views'));
app.set("view engine", "ejs");


module.exports = app;
