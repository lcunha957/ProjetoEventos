const Eventos_bd = require('../BD/eventos_bd');
var db = require('../../config/database');


class EventosControllers
{
    mostraEventos() {
        return function (req, res) {
            const eventoDB = new Eventos_bd(db);
            eventoDB.selecionaEvento(function (err, resultadosEvento) {
                eventoDB.selecionaHistoricoCarrinho(function (err, resultadosHistorico) {
                    var historico_c = resultadosHistorico[0].historico;
                    console.log('Acessou eventos...')
                    res.render('Eventos.ejs',{
                        eventos: resultadosEvento,
                        temHistorico: historico_c
                    })
                });
            });
        }
    }
    eventoNoHistorico() {
        return function(req,res) {
                const eventosDB = new Eventos_bd(db);
                eventosDB.insereEventoNoCarrinho(req.body)
            }
    }
}
module.exports = EventosControllers;