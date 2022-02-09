const Eventos_bd = require('../BD/eventos_bd');
var db = require('../../config/database');

class CarrinhoControllers
{
    exibeEventosCarrinho() {
        return function (req, res) {
            const eventoDB = new Eventos_bd(db);
            eventoDB.selecionaEventoDoCarrinho(function (error, resultadosEvento) {
                eventoDB.selecionaEvento(function (error, resultadosHistorico) {
                    var historico_c = resultadosHistorico[0].historico;
                    var valorTotalP = 0;
                    var valorTotalF = 0;
                    for(var i = 0; i<resultadosEvento.length; i++){
                        valorTotalP = valorTotalP + resultadosEvento[i].preco_evento;
                        valorTotalF = valorTotalF + resultadosEvento[i].totalDoEvento;
                    }
                    console.log('Acessou historico logout...')
                    res.render('historico.ejs',{
                        produtosSelecionados: resultadosEvento,
                        valorTotalF: valorTotalF,
                        temHistorico: historico_c
                    })
                });
            });
        }
    }
    excluirEventosDoHistorico() {
        return function (req, res) {
            const eventoDB = new Eventos_bd(db);
            eventoDB.deletaHistorico(function (error, resultadosEvento) {
            eventoDB. selecionaHistoricoCarrinho(function (error, resultadosHistorico) {
                        var historico_c = resultadosHistorico[0].historico;
                        res.render('historico.ejs',{
                            produtosSelecionados: resultadosEvento,
                            valorTotalF: 0,
                            temHistorico: historico_c 
                        })
                    });
                });
            };
        }
    }

module.exports = HistoricoControllers; 