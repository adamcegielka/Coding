-- 1. Wyświetl imiona, nazwiska i nazwę oddziału dla każdego pracownika.
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d
ON e.department_id = d.department_id;

-- 2. Wyświetl nazwy krajów i odpowiadające im nazwy regionów (tabele REGIONS I COUNTRIES).
SELECT c.country_name, r.region_name
FROM countries c
JOIN regions r
ON c.region_id = r.region_id;

-- 3. Wyświetl imiona i nazwiska pracowników oraz nazwy stanowisk, na których są zatrudnieni.
SELECT e.first_name, e.last_name, j.job_title
FROM employees e
JOIN jobs j
ON e.job_id = j.job_id;

-- 4. Wyświetl nazwy działów, imiona i nazwiska pracowników ale tylko tych którzy nie zostali zatrudnieni na stanowisku o identyfikatorze ‘IT’.
SELECT d.department_id, e.first_name, e.last_name
FROM departments d
JOIN employees e
ON d.department_id = e.department_id
WHERE e.job_id != 'IT';

-- 5. Wyświetl dane adresowe każdego oddziału (nazwa oddziału, kraj, miasto, kod pocztowy, ulica).
SELECT d.department_name, c.country_name, l.city, l.postal_code, l.street_address
FROM departments d
JOIN locations l
ON d.location_id = l.location_id
JOIN countries c
ON c.country_id = l.country_id;

-- 6. Wyświetl zestawienie pokazujące sumy zarobków dla poszczególnych stanowisk.
SELECT j.job_title, SUM(e.salary)
FROM jobs j
JOIN employees e
ON j.job_id = e.job_id
GROUP BY j.job_title;

-- 7. Wyświetl zestawienie pokazujące liczbę pracowników dla poszczególnych stanowisk.
SELECT j.job_title, COUNT(e.employee_id)
FROM jobs j
JOIN employees e
ON j.job_id = e.job_id
GROUP BY j.job_title;

-- 8. Wyświetl zestawienie pokazujące średnie zarobków dla poszczególnych stanowisk, ale tylko dla tych na których jest zatrudnionych co najmniej trzech pracowników.
--    W wyniku powinna pojawić się również liczba pracowników zatrudnionych na poszczególnych stanowiskach.
SELECT j.job_title, COUNT(e.employee_id), AVG(e.salary)
FROM jobs j
JOIN employees e
ON j.job_id = e.job_id
GROUP BY j.job_title
HAVING COUNT(e.employee_id) >= 3;

-- 9. Wyświetl oddziały, w których średnia pensja jest wyższa od 9000.
SELECT d.department_name, AVG(e.salary)
FROM departments d
JOIN employees e
ON d.department_id = e.department_id
GROUP BY d.department_name
HAVING AVG(e.salary) > 9000;

-- 10. Wyświetlić imiona, nazwiska i pensje pracowników, którzy zarabiają więcej od średniej pensji.
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary;

-- 11. Wyświetl dane pracowników zatrudnionych w tym samym oddziale co Alexis Bull.
SELECT * FROM employees WHERE department_id = 
	(SELECT department_id FROM employees WHERE first_name = 'Alexis' AND last_name = 'Bull');

-- 12. Wyświetl pracowników zatrudnionych na tym samym stanowisku co Weiss (to samo dla King).
SELECT first_name, last_name FROM employees WHERE job_id =
	(SELECT job_id FROM employees WHERE last_name = 'Weiss');
     
     -- (to samo dla King) --
SELECT first_name, last_name FROM employees WHERE job_id =
	ANY(SELECT job_id FROM employees WHERE last_name = 'King');
    
-- 13. Wyświetl imiona i nazwiska pracowników, których pensja jest wyższa od średniej pensji w firmie i pracują na tym samym stanowisku co Abel.
SELECT first_name, last_name 
FROM employees 
WHERE salary > 
	(SELECT AVG(salary) FROM employees)
    AND job_id = 
		(SELECT job_id FROM employees WHERE last_name = 'Abel');
    
    

SELECT * FROM countries;
SELECT * FROM departments;
SELECT * FROM departments_copy;
SELECT * FROM employees;
SELECT * FROM employees_copy;
SELECT * FROM job_history;
SELECT * FROM jobs;
SELECT * FROM locations;
SELECT * FROM regions;