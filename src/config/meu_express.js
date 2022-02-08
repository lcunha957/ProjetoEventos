const express = require("express");
const app = express();
const exphbs  = require("express-handlebars");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const {sequelize} = require('./database');

var hbs = exphbs.create({ /* config */ });
app.engine ('handlebars', handlebars({defaultLayout: 'main'}));
app.set ('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
    extended: true,
})
);


const rotas = require("../app/rotas/rotas");

rotas(app);

app.use("/estatico", express.static("src/app/views/usuarios"));

app.use(methodOverride(function (req,res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
  var method = req.body._method;
  delete req.body._method;
  return method;
  }
}));

app.get("/add-usuario", function(req,res){
res.send("Formulário para cadastrar usuários")
});

module.exports = app;
