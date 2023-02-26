--  1. Wyświetl liczbę wszystkich pracowników.
SELECT  COUNT(last_name) FROM employees;
SELECT  COUNT(*) FROM employees;

--  2. Wyświetl średnią pensję osób zatrudnionych na stanowisku IT_PROG.
SELECT AVG(salary) FROM employees WHERE job_id = 'IT_PROG';

-- w różnych działach --
SELECT department_id, AVG(salary), COUNT(*)
FROM employees
WHERE department_id IS NOT NULL
GROUP BY department_id
HAVING AVG(salary) > 5000
ORDER BY department_id;

--  3. Wyświetl liczbę różnych imion na literę A.
SELECT COUNT(first_name)
FROM (SELECT DISTINCT first_name
      FROM employees) employees
WHERE first_name LIKE 'A%';

--  4. Wyświetl średnią, minimalną i maksymalną pensję pracowników.
SELECT AVG(salary), MIN(salary), MAX(salary) FROM employees;

--  5. Wyświetl sumę, średnią, minimalną i maksymalną pensję pracowników bez prezesa.
SELECT SUM(salary), AVG(salary), MIN(salary), MAX(salary) FROM employees WHERE NOT job_id = 'AD_PRES';




SELECT * FROM countries;
SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM job_history;
SELECT * FROM jobs;
SELECT * FROM locations;
SELECT * FROM regions;