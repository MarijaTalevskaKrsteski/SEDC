//Write a JavaScript program that will calculate area of Circle. TIP: area = π * r2
console.log("======Exercise 1======");
let r = prompt("Enter the radius of the circle: ");
let parsedR = parseInt(r);
let pi = 3.14159
let r2 = parsedR * parsedR;
let area = pi * r2;

console.log("The radius of the circle is: " + parsedR + "\nThe area of the Circle is: " + area);


//Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.
console.log("======Exercise 2======");
let phone = prompt("Enter the number of phones: ");
let parsedPhone = parseInt(phone);
let price = 119.95;
let tax = 1.05;
//A moze i vaka, price = 119.95 * 1.05;
let price_with_tax = price * tax;
let sum = parsedPhone * price_with_tax;

console.log("The number of phones you have entered is: " + parsedPhone + ".\nThe price of one phone is: " + price + " and the tax is 5%. \nThe total amount of " + parsedPhone + " phone/s with tax is " + sum);