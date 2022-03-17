CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message_text varchar(200) NOT NULL,
  userid int NOT NULL,
  roomname varchar(20),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

