# Para ser usado junto com o ambiente Docker, testado em SSMS

create database listagemeventos
use listagemeventos

create table CadastroUsuario (
idUsuario int NOT NULL identity (1,1) primary key,
cpf_cnpj varchar (25) not null,
nome_completo varchar (50) not null,
empresa_faculdade varchar (100) not null,
email varchar (50) not null,
senha varchar  (10) not null
);


create table Eventos (
id_evento varchar (10) primary key,
nome_evento varchar (100) not null,
descricao_evento varchar (500) not null,
preco_evento int  not null,
ingressos int not null,
quantidade_ing int
);

create table Historico (
idHist int  identity (1,1) primary key,
idUsu int not null,
idEvnt varchar (10) not null,
nome_Evnt varchar (100) not null,
preco_Evnt int not null,
qtd_ing int not null,
data_matricula datetime not null default getdate (),
FOREIGN KEY (idUsu) references CadastroUsuario (idUsuario),
FOREIGN KEY (idEvnt) references Eventos (id_evento),
);


INSERT INTO CadastroUsuario VALUES 
('123.456.789-02', 'Marcilene Soares', 'Universidade Federal de Alfenas', 'marcilene_soares@yahoo.com.br','ght56125'),
('15.604.300/0001-57', ' Roberto Pereira Drummond', 'Terra Brasil ME',  'rpdrummond@terrabrasil.com.br', 'rkes2092'),
('741.722.010-08', ' Andressa Munhoz Cavalcante', ' Universidade Paulista', 'andressa_cavalc@hotmail.com', 'abacate023'),
('43.009.181/0001-20', ' Daniele Ferreira Diniz', ' Oticas Diniz S/A', 'danielediniz2@oticasdiniz.br', 'tgp0e43'),
('561.742.600-11', 'Lunara Morena Cunha', 'Colégio Técnico de Campinas', 'cunhalunara@gmail.com', 'fpav40234');

INSERT INTO Eventos VALUES 
('01Phy','Treinamento de Phyton', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem Phyton', 390.00, 500, null),
('02Del','Treinamento de Delphi', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem Delhpi', 450.00, 300, null),
('03TyS','Treinamento de TypeScript', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem TypeScript', 550.00, 400, null),
('04Asp','Treinamento de ASP.NET', 'Nesse treinamento você aprenderá do básico ao avançado na linguagem ASP.NET', 580.00, 350, null),
('05Lin','Treinamento de Linux', ' Nesse treinamento você aprenderá do básico ao avançado no sistema operacional Linux', 950.00, 600, null);


INSERT INTO CadastroUsuario values
('561.742.600-11', 'Lunara Morena Cunha', 'Colégio Técnico de Campinas', 'cunhalunara@gmail.com', 'fpav40234');
go


create view vVerEmailDuplicado AS
(select email, count(*) as 'Email_Duplicado' from CadastroUsuario
group by email
having count(*)>1)
go

create view vVerSenhaDuplicada AS
(select  senha, count(*) as 'Senha_Duplicada' from CadastroUsuario
group by senha
having count (*) >1)
go



create proc pValidarEmailExistente 
as
begin
select * from vVerEmailDuplicado

declare @Email_Duplicado int = count(*) from vVerEmailDuplicado;

if (@Email_Duplicado >= 1)
begin
 print ('Não pode ser feito')
 raiserror('Email ja cadastrado favor tentar outro', 10,1)
 end

 else 
 begin
  print ('Login efetuado com sucesso');
   end

   end


create proc pValidarSenhaExistente 
as
begin
select * from vVerSenhaDuplicada

declare @Senha_Duplicada int = count(*) from vVerEmailDuplicado;

if (@Senha_Duplicada >= 1)
begin
 print ('Não pode ser feito')
 raiserror('Senha ja cadastrada favor tentar outra', 10,1)
 end

 else 
 begin
  print ('Login efetuado com sucesso');
   end

   end

create procedure sp_AtualizaEventos ('id_Evento' varchar(10), 'preco_evento' int, 'ingressos' int, 'quantidade_ing' int)
	begin
	 declare contador int (11);
	 select count (*) into contador from Eventos where  id_evento = id_evento;
	 if contador > 0 then
	 update Eventos set ingressos = ingressos- quantidade_ing, preco_evento = preco_evento;
	 select a.id_evento, a.foto_evento, a.nome_evento, b.preco_evento, c.idUsuario, b.qtd_ing, b.valor_total, b.idHist 
	 from Eventos a, Historico b, CadastroUsuario c
	 where b.idUsu = c.idUsuario, b.idEvnt = a.id_evento, b.nome_Evnt = a.nome_evento, b.preco_Evnt = a.preco_evento * a.quantidade_ing, 
	 a.quantidade_ing = b.qtd_ing, a.foto_evento = b.foto_Evnt
	 ON
	 Insert into Historico  (idHist, idUsu, idEvnt, foto_Evnt, nome_evnt, preco_Evnt, qtd_ing, valor_total) values
	 idHist, c.idUsuario, id_evento, foto_evento, nome_evento, preco_evento, quantidade_ing, valor_total

	 else
	 print('Nada a ser feito, quantidade de ingressos inalterado');
	end
