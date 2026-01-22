var autoresModel = require("../models/autoresModel");

function listar(req, res) {
    autoresModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

var Caracteres = ['!', '@', '#', '$', '%', '&', '*', '(', ')']
var Numéricos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function cadastrar(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var nacionalidade  = req.body.nacionalidade
    var fkGeneroPrincipal = req.body.fkGeneroPrincipal

    for(var i = 0; i <= Caracteres.length; i++) {
    
            if(nome.includes(Caracteres[i]) || nome.includes(Numéricos[i])) {
                console.log(nome)
                res.status(400).send("O nome do autor não pode conter caracteres especiais nem numéricos!")
                return false;
            }
        }

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (sobrenome == undefined) {
        res.status(400).send("O sobrenome está indefinido!");
    } else if (nacionalidade == undefined) {
        res.status(400).send("A nacionalidade está indefinido!");
    } else if (fkGeneroPrincipal == undefined) {
        res.status(400).send("O gênero principal está indefinido!");
    } else {
        autoresModel.cadastrar(nome, sobrenome, nacionalidade, fkGeneroPrincipal)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar,
    cadastrar
}