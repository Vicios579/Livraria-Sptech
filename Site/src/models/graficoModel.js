var database = require("../database/config");

function caros() {
    
    var instrucaoSql = `
        SELECT l.fkAutor, 
        a.nome 
        FROM livro AS l
        JOIN autor AS a 
        ON l.fkAutor = a.idAutor
        ORDER BY precoVenda DESC LIMIT 3; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidades() {
    
    var instrucaoSql = `
        SELECT g.nome, 
        l.quantidade 
        FROM genero AS g
        JOIN livro AS l 
        ON g.idGenero = l.fkGenero
        ORDER BY quantidade DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function todos() {
    
    var instrucaoSql = `
        SELECT g.nome, 
        l.quantidade 
        FROM genero AS g
        JOIN livro AS l 
        ON g.idGenero = l.fkGenero
        ORDER BY g.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    caros,
    quantidades,
    todos
}
