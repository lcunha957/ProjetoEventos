class Usuarios_bd
{

    constructor (db) {this._db= db;}

    selectUsuario(email,senha) {
        return new Promise((resolve,reject) => {
           var sqlConsUsuarios = " select * from cadastrousuario where email='" + email + "' and senha='" + senha + "'";
           console.log("Select montado = " + sqlConsUsuarios);
        this._db.query(sqlConsUsuarios, function (erro,resultado) {
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
        this._db.query(sqlInsUsuario, function (erro) {
            if (erro) {
                console.log(erro);
                return reject('O usuário não pode ser incluído em nosso banco de dados');
            }
            else { return resolve();  }
        }) 
    })
}


}