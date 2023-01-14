create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;

show databases like "purwadhika%";

drop database purwadhika_schedule;

use purwadhika_student;
create table Student (id int, last_name varchar(20), first_name varchar(20), address tinytext, city varchar(20));

alter table Student add email varchar(50);

alter table Student add column (gender enum("male", "female"), batch_code varchar(10), phone_number int(15), alternative_phone_number int(15));

alter table Student change alternative_phone_number description varchar(50);

alter table Student drop gender;