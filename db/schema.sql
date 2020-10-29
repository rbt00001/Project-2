-- Creates the "quizard_db" database --
CREATE DATABASE quizard_db;

USE quizard_db;

-- Create the table categories.
CREATE TABLE categories (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
category varchar(25) NOT NULL
);

-- Create the table questions.
CREATE TABLE questions (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
question varchar(300) NOT NULL,
categories_id INT(10) NOT NULL,
FOREIGN KEY (categories_id) REFERENCES categories(id)
);

-- Create the table answers.
CREATE TABLE answers (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
answer varchar(100) NOT NULL,
questions_id INT(10) NOT NULL,
FOREIGN KEY (questions_id) REFERENCES answers(id)
);