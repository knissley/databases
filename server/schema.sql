CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int,
  name text,
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id int,
  name text,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id int,
  message_text varchar(255),
  username int,
  roomname int,
  PRIMARY KEY(id),
  FOREIGN KEY(username) REFERENCES users(id),
  FOREIGN KEY(roomname) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

