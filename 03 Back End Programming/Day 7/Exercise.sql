use sakila;

select country_id, country from sakila.country where country in
(select country from sakila.country where country="China" or country="Bangladesh" or country="India");

select last_name, first_name from actor where last_name like "%od%";

alter table actor add middle_name varchar(45) after first_name;

select last_name, count(last_name) from sakila.actor group by last_name having count(last_name)>=2;

select staff.first_name, staff.last_name, address.address from staff inner join address on staff.address_id=address.address_id;

select film.title, count(film.title="Hunchback Impossible") from inventory join film on inventory.film_id = film.film_id where film.title="Hunchback Impossible";

select film.title, count(film.title) from film 
join (select rental.inventory_id, inventory.film_id from rental 
join inventory on rental.inventory_id=inventory.inventory_id) as n on film.film_id=n.film_id group by film.title order by count(film.title) desc;

select store.id 