-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

-- CREATE DATABASE livrariaRecuperacao20261;

-- USE livrariaRecuperacao20261; 

-- CREATE TABLE autor (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50)
-- );

-- CREATE TABLE genero (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50)
-- );

-- CREATE TABLE livro (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(50),
--     fkAutor INT,
--     fkGenero INT,
--     precoCompra DOUBLE,
--     precoVenda DOUBLE,
--     CONSTRAINT fk_livro_autor FOREIGN KEY (fkAutor) REFERENCES autor(id),
--     CONSTRAINT fk_livro_genero FOREIGN KEY (fkGenero) REFERENCES genero(id)
-- );

CREATE DATABASE livraria;

USE livraria;

CREATE TABLE genero ( 
idGenero INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

CREATE TABLE autor (
idAutor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
Nacionalidade VARCHAR(45),
fkGeneroPrincipal INT,
	CONSTRAINT fkGeneroPrincipal
		FOREIGN KEY (fkGeneroPrincipal) REFERENCES genero(idGenero)
);

CREATE TABLE livro (
idLivro INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
fkAutor INT,
	CONSTRAINT fkAutor
		FOREIGN KEY (fkAutor) REFERENCES autor(idAutor),
fkGenero INT,
	CONSTRAINT fkGenero
		FOREIGN KEY (fkGenero) REFERENCES genero(idGenero),
preçoCompra DECIMAL(5,2),
preçoVenda DECIMAL(5,2),
review INT		
);

-- CREATE TABLE estoque (
-- idEstoque INT PRIMARY KEY AUTO_INCREMENT,
-- fkLivro INT,
-- 	CONSTRAINT fkLivro
-- 		FOREIGN KEY (fkLivro) REFERENCES livro(idLivro),
-- quantidade INT
-- ); 