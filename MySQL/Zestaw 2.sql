-- 1. Wyświetl następujące dane pracowników: imię i nazwisko w kolumnie o nagłówku OSOBA oraz zarobki w kolumnie o nagłówku PENSJA.
SELECT CONCAT(first_name, ' ', last_name) AS Osoba, salary Pensja FROM employees;

-- 2. Wyświetl imiona i nazwiska pracowników zatrudnionych w oddziale o identyfikatorze 100.
SELECT first_name, last_name, department_id FROM employees WHERE department_id = 100;

-- 3. Wyświetl imiona i nazwiska pracowników nie zatrudnionych na stanowisku IT_PROG.
SELECT first_name, last_name, job_id FROM employees WHERE NOT job_id = 'IT_PROG';

-- 4. Wyświetl datę systemową.
SELECT SYSDATE();

-- 5. Wyświetl imiona, nazwiska i daty zatrudnienia pracowników.
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date IS NOT NULL;

-- 6. Wyświetl imiona, nazwiska i daty zatrudnienia pracowników zatrudnionych po 2005 roku. Posortuj wyniki wg daty zatrudnienia.
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date > '2005-12-31 00:00:00' ORDER BY hire_date ASC;

-- 7. Wyświetl imiona, nazwiska i daty zatrudnienia pracowników zatrudnionych w 2007 roku.
--    Posortuj wyniki wg daty zatrudnienia (podaj dwa rozwiązania).
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '2007-01-01' AND '2007-12-31' ORDER BY hire_date ASC;
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date >= '2007-01-01' AND hire_date >= '2007-12-31' ORDER BY hire_date ASC;

-- 8. Wyświetl dane pracowników, których zarobki mieszczą się w przedziale [6 000; 8 000] (podaj dwa rozwiązania).
SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 6000 AND 8000 ORDER BY salary;
SELECT first_name, last_name, salary FROM employees WHERE salary >= 6000 AND salary >= 8000 ORDER BY salary;

-- 9. Wyświetl nazwy oddziałów, dla których nie wprowadzono kierownika (tabela DEPARMENTS).
SELECT department_name, manager_id FROM departments WHERE manager_id IS NULL;

-- 10. Wyświetl dane pracowników, uporządkowane malejąco wg pensji.
SELECT * FROM employees ORDER BY salary DESC;

-- 11. Wyświetl dane pracowników oddziału o identyfikatorze 60 uporządkowaną malejąco wg pensji.
SELECT * FROM employees WHERE department_id = 60 ORDER BY salary DESC;

-- 12. Wyświetl dane pracowników oddziałów o identyfikatorach 50, 60, 100 (podaj dwa rozwiązania).
SELECT * FROM employees WHERE department_id IN ('50', '60', '100');
SELECT * FROM employees WHERE department_id = 50 OR department_id = 60 OR department_id = 100;

-- 13. Wyświetl dane pracowników oddziałów o identyfikatorach 70, 80, 110, dla których pensja nie
--     znajduje się w przedziale [5 000; 9 000]. Wyniki posortuj wg pensji.
SELECT * FROM employees WHERE department_id IN ('70', '80', '110') AND salary BETWEEN 5000 AND 9000 ORDER BY salary;

-- 14. Wyświetl imiona, nazwiska, daty zatrudnienia i pensje pracowników zatrudnionych na stanowisku
--     ST_CLERK, których data zatrudnienia nie przypada na lata 2004-2005.
SELECT first_name, last_name, hire_date, salary FROM employees WHERE job_id = 'st_clerk' AND NOT hire_date BETWEEN '2004-01-01' AND '2005-12-31';
SELECT first_name, last_name, salary, hire_date, 
	EXTRACT(YEAR FROM hire_date), 
    YEAR(hire_date), job_id 
    FROM employees 
    WHERE job_id = 'ST_CLERK' AND
	EXTRACT(YEAR FROM hire_date) NOT IN (2004,2005);
SELECT first_name, last_name, salary, hire_date FROM employees WHERE JOB_ID = 'ST_CLERK' AND YEAR(HIRE_DATE) NOT BETWEEN 2004 AND 2005;

-- 15. Wyświetl dane prezesa (sprawdź pole manager_id).
SELECT * FROM employees WHERE job_id = 'AD_PRES';

-- 16. Wyświetl imiona pracowników bez powtórzeń. Wyniki posortuj rosnąco.
SELECT DISTINCT first_name FROM employees ORDER BY first_name;

-- 17. Wyświetl nazwy oddziałów, dla których trzecią literą w nazwie nie jest ’o’ (tabela DEPARTMENTS).
SELECT department_name FROM departments WHERE department_name NOT LIKE '__o%';

-- 18. Wyświetl dane pracowników, których email kończy się literą ’G’ i są zatrudnieni w oddziałach o identyfikatorach 90, 110.
SELECT * FROM employees WHERE email LIKE '%g' AND department_id IN ('90', '110');

-- 19. Wyświetl dane oddziałów, dla których identyfikator lokalizacji jest różny od 1700 (tabela DEPARTMENTS).
SELECT * FROM departments WHERE location_id NOT LIKE '1700';

-- 20. Wyświetl różne imiona pracowników rozpoczynające się na literę ’K’ lub ’A’. Wyniki posortuj rosnąco.
SELECT DISTINCT first_name FROM employees WHERE first_name LIKE 'K%' OR first_name LIKE 'A%'  ORDER BY first_name;

-- 21. Wyświetl imiona, nazwiska i pensje powiększone o 20% pracowników zatrudnionych w oddziałach o identyfikatorach 50, 60 i 80.
SELECT first_name, last_name, salary * 1.2 FROM employees WHERE department_id IN ('50', '60', '80');

-- 22. Wyświetl lokalizacje dla których nie wprowadzono kodu pocztowego.
SELECT * FROM locations WHERE postal_code IS NULL;

-- 23. Wyświetl dane oddziałów o identyfikatorze lokalizacji większym od 2000.
SELECT * FROM departments WHERE location_id > 2000;

-- 24. Wyświetl dane lokalizacji nie znajdujących się w miastach, których nazwy rozpoczynają się na literę ‘T’ i 'B'.
SELECT * FROM locations WHERE NOT (city LIKE 'T%' OR city LIKE 'B%');

-- 25. Wyświetl minimalne i maksymalne pensje dla poszczególnych stanowisk (tabela JOBS).
SELECT job_title, min_salary, max_salary FROM jobs;

-- 26. Wyświetl nazwy stanowisk, minimalne pensje i minimalne pensje powiększone o 10%. Wyniki posortuj wg minimalnej pensji.
SELECT job_title, min_salary, min_salary * 1.1 FROM jobs ORDER BY min_salary;

SELECT * FROM countries;
SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM job_history;
SELECT * FROM jobs;
SELECT * FROM locations;
SELECT * FROM regions;