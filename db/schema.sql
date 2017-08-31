DROP DATABASE IF EXISTS burgers_db;

CREATE database burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL
  , burger_name VARCHAR (200)
  , devoured BOOLEAN
  , date TIMESTAMP
  , primary key (id)
);
