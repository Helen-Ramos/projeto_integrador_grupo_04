-- Criação do banco de dados
CREATE DATABASE Estacionamento;

-- Usar o banco de dados
USE Estacionamento;

-- Tabela de Clientes
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY ,
    NomeCliente VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) NOT NULL UNIQUE
);

-- Inserir dados na tabela de Clientes
INSERT INTO Clientes (NomeCliente, CPF) VALUES
('Helen Ramos', '123.456.789-02'),
('Herick Souza', '123.456.789-03'),
('Marcelo Mattos', '123.456.789-04'),
('Anderson Silva', '123.456.789-05'),
('Tereza Cristina', '987.654.321-10');

select * from clientes;

-- Tabela de Tipos de Veículos
CREATE TABLE TiposVeiculos (
    TipoVeiculoID INT AUTO_INCREMENT PRIMARY KEY,
    Tipo VARCHAR(50) NOT NULL
);

-- Inserir dados na tabela de TiposVeiculos
INSERT INTO TiposVeiculos (Tipo) VALUES
('Carro'),
('Moto'),
('Van'),
('Caminhoneta');

select * from tiposVeiculos;

-- Tabela de Veículos
CREATE TABLE Veiculos (
    VeiculoID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    TipoVeiculoID INT,
    Placa VARCHAR(10) NOT NULL UNIQUE,
    Modelo VARCHAR(50),
    Cor VARCHAR(20),
    AnoFabricacao INT,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (TipoVeiculoID) REFERENCES TiposVeiculos(TipoVeiculoID)
);

-- Inserir dados na tabela de Veiculos
INSERT INTO Veiculos (VeiculoID, ClienteID, TipoVeiculoID, Placa, Modelo, Cor, AnoFabricacao) VALUES
(1, 1, 1, 'ABC1234', 'Toyota Corolla', 'Preto', 2020),
(2, 2, 2, 'XYZ5678', 'Honda CB500', 'Vermelho', 2022);

select * from veiculos;

-- Tabela de Vagas de Estacionamento
CREATE TABLE VagasEstacionamento (
    VagaID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroVaga INT NOT NULL,
    Disponivel BIT NOT NULL
);

-- Inserir dados na tabela de VagasEstacionamento
INSERT INTO VagasEstacionamento (VagaID, NumeroVaga, Disponivel) VALUES
(1, 101, 1),
(2, 102, 1);

select * from vagasEstacionamento;

-- Tabela de Reservas
CREATE TABLE Reservas (
    ReservaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    VagaID INT,
    DataHoraReserva DATETIME NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (VagaID) REFERENCES VagasEstacionamento(VagaID)
);

-- Inserir dados na tabela de Reservas
INSERT INTO Reservas (ReservaID, ClienteID, VagaID, DataHoraReserva) VALUES
(1, 1, 1, '2023-11-22 10:00:00'),
(2, 2, 2, '2023-11-23 11:30:00');

select * from Reservas;

-- Tabela de Entradas de Veículos
CREATE TABLE EntradasVeiculos (
    EntradaID INT AUTO_INCREMENT PRIMARY KEY,
    VeiculoID INT,
    VagaID INT,
    DataHoraEntrada DATETIME NOT NULL,
    FOREIGN KEY (VeiculoID) REFERENCES Veiculos(VeiculoID),
    FOREIGN KEY (VagaID) REFERENCES VagasEstacionamento(VagaID)
);

-- Inserir dados na tabela de EntradasVeiculos
INSERT INTO EntradasVeiculos (EntradaID, VeiculoID, VagaID, DataHoraEntrada) VALUES
(1, 1, 1, '2023-11-22 10:30:00'),
(2, 2, 2, '2023-11-23 12:00:00');

select * from EntradasVeiculos;

-- Tabela de Saídas de Veículos
CREATE TABLE SaidasVeiculos (
    SaidaID INT AUTO_INCREMENT PRIMARY KEY,
    VeiculoID INT,
    VagaID INT,
    DataHoraSaida DATETIME NOT NULL,
    FOREIGN KEY (VeiculoID) REFERENCES Veiculos(VeiculoID),
    FOREIGN KEY (VagaID) REFERENCES VagasEstacionamento(VagaID)
);

-- Inserir dados na tabela de SaidasVeiculos
INSERT INTO SaidasVeiculos (SaidaID, VeiculoID, VagaID, DataHoraSaida) VALUES
(1, 1, 1, '2023-11-22 14:45:00'),
(2, 2, 2, '2023-11-23 15:30:00');

select * from SaidasVeiculos;

-- Tabela de Histórico de Movimentação
CREATE TABLE HistoricoMovimentacao (
    MovimentacaoID INT AUTO_INCREMENT PRIMARY KEY,
    VeiculoID INT,
    VagaID INT,
    DataHoraEntrada DATETIME NOT NULL,
    DataHoraSaida DATETIME,
    FOREIGN KEY (VeiculoID) REFERENCES Veiculos(VeiculoID),
    FOREIGN KEY (VagaID) REFERENCES VagasEstacionamento(VagaID)
);

-- Inserir dados na tabela de HistoricoMovimentacao
INSERT INTO HistoricoMovimentacao (MovimentacaoID, VeiculoID, VagaID, DataHoraEntrada, DataHoraSaida) VALUES
(1, 1, 1, '2023-11-22 10:30:00', '2023-11-22 14:45:00'),
(2, 2, 2, '2023-11-23 12:00:00', '2023-11-23 15:30:00');

select * from HistoricoMovimentacao;

-- select joins

select NomeCliente, cpf, Modelo, placa from clientes
inner join veiculos
on veiculos.VeiculoID = clientes.ClienteID;

select NomeCliente, cpf, Modelo, placa from clientes
left join veiculos
on veiculos.VeiculoID = clientes.ClienteID;

select NomeCliente, cpf, Modelo, placa from clientes
right join veiculos
on veiculos.VeiculoID = clientes.ClienteID;

select NomeCliente, cpf, Modelo, placa from clientes
left join veiculos

on veiculos.VeiculoID = clientes.ClienteID;