drop database if exists `cac`;
create database if not exists `cac`;
use `cac`;
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
