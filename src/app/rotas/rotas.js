const UsuarioControlador = require('../controladores/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const EventosControlador = require('../controladores/eventos_controllers');
const eventosCont = new EventosControlador();

const HistoricoControlador = require('../controladores/historico_controllers');
const historicoCont = new HistoricoControlador();

module.exports = (aplicacao) => {

        aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /****************  ROTAS  ****************/

    aplicacao.get('/login', function(req,res) {
        res.render('login.ejs');
        console.log('Acessou a página de login...');
    })
    
    aplicacao.get('/cadastrar', function(req,res) {
        res.render('cadastro.ejs');
        console.log('Acessou  a página de cadastro...');
    })

    app.get('/', function(req,res) {
        res.render('Inicio');
        console.log('Acessou a página de início...');
    });
     

    aplicacao.get('/eventos', eventosCont.mostraEventos());
    
    aplicacao.get('/historico', historicoCont.exibeEventosCarrinho());

    aplicacao.get('/logout', historicoCont.excluirEventosDoHistorico());

    aplicacao.post('/insertEventosHistorico', eventosCont.eventoNoHistorico());

    aplicacao.post('/validaUsuarios', usuarioCont.validaAcessoUsuario());

    aplicacao.post('/insertUsuarios', usuarioCont.inserirNovoUsuario());
}





