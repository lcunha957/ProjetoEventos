const UsuarioControlador = require('../controladores/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const EventosControlador = require('../controladores/eventos_controllers');
const eventosCont = new EventosControlador();

const HistoricoControlador = require('../controladores/historico_controllers');
const historicoCont = new HistoricoControlador();

module.exports = (app) => {

        app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /****************  ROTAS  ****************/

    app.get('/login', function(req,res) {
        res.render('Login.ejs');
        console.log('Acessou a página de login...');
    })
    
    app.get('/cadastrar', function(req,res) {
        res.render('Cadastro.ejs');
        console.log('Acessou  a página de cadastro...');
    })

    app.get('/', function(req,res) {
        res.render('Inicio.ejs');
        console.log('Acessou a página de início...');
    });
     

    app.get('/eventos', eventosCont.mostraEventos());
    
    app.get('/historico', historicoCont.exibeEventosCarrinho());

    app.get('/logout', historicoCont.excluirEventosDoHistorico());

    app.post('/insertEventosHistorico', eventosCont.eventoNoHistorico());

    app.post('/validaUsuarios', usuarioCont.validaAcessoUsuario());

    app.post('/insertUsuarios', usuarioCont.inserirNovoUsuario());
}





