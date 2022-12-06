// Question 1: Write a code to find the area of a rectangle
let width = 10;
let height = 15;
let area = width* height;
console.log("Area of the rectangle is " + area);

// Question 2: Write a code to find the perimeter of a rectangle
width = 10;
height = 15;
let perimeter = 2*width + 2*height;
console.log("Perimeter of the rectangle is " + perimeter);

// Question 3: Write a code to find the diameter, circumference, and area of a circle
let radius = 10;
diameter = 2*radius;
circumference = 2*Math.PI*radius;
area = 2*Math.PI*Math.pow (radius, 2);
console.log("Diameter of the rectangle is " + diameter);
console.log("Circumference of the rectangle is " + circumference);
console.log("Area of the rectangle is " + area);

// Question 4: Write a code to find angles of a triange if two angles are given
let a = 90;
let b = 45;
let angle = 180-a-b;
console.log(angle);

// Question 5: Write a code to get difference between dates in days
let date1 = new Date("11/01/2022");
let date2 = new Date("11/08/2022");

let diffTime = date2.getTime() - date1.getTime()
console.log(diffTime)
console.log(date2-date1);
let diffDays = diffTime / (1000 * 60 * 60 * 24)
//mili sec to sec => 1000 
// sec to min => 60 
// min to hour => 60 
// hour to day => 24

console.log(`the difference between ${date2} and ${date1} is ${diffDays} days`);

// Question 6: Write a code to convert days to years, months and days.
let totalDays = 400
years = Math.floor(totalDays / 365)
months = Math.floor(totalDays % 365 / 30)
days =  totalDays % 365 % 30

console.log(`${totalDays} days is  ${years} Year(s), ${months} Month(s) ${days} Day(s)`);