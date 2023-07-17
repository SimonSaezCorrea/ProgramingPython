-- Difficulty

insert into difficulty (id, score, title) values (1, 1, 'Facil');
insert into difficulty (id, score, title) values (2, 2, 'Intermedio');
insert into difficulty (id, score, title) values (3, 3, 'Difícil');

-- Quest

insert into quest (id, content, id_difficulty, id_user, image, title) values (1, '-', 1, 5 ,'preg-1.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (2, '-', 1, 5 ,'preg-2.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (3, '-', 1, 5 ,'preg-3.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (4, '-', 1, 5 ,'preg-4.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (5, '-', 2, 1 ,'preg-5.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (6, '-', 2, 1 ,'preg-6.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (7, '-', 2, 1 ,'preg-7.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (8, '-', 2, 1 ,'preg-8.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (9, '-', 3, 9 ,'preg-9.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (10, '-', 3, 9 ,'preg-10.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (11, '-', 3, 2 ,'preg-11.jpg', 'Pregunta ???');
insert into quest (id, content, id_difficulty, id_user, image, title) values (12, '-', 3, 1 ,'preg-12.jpg', 'Pregunta ???');

-- Test

insert into test (id, id_difficulty, id_user, time, title) values (1, 1, 9, '00:4:47', 'Test 1 - Fácil');
insert into test (id, id_difficulty, id_user, time, title) values (2, 2, 21, '00:32:4', 'Test 1 - Intermedio');
insert into test (id, id_difficulty, id_user, time, title) values (3, 3, 19, '01:03:22', 'test 1 - Difícil');


-- Test_Quest

insert into test_quest (id, id_test, id_quest, qualification) values (1, 1, 1, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (2, 1, 2, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (3, 1, 3, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (4, 1, 4, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (5, 2, 5, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (6, 2, 6, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (7, 2, 7, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (8, 2, 8, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (9, 3, 9, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (10, 3, 10, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (11, 3, 11, 7);
insert into test_quest (id, id_test, id_quest, qualification) values (12, 3, 12, 7);