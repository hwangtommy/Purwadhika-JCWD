use world;

select Name, Population from country order by Population desc limit 1;

select Name, Population from country order by Population desc limit 1, 1;

select Name from country order by Population limit 3;

select Name from country order by Population limit 2, 1;

select Continent, sum(SurfaceArea) from country group by Continent order by sum(SurfaceArea) desc limit 1;