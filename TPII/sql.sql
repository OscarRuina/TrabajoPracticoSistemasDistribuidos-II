drop database if exists `db-redsocial`;
create database if not exists `db-redsocial`;
use `db-redsocial`;

drop table if exists `personas`;	
 create table personas(
  id int(7) NOT NULL AUTO_INCREMENT,
  nombre varchar(50) DEFAULT NULL,
  apellido varchar(50) DEFAULT NULL,
 PRIMARY KEY (id)
);

drop table if exists `contacto`;	
 create table contacto(
  id int(7) NOT NULL AUTO_INCREMENT,
  nombre varchar(50) DEFAULT NULL,
  apellido varchar(50) DEFAULT NULL,
  mail varchar(50) DEFAULT NULL,
 PRIMARY KEY (id)
);

drop table if exists `usuario`;	
 create table `usuario` (
  id int(7) NOT NULL AUTO_INCREMENT,
  username varchar(50) DEFAULT NULL,
  firstname varchar(50) DEFAULT NULL,
  passwords varchar(50) DEFAULT NULL,
 PRIMARY KEY (id)
);

drop table if exists `imagen`;	
 create table `imagen` (
  id int(7) NOT NULL AUTO_INCREMENT,
  ubicacion varchar(255) DEFAULT NULL,   -- ubicacion entera (no se va a usar)
  titulo varchar(50) DEFAULT NULL,      -- ingresador por pagina
  descripcion varchar(50) DEFAULT NULL, -- ingresador por pagina
  nombre varchar(50) DEFAULT NULL,      -- Nombre random ejemplo: 0473a2c.jpg
  vistas int(8)  DEFAULT NULL,          -- en 0
  likes int(8)  DEFAULT NULL,           -- en 0
  fechahora DATETIME(8)  DEFAULT current_timestamp, -- 2021-09-23 22:23:15
 PRIMARY KEY (id)
);

drop table if exists `comentario`;	
create table `comentario` (
  id int(7) NOT NULL AUTO_INCREMENT,
  email varchar(255) DEFAULT NULL,   				-- ubicacion entera (no se va a usar)
  nombre varchar(50) DEFAULT NULL,      			-- ingresador por pagina
  comentario varchar(255) DEFAULT NULL, 			-- ingresador por pagina
  fechahora DATETIME DEFAULT CURRENT_TIMESTAMP, -- 2021-09-23 22:23:15
 PRIMARY KEY (id),
 foreign key (id) references imagen(id)
);

select * from imagen;

select user;