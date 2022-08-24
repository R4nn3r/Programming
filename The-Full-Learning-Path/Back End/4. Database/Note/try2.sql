SELECT 
	s.student_id AS 'Id-No',
    s.name AS 'Name',
    s.major AS 'Major',
    s.sex AS 'Student Sex',
    b.branch_id AS 'Center Id',
    b.branch_name AS 'Center',
    i.emp_id AS 'Lec Id',
    i.first_name AS 'First Name',
    i.last_name AS 'Last Name'
FROM student s 
JOIN branch b 
	ON s.branch_id = b.branch_id
JOIN instructer i
	ON i.branch_id = b.branch_id 
    