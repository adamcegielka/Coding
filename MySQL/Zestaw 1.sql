-- 1. Wyświetl strukturę tabeli departments
DESC departments;
DESCRIBE departments;
SHOW COLUMNS FROM departments;

-- 2. Wyświetl zawartość tabeli regions
SELECT * FROM regions;

-- 3. Wyświetl imiona, nazwiska oraz pensje pracowników.
SELECT first_name, last_name, salary FROM employees;

-- 4. Wyświetl imiona, nazwiska pracowników. Nadaj aliasy „imie”, „nazwisko” odpowiednim kolumnom
SELECT first_name Imie, last_name Nazwisko FROM employees;

/*
5. Popraw błędy w zapytaniach:
select * from countri;
select department_name, from employees;
select hire_date as ‘data zatrudnienia’ from employees;
select name nazwisko pracownika from employees;
*/
SELECT * FROM countries;
SELECT department_id FROM employees;
SELECT hire_date AS 'data zatrudnienia' FROM employees;
SELECT last_name nazwisko_pracownika FROM employees;

-- 6. Wyświetl imiona i nazwiska pracowników w jednej kolumnie (konkatenacja)
SELECT CONCAT(first_name, ' ', last_name) AS 'Imię i Nazwisko' FROM employees;

-- 7. Wyświetl alfabetyczną listę pracowników
SELECT CONCAT(last_name, ' ', first_name) AS 'Lista Pracowników' FROM employees ORDER BY last_name ASC;

-- 8. Wyświetl nazwiska pracowników w porządku malejącym
 SELECT CONCAT(last_name, ' ', first_name) AS 'Lista Pracowników' FROM employees ORDER BY last_name DESC;

-- 9. Wyświetl nazwiska i pensje pracowników w porządku malejącym wg pensji
SELECT last_name 'Nazwiska Pracowników', salary Pensje FROM employees ORDER BY salary DESC;

-- 10. Wyświetl imiona, nazwiska i pensje pracowników w porządku rosnącym wg pensji i malejącym wg nazwisk
SELECT first_name, last_name, salary FROM employees ORDER BY salary ASC, last_name DESC;

-- 11. Wyświetl listę nazwisk. W wyniku nie mogą pojawić się duplikaty nazwisk.
SELECT DISTINCT last_name FROM employees;

-- 12. Wyświetl dane pracowników o nazwisku Chen
SELECT * FROM employees WHERE last_name = 'Chen';

-- 13. Wyświetl nazwiska pracowników, którzy zarabiają poniżej 3000
SELECT last_name, salary FROM employees WHERE salary < 3000;

-- 14. Wyświetl imiona i nazwiska pracowników, których pensja znajduje się w przedziale [3000, 8 000]
SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 3000 AND 8000;

-- 15. Wyświetl bez duplikatów identyfikatory stanowisk z tabeli employees
SELECT DISTINCT job_id FROM employees;

-- 16. Wyświetl imię, nazwisko oraz datę zatrudnienia wszystkich pracowników, których pensja nie
--     znajduje się w przedziale [4000, 12 000]. Wyniki posortuj rosnąco wg pensji
SELECT first_name, last_name, hire_date, salary FROM employees WHERE salary NOT BETWEEN 4000 AND 12000 ORDER BY salary ASC;

-- 17. Wyświetl dane osób o identyfikatorach 100, 102, 105 i 107
SELECT * FROM employees WHERE employee_id IN (100, 102, 105, 107);

-- 18. Wyświetl nazwisko, pensję i premię pracowników, których nazwisko zaczyna się na literę ‘M’
SELECT last_name, salary, commission_pct FROM employees WHERE last_name LIKE 'M%';

-- 19. Wyświetl imiona i nazwiska pracowników, w których nazwisku występuje litera ‘i’, ‘a’ lub ‘o’
SELECT first_name, last_name FROM employees WHERE (last_name LIKE '%i%' OR last_name LIKE '%a%' OR last_name LIKE '%o%');   
SELECT first_name, last_name FROM employees WHERE last_name LIKE '%i%' OR last_name LIKE '%a%' OR last_name LIKE '%o%';     -- bez nawiasów
SELECT first_name, last_name FROM employees WHERE last_name REGEXP '[i,a,o]';                                               

-- 20. Wyświetl imiona i nazwiska pracowników zatrudnionych w oddziale o identyfikatorze 60
SELECT first_name, last_name, department_id FROM employees WHERE department_id = 60;

-- 21. Wyświetl dane pracowników, którzy nie mają premii
SELECT * FROM employees WHERE commission_pct IS NULL;

-- 22. Wyświetl imiona i nazwiska pracowników, których druga litera imienia to ‘e’
SELECT first_name, last_name FROM employees WHERE first_name LIKE '_e%';

-- 23. Wyświetl bez duplikatów identyfikatory oddziałów z tabeli employees
SELECT DISTINCT department_id FROM employees;

-- 24. Wyświetl imiona, nazwiska i pensje pracowników, którzy powyżej 9000
SELECT first_name, last_name, salary FROM employees WHERE salary > 9000 ORDER BY salary ASC; 

-- 25. Wyświetl imiona, nazwiska i pensje powiększone o 20% pracowników zatrudnionych w oddziale o identyfikatorze 50
SELECT first_name, last_name, salary, salary * 1.2 'Po Podwyżce' FROM employees WHERE department_id = '50';


-- 26. Wyświetl dane pracowników zatrudnionych w oddziale o identyfikatorze 60
SELECT * FROM employees WHERE department_id = 60;

-- 27. Wyświetl dane oddziałów o identyfikatorze lokalizacji większym od 1500
SELECT * FROM departments WHERE location_id > 1500;

-- 28. Wyświetl dane lokalizacji znajdujących się w miastach, których nazwy rozpoczynają się na literę ‘S’
SELECT * FROM locations WHERE city LIKE 'S%';

-- 29. Wyświetl bez duplikatów identyfikatory krajów z tabeli countries
SELECT DISTINCT country_id FROM countries;

-- 30. Wyświetl nazwy krajów posortowane w porządku rosnącym
SELECT country_name FROM countries ORDER BY country_name ASC; 

-- 31. Wyświetl nazwiska, daty zatrudnienia pracowników, pensje i pensje po podwyżce (powiększone o 2000) nadaj kolumnom aliasy
SELECT last_name Nazwisko, hire_date 'Data Zatrudnienia', salary Pensja, salary + 2000 'Po Podwyżce' FROM employees;



SELECT * FROM countries;
SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM job_history;
SELECT * FROM jobs;
SELECT * FROM locations;
SELECT * FROM regions;