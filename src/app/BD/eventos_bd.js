class Eventos_bd {
    constructor(db){ this._db = db; }
    insereEventoNoCarrinho(evento) {
        var sqlCons = "INSERT INTO historico (idUsu, idEvnt, foto_Evnt, nome_Evnt, preco_evnt, qtd_ing) VALUES ('" + evento.idUsuario + "','" + evento.id_evento +  "','" + evento.foto_Evnt + "','" + evento.nome_Evnt + "','" + evento.preco_Evnt + "','" + evento.qtd_ing + "')";
        this._db.query(sqlCons, function (err) {
            if (err) {
                console.log(err);
                return reject('A inserção no carrinho deu erro!');
            }
            else { 
                console.log("A inserção no carrinho foi feita com sucesso!");
            }
        })
    }

    selecionaEvento(callback) {
        var sqlCons = 'Select id_evento, foto_evento, nome_evento, descricao_evento, preco_evento, ingressos, quantidade_ing from eventos';
        this._db.query(
            sqlCons,
            (err, resultados) =>
                callback(err, resultados)
        )
    }

    selecionaEventoDoCarrinho(callback) {
        var sqlCons = 'Select g.id_evento, g.foto_evento, g.nome_evento, g.descricao_evento, g.preco_evento, j.qtd_ing, (g.preco_evento * j.qtd_ing) as totalDoEvento from eventos g inner join historico j ON c.idEvnt = p.id_evento';
        this._db.query(
            sqlCons,
            (err, resultados) =>
                callback(err, resultados)
        )
    }

    selecionaHistoricoCarrinho(callback){
        var sqlCons = 'Select sum(idHist) as carrinho from historico';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }

    deletaHistorico(callback) {
        console.log('Apagando a compra')
        var sqlCons = 'Delete idHist from historico';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }

             atualizaEventos(evento){
        return new Promise((resolve, reject) => {
        var sqlAtualiza = "Update eventos set foto_evento='" + evento.foto_Evnt +
                    "', nome_evento='" + evento.nome_Evnt +
                    "', descricao_evento='" + evento.descricao_evento + "', preco_evento='" +
                    evento.preco_Evnt + "', ingressos = '" + evento.ingresso  +  "' where id_evento=" + evento.id_evento;
            console.log(sqlAtualiza);
            this._db.query(sqlAtualiza, function (erro) {
            if (erro) {
              console.log(erro);
              return reject('Atualização dos dados do evento NÃO foi concluída!');
            }
          resolve();
        });
      });
    }

}


module.exports = Eventos_bd;