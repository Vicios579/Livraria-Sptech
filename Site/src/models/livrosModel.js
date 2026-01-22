var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        select 
livro.idLivro,
livro.titulo,
livro.precoCompra,
livro.precoVenda,
autor.nome as nomeAutor,
genero.nome as nomeGenero
 from livro join autor on autor.idAutor = livro.fkAutor join genero on genero.idGenero = livro.fkGenero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(titulo, fkAutor, fkGenero, precoCompra, precoVenda, review, quantidade) {

    var instrucaoSql = `
        INSERT INTO livro (titulo, fkAutor, fkGenero, precoCompra, precoVenda, review, quantidade) VALUES ('${titulo}', '${fkAutor}', '${fkGenero}', '${precoCompra}', '${precoVenda}', '${review}', '${quantidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoPrecoCompra, novoPrecoVenda, id) {

    var instrucaoSql = `
        UPDATE livro 
        SET precoCompra = '${novoPrecoCompra}', 
            precoVenda = '${novoPrecoVenda}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar,
    editar
}
