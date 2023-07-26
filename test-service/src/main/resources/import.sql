-- Difficulty

insert into difficulty (score, title) values (1, 'Facil');
insert into difficulty (score, title) values (2, 'Intermedio');
insert into difficulty (score, title) values (3, 'Difícil');

-- Quest

insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 1, 5 ,'preg-1', 'Pregunta ???', '19');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 1, 5 ,'preg-2', 'Pregunta ???', '16');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 1, 5 ,'preg-3', 'Pregunta ???', '13');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 1, 5 ,'preg-4', 'Pregunta ???', '6');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 2, 1 ,'preg-5', 'Pregunta ???', '-70');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 2, 1 ,'preg-6', 'Pregunta ???', '292');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 2, 1 ,'preg-7', 'Pregunta ???', '36');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 2, 1 ,'preg-8', 'Pregunta ???', '568');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 3, 9 ,'preg-9', 'Pregunta ???', '17');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 3, 9 ,'preg-10', 'Pregunta ???', 'AaTb2c1a1bHcWaSbAcSaTb');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 3, 2 ,'preg-11', 'Pregunta ???', 'Aaa');
insert into quest (content, id_difficulty, id_user, image, title, answer) values ('', 3, 1 ,'preg-12', 'Pregunta ???', '233');

-- Test

insert into test (id_difficulty, id_user, time, title, id_quest1, id_quest2, id_quest3, id_quest4, qualification) values (1, 9, '00:4:47', 'Test 1 - Fácil', 1, 2, 3, 4, 70);
insert into test (id_difficulty, id_user, time, title, id_quest1, id_quest2, id_quest3, id_quest4, qualification) values (2, 21, '00:32:4', 'Test 1 - Intermedio', 5, 6, 7, 8,  70);
insert into test (id_difficulty, id_user, time, title, id_quest1, id_quest2, id_quest3, id_quest4, qualification) values (3, 19, '01:03:22', 'test 1 - Difícil', 9, 10, 11, 12, 70);