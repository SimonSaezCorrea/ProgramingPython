-- Difficulty

insert into difficulty (id, score, title) values (1, 1, 'Facil');
insert into difficulty (id, score, title) values (2, 2, 'Intermedio');
insert into difficulty (id, score, title) values (3, 3, 'Difícil');

-- Quest

insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (1, '-', 1, 5 ,'preg-1.png', 'Pregunta ???', '19');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (2, '-', 1, 5 ,'preg-2.png', 'Pregunta ???', '16');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (3, '-', 1, 5 ,'preg-3.png', 'Pregunta ???', '13');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (4, '-', 1, 5 ,'preg-4.png', 'Pregunta ???', '6');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (5, '-', 2, 1 ,'preg-5.png', 'Pregunta ???', '-70');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (6, '-', 2, 1 ,'preg-6.png', 'Pregunta ???', '292');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (7, '-', 2, 1 ,'preg-7.png', 'Pregunta ???', '36');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (8, '-', 2, 1 ,'preg-8.png', 'Pregunta ???', '568');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (9, '-', 3, 9 ,'preg-9.png', 'Pregunta ???', '17');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (10, '-', 3, 9 ,'preg-10.png', 'Pregunta ???', 'Aa/b%cHaWbScAaSb/c&a!b');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (11, '-', 3, 2 ,'preg-11.png', 'Pregunta ???', 'Aaa');
insert into quest (id, content, id_difficulty, id_user, image, title, answer) values (12, '-', 3, 1 ,'preg-12.png', 'Pregunta ???', '233');

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