# Para usar em conjunto com o XAMPP, sem usar o ambiente Docker

create database ProjetoEventosBD

create table CadastroUsuario (
idUsuario INT NOT NULL AUTO_INCREMENT, 
cpf_cnpj varchar(25) not null,
nome_completo varchar(50) not null,
empresa_faculdade varchar(100) not null,
email varchar(50) not null,
senha varchar(10) not null,
PRIMARY KEY (idUsuario)
);


create table Eventos (
id_evento varchar (10) not null, 
foto_evento varchar(100) not null,
nome_evento varchar (100) not null,
descricao_evento varchar (500) not null,
preco_evento int  not null,
ingressos int not null,
quantidade_ing int,
PRIMARY KEY (id_evento)
);

create table Historico (
idHist int NOT NULL AUTO_INCREMENT, 
idUsu int not null,
idEvnt varchar(10) not null, 
foto_Evnt varchar(100) not null,
nome_Evnt varchar(100) not null,
preco_Evnt int not null,
qtd_ing int not null,
valor_total int not null,
data_matricula datetime not null,
FOREIGN KEY (idUsu) references CadastroUsuario (idUsuario),
FOREIGN KEY (idEvnt) references Eventos (id_evento),
PRIMARY KEY (idHist)
);


INSERT INTO CadastroUsuario VALUES 
(1,'123.456.789-02', 'Marcilene Soares', 'Universidade Federal de Alfenas', 'marcilene_soares@yahoo.com.br','ght56125'),
(2,'15.604.300/0001-57', ' Roberto Pereira Drummond', 'Terra Brasil ME',  'rpdrummond@terrabrasil.com.br', 'rkes2092'),
(3,'741.722.010-08', ' Andressa Munhoz Cavalcante', ' Universidade Paulista', 'andressa_cavalc@hotmail.com', 'abacate023'),
(4,'43.009.181/0001-20', ' Daniele Ferreira Diniz', ' Oticas Diniz S/A', 'danielediniz2@oticasdiniz.br', 'tgp0e43'),
(5,'561.742.600-11', 'Lunara Morena Cunha', 'Colégio Técnico de Campinas', 'cunhalunara@gmail.com', 'fpav40234');

INSERT INTO Eventos VALUES 
('01Phy', 'phyton.png','Treinamento de Phyton', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem Phyton', 390.00, 500, null),
('02Del', 'delphi.jpeg','Treinamento de Delphi', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem Delphi', 450.00, 300, null),
('03TyS','typescript.jpg','Treinamento de TypeScript', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem TypeScript', 550.00, 400, null),
('04Asp','aspnet.png','Treinamento de ASP.NET', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem ASP.NET', 580.00, 350, null),
('05Lin','linux.jfif','Treinamento de Linux', ' Nesse treinamento você aprenderá do básico ao avançado no sistema operacional Linux', 950.00, 600, null);
