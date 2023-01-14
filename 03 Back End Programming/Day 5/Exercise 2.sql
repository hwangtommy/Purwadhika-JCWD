use purwadhika_branch;

create table Branch (id int auto_increment, branch_name varchar(3), pic varchar(10), address varchar(20), city varchar(20), province varchar(10), primary key (id));

insert into Branch (branch_name, pic, address, city, province) values ("BSD", "THOMAS", "GREEN OFFICE PARK 9", "BSD", "TANGERANG");
insert into Branch (branch_name, pic, address, city, province) values ("JKT", "BUDI", "MSIG TOWER", "JAKARTA SELATAN", "JAKARTA");
insert into Branch (branch_name, pic, address, city, province) values ("BTM", "ANGEL", "NONGSA", "BATAM", "KEP.RIAU");

update Branch set pic="DONO" where branch_name="BSD";

insert into Branch (branch_name, pic, address, city, province) values ("BLI", "TONO", "GIANYAR", "GIANYAR", "BALI");