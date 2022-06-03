CREATE DATABASE ENGLISHTEST;
USE ENGLISHTEST;

CREATE TABLE USERS(
ID integer (3) primary key auto_increment,
USERNAME text (50) not null,
PASSWORD text (50) not null,
FULL_NAME text (50) not null,
EMAIL text (50) not null
);

CREATE TABLE RESULT_TEST(
ID integer (3) primary key auto_increment,
ID_USER integer (3) not null,
SCORES float not null,
TIMED time ,
DATE_TEST datetime not null
);

CREATE TABLE QUESTION(
ID integer (3) primary key auto_increment,
QUESTION varchar (200) not null,
OPTION1 text not null,
OPTION2 text not null,
OPTION3 text not null,
OPTION4 text not null,
TYPE_ID text
);

CREATE TABLE TYPE_ID(
ID integer (3) primary key auto_increment,
TYPE_NAME text not null
);

CREATE TABLE ANSWER(
ID integer (3),
ANSWER_CORRECT text not null
);

CREATE TABLE BXH(
ID integer (3),
SCORES float not null,
TIMED time 
);



INSERT INTO QUESTION (QUESTION, OPTION1, OPTION2, OPTION3, OPTION4) VALUES
('What was the matter with him? He........ a toothache.', 'to have', 'have', 'has', 'had' ),
('What subject is he......... now? Vietnamese.', 'to learn', 'learn', 'learning', 'learned'),
('............. did she go yesterday morning? She went to the bookshop.', 'What', 'Where', 'When', 'Why'),
(' Are you free........ the evening? Yes, I am.', 'in', 'on', 'at', 'to'),
('She is going to......... television tonight.', 'sing', 'play', 'stay', 'watch'),
('............. is that ? It is my teacher.', 'What', 'Who', 'Where', 'How'),
('Does she like sandwiches ?......................', 'Yes, she do', 'Yes, she is', 'Yes, she does', 'Yes, she like'),
('This is Mai.............. mother is a doctor.', 'his', 'she', 'her', 'he'),
('She............. a banana.', 'wants', 'want', 'to want', 'wantes'),
('What is it ? It is................', 'eraser', 'an eraser', 'erasers', 'a eraser');

INSERT INTO QUESTION (QUESTION, OPTION1, OPTION2, OPTION3, OPTION4) VALUES
('He is................... Vietnam', 'from', 'on', 'in', 'at'),
('............. is that ? It is my teacher.', 'What', 'Who', 'Where', 'How'),
('Does she like sandwiches ?......................', 'Yes, she do', 'Yes, she is', 'Yes, she does', 'Yes, she like'),
('This is Mai.............. mother is a doctor.', 'his', 'she', 'her', 'he'),
('It is not hot............ the winter.', 'on', 'in', 'at', 'under'),
('I dont like Maths...............it is difficult.', 'and', 'but', 'so', 'because'),
('What is the matter............you?', 'in', 'with', 'on', 'of'),
('Do you like English? Yes, I..........', 'do', 'am', 'like', 'dont'),
('He often..................to school in the morning', 'gos', 'going', 'goes', 'to go'),
('His birthday is........................ June 1st.', 'at', 'on', 'in', 'about');

INSERT INTO QUESTION (QUESTION, OPTION1, OPTION2, OPTION3, OPTION4) VALUES
('A........... works in a hospital.', 'Teacher', 'worker', 'Nurse', 'farmer'),
('I.......................... reading a book about Santa Claus.', 'can', 'do', 'am', 'are'),
('............................... you like to play hide and seek with me?', 'Would', 'Could', 'Do', 'If'),
('Did you.................................. teacher is Day last month?', 'celebrated', 'celebrating', 'celebrate', 'celebrater'),
('Does he........................ a sore-throat?', 'has', 'had', 'have', 'having'),
('We went to the cinema....................................', 'today', 'yesterday' ,'tomorrow', 'next Sunday'),
(' A housewife often does........................................', 'homework', 'housework', 'hardwork', 'exercises'),
('It is hot in Summer,..................... ?', 'is it', 'is not it', 'do it', 'does it'),
('....... your birthday? It is in May.', 'What is', 'When is', 'It is', 'Where is'),
('Would you like..... milk? No, thanks', 'an', 'a', 'some', 'one');


SELECT * FROM QUESTION;

INSERT INTO ANSWER (ID, ANSWER_CORRECT) VALUES
('1', 'had'), ('2', 'learning'), ('3', 'What'), ('4', 'in'), ('5', 'watch'), ('6', 'Who'), ('7', 'Yes, she does'), ('8', 'her'),
('9', 'wants'), ('10', 'an eraser'), ('11', 'from'), ('12', 'Who'), ('13', 'Yes, she does'), ('14', 'her'), ('15', 'in'), ('16', 'because'),
('17', 'with'), ('18', 'do'), ('19', 'goes'), ('20', 'on'), ('21', 'Nurse'), ('22', 'am'), ('23', 'Would'), ('24', 'celebrate'), ('25', 'have'),
('26', 'yesterday'), ('27', 'housework'), ('28', 'is not it'), ('29', 'When is'), ('30', 'some');

select * from ANSWER  where ID = 1 and ANSWER_CORRECT = 'had';
SELECT * FROM ANSWER;

INSERT INTO USERS  ( `USERNAME`, `PASSWORD`, `FULL_NAME`, `EMAIL`) VALUES ( 'Thanh123', '123', 'ThanhNguyen', '');
INSERT INTO USERS( `USERNAME`, `PASSWORD`, `FULL_NAME`, `EMAIL`) VALUES ( 'Thi123', '123', 'ThiMlo' , 'Thi@email.com');
INSERT INTO USERS ( `USERNAME`, `PASSWORD`, `FULL_NAME`, `EMAIL`) VALUES ( 'Tuan123', '123', 'TuanNguyen' , 'tuan@email.com');
SELECT * FROM USERS;

INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('3', '9', time('15:00') ,TIMESTAMP('2022/05/20'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('3', '8', time('13:00') , TIMESTAMP('2022/05/20'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('4', '9', time('14:00'),  TIMESTAMP('2022/05/21'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('4', '10', time('17:00'), TIMESTAMP('2022/05/22'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('4', '10',time('14:00'), TIMESTAMP('2022/05/20'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES ('4', '7', time('11:00'),TIMESTAMP('2022/05/20'));
INSERT INTO RESULT_TEST (`ID_USER`, `SCORES`, `TIMED` ,  `DATE_TEST`) VALUES (3, 7.5, time('11:00'),TIMESTAMP('2022/05/20'));

select * from result_test; 

INSERT INTO BXH (`ID`, `SCORES` , `TIMED`) VALUES (3 , 9 ,time('11:20'));
INSERT INTO BXH (`ID`, `SCORES`, `TIMED`) VALUES (4 , 9,time('11:00'));
INSERT INTO BXH (`ID`, `SCORES`, `TIMED`) VALUES (2 , 8,time('10:30'));

select * from BXH;
