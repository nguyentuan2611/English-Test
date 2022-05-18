CREATE DATABASE ENGLISHTEST
USE ENGLISHTEST

CREATE TABLE USERS(
ID integer (3) primary key auto_increment,
USERNAME text (50) not null,
PASSWORDS text (50) not null,
FULL_NAME text (50) not null,
EMAIL text (50) not null
)

CREATE TABLE RESULT_TEST(
ID integer (3) primary key auto_increment,
ID_USER integer (3) not null,
SCORES float not null,
DATE_TEST datetime 
)

CREATE TABLE QUESTION(
ID integer (3) primary key auto_increment,
QUESTION varchar (200) not null,
OPTION1 text not null,
OPTION2 text not null,
OPTION3 text not null,
OPTION4 text not null,
CORRECT_ANSWER text not null,
TYPE_ID text
)

CREATE TABLE TYPE_ID(
ID integer (3) primary key auto_increment,
TYPE_NAME text not null
)

type_idtype_idresult_test

