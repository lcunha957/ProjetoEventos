const Usuarios_bd = require('../BD/usuarios_bd');
var db = require('../../config/database');

class UsuariosControllers
{
    inserirNovoUsuario() {
        return function(req,res) {
            const usuarioDB = new Usuarios_bd(db);
            usuarioDB.incluirUsuarios(req.body)
                .then(res.redirect('/Eventos'))
                .catch(erro => console.log(erro));
        }
    }
   
    validaAcessoUsuario()
    {
        return function(req,res) {
            const usuarioDB = new Usuarios_db(db);
            usuarioDB.selectUsuario(req.body.email,req.body.senha)
                .then (dados => {
                    if (dados > 0) {
                        usuarioDB.criaHistorico()
                        .then (dados => {
                            console.log('O histórico apareceu com sucesso');
                        })
                        .catch(erro => { 
                            console.log('O historico deu erro');
                        })
                        console.log('O usuário existe!');
                        res.redirect('/eventos');
                    }
                })  
                .catch(erro => { 
                    console.log("Select RESULTADO = " + erro);
                    console.log('Usuário inexistente!');
                    res.redirect('/cadastrar');
                })
        }
    } 


    
}
module.exports = UsuariosControllers;