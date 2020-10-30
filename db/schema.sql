### Schema
DROP DATABASE IF EXISTS quizard_db;

CREATE DATABASE quizard_db;
USE quizard_db;

CREATE TABLE catagories
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	catagory varchar(255) NOT NULL,
	
	PRIMARY KEY (id)
);

CREATE TABLE questions
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	question varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE answers
(
	id int NOT NULL AUTO_INCREMENT,
	answers varchar(255) NOT NULL PRIMARY KEY,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);