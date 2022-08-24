DROP DATABASE IF EXISTS `sql_software`;
CREATE DATABASE `sql_software`; 
USE `sql_software`;


SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `Student_list` (
  `Student_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `center` varchar(50) NOT NULL,
  `CGPA` char(5) NOT NULL,
  PRIMARY KEY (`Student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `Student_list` VALUES (917,'Yonatan','Afewerk','Harar','4.00');
INSERT INTO `Student_list` VALUES (859,'Abel','Melaku','Harar','4.00');
INSERT INTO `Student_list` VALUES (862,'Abigiya','Alemayehu','Harar','4.00');
INSERT INTO `Student_list` VALUES (887,'Habtamu','Wolde','Harar','4.00');
INSERT INTO `Student_list` VALUES (894,'Lidiya','Alemayehu','Portland','4.00');
