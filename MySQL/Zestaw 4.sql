-- 1. Wstaw dowolny rekord do tabeli country.
INSERT INTO countries(country_id, country_name, redion_id) VALUES ('PL','Polska', '1');

-- 2. Przygotuj kopię tabeli departments – przy pomocy klauzuli INSERT przepisz dane z jednej tabeli do drugiej.
DESC departments;

CREATE TABLE departments_copy (
DEPARTMENT_ID SMALLINT NOT NULL PRIMARY KEY,
DEPARTMENT_NAME VARCHAR(30) NOT NULL,
MANAGER_ID INT NULL,
LOCATION_ID SMALLINT NULL);

DESC departments_copy;

INSERT INTO departments_copy
SELECT * FROM departments;
-- WHERE condition;

SELECT * FROM departments_copy;

-- 3. Wstaw 3 rekordy do tabeli jobs przy pomocy jednego zapytania INSERT.
INSERT INTO jobs(job_id, job_title, min_salary, max_salary) VALUES
('YU_TEST', 'Junior Tester', '4000', '6000'),
('MD_TEST', 'Mid Tester', '6000', '10000'), 
('SR_TEST', 'Senior Tester', '11000', '18000');

-- 4. Wstaw rekord do tabeli departments.
INSERT INTO departments(department_id, department_name) VALUES ('280', 'Testing');

-- 5. Wstaw nowego pracownika do tabeli employees.

-- Najpierw usuwamy ograniczenia FOREIGN KEY z kolumn --
ALTER TABLE employees DROP FOREIGN KEY emp_dept_fk;
ALTER TABLE employees DROP FOREIGN KEY emp_job_fk;
ALTER TABLE employees DROP FOREIGN KEY emp_manager_fk;

INSERT INTO employees VALUES
(207, 'Smok', 'Wawelski', 'WAWEL', '222.333.4444', '2001-01-01', 'SC_SCARE', 9999, 0.10, 666, 90);

-- 6. Przygotuje kopię tabeli employees o nazwie: employees_copy.
DESC employees;

CREATE TABLE employees_copy (
EMPLOYEE_ID INT NOT NULL PRIMARY KEY,
FIRST_NAME VARCHAR(20) NULL,
LAST_NAME VARCHAR(25) NOT NULL,
EMAIL VARCHAR(25) NOT NULL,
PHONE_NUMBER VARCHAR(20) NULL,
HIRE_DATE datetime NOT NULL,
JOB_ID VARCHAR(10) NOT NULL,
SALARY decimal(8,2) NULL,
COMMISSION_PCT decimal(2,2) NULL,
MANAGER_ID INT NULL,
DEPARTMENT_ID smallint NULL);

-- 7. Napisz zapytanie które zamieni numer telefonu pracownika na informację “Nie dostępny” oraz
--    procent premii na 0.8 u wszystkich pracowników departamentu 110.
UPDATE employees SET phone_number = 'Not available', commission_pct = '0.8' WHERE department_id = 110;

-- 8. Napisz zapytanie które zamieni numer telefonu na informację “Nie dostępny” dla wszystkich
--    pracowników departamentu 80 którzy mają premię w wysokości poniżej 20%.
UPDATE employees SET phone_number = 'Not available' WHERE department_id = 80 AND commission_pct < 0.2;

-- 9. Napisz zapytanie które usunie dane pracownika: William Gietz.
DELETE FROM employees WHERE first_name LIKE 'William' AND last_name LIKE 'Gietz';



SELECT * FROM countries;
SELECT * FROM departments;
SELECT * FROM departments_copy;
SELECT * FROM employees;
SELECT * FROM employees_copy;
SELECT * FROM job_history;
SELECT * FROM jobs;
SELECT * FROM locations;
SELECT * FROM regions;