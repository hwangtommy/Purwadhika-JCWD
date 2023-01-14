use sakila;

select first_name from actor;
select last_name from actor;

select actor_id, first_name, last_name from actor where first_name="Joe";

select address, district, city_id from address where district="California" OR district="Alberta" OR district="Mekka";

select last_name, count(*) from actor group by last_name having last_name="WOOD";

select customer_id from customer;
select customer_id, sum(amount) from payment group by customer_id having sum(amount) > 20;

select customer_id, sum(amount) from payment group by customer_id order by sum(amount) desc limit 3;

insert into actor (first_name, last_name) values ("JHONNY", "DAVIS");

insert into actor (first_name, last_name) values ("ADAM", "DAVIS"), ("JEREMY", "DAVIS"), ("CRAIG", "DAVIS"), ("STEVE", "DAVIS");

select last_name, count(*) from actor group by last_name having last_name="DAVIS";

delete from actor where last_name="DAVIS" AND first_name="JENNIFER";

update actor set first_name="GEORGE" where last_name="DAVIS";

select actor_id, count(*) from film_actor group by actor_id order by count(*) desc limit 10;