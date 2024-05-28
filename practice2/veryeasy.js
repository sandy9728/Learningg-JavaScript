// Q.No.1) Create a function that takes two numbers as arguments and returns their sum.

function addition(a, b) {
    return a + b;
    
}
// console.log(addition(2, 4));

//Q.No.2)Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    let area = (base * height) / 2;
    return area;
}
// console.log(triArea(8 ,10));


// Q.No.3)Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a){
return `something ${a}`;
}
let word = giveMeSomething
// console.log(word("is wonderful"));

// Q.No.4)Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function polygon(n){
    return (n - 2)* 180
}
// console.log(polygon(4));


// Q.No.5)Fix the code in the code tab to pass this challenge (only syntax errors).
//  Look at the examples below to get an idea of what the function should do.
// function squaed(b) {
// 	return a * a
// }

function squared(b){
    return b * b
}
// console.log(squared(5));


// Q.No.6)Create a function that takes voltage and current and returns the calculated power.
function power(voltage, current){
   let power =  voltage * current;
   return `${power}W is the total calculated power`
}
// console.log(power(200, 5));

// Q.No.7)Create a function that takes the age in years and returns the age in days.

function calAge(age){
    return age * 365
}
// console.log(calAge(20));


// Q.No.8)Create a function that takes length and width and finds the perimeter of a rectangle.
function perimeter(length, width){
    let perimeter =  2 * (length + width);
    // return `The perimeter of rectange is ${perimeter} ` 
}
// console.log(perimeter(10, 20));

// Q.No.9)Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b){
    let sum = a + b;
    return sum<100
}
// console.log(lessThan100(20, 30));    

// Q.No.10)You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.

function finalPoints(twopointers, threepointers){
    let twopointer = twopointers * 2;
    let threepointer = threepointers* 3;
    let totalValue = twopointer + threepointer;
    return totalValue
    
}
// console.log(finalPoints(4, 6));