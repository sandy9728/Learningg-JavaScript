const score = 800
console.log( score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(4));


const otherNUmber = 33.668
console.log(otherNUmber.toPrecision(2));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


//..........Maths..........//


console.log(Math);
console.log(Math.abs(-8));   //(Absolute value (abs) only converts negative number into positive)
console.log(Math.round(8.45));  
console.log(Math.ceil(8.0001));  
//(It is a function that is used to return the smallest 
//integer value that is greater than or equal to a number)
console.log(Math.floor(8.1)); 
//(It is a function that is used to return the largest integer 
//value that is less than or equal to a number)
console.log(Math.min(455, 354, 24, 1, 22));
console.log(Math.max(455, 354, 24, 1, 22));


console.log(Math.random());  //always gives value under 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 + min)));