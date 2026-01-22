var database = require("../database/config");

function listar() {
    
    var instrucaoSql = `
        SELECT 
            * 
        FROM autor;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, sobrenome, nacionalidade, fkGeneroPrincipal) {
    
    var instrucaoSql = `
        INSERT INTO autor (nome, sobrenome, nacionalidade, fkGeneroPrincipal) VALUES ('${nome}', '${sobrenome}', '${nacionalidade}', '${fkGeneroPrincipal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar
}
