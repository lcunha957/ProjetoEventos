class Usuarios_bd
{

    constructor (db) {this._db= db;}

    selectUsuario(email,senha) {
        return new Promise((resolve,reject) => {
           var sqlConsUsuarios = " select * from cadastrousuario where email='" + email + "' and senha='" + senha + "'";
           console.log("Select montado = " + sqlConsUsuarios);
        this._db.query(sqlConsUsuarios, function (err,resultado) {
               if (resultado.length > 0) {
                   var dados = resultado.length;
                   resolve(dados);
               }
               else { 
                 return reject("O usuário NÃO foi localizado no nosso banco de dados");
               }
           })
        })
     }

     criaHistorico(){
        return new Promise((resolve,reject) => {
            var sqlConsUsuarios = "Insert into  historico (`qtdProduto`, `valorTotal`) VALUES (1,1)";
            this._db.query(sqlConsUsuarios, function (err,resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else { 
                  return reject('O histórico não foi inserido no banco de dados');
                }
            })
         })
    }

     selectUsuarioPorEmail(email, callback) {
        var sqlCons = "Select idUsuario from cadastrousuario where email='" + email + "'";
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )

}
     incluirUsuarios(usuario) {
       return new Promise((resolve,reject) => {
        var sqlInsUsuario = "Insert into cadastrousuario (cpf_cnpj, nome_completo, empresa_faculdade, email, senha) VALUES('" + usuario.cpf_cnpj + "','" + usuario.nome_completo + "','" + usuario.empresa_faculdade + "','" + usuario.email + "','" + usuario.senha + "');";
        console.log("INSERT MONTADO = " + sqlInsUsuario);
        this._db.query(sqlInsUsuario, function (err) {
            if (err) {
                console.log(erro);
                return reject('O usuário não pode ser incluído em nosso banco de dados');
            }
            else { 
                alert ('Usuário incluído com sucesso!');
                return resolve();  }
        }) 
    })
}

} 


module.exports = Usuarios_bd;