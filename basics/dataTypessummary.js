// primitive

// 7 types : Number, string, boolean, undefined, null, symbol, BigInt


const score = 100
const scoreValue = 100.3   

 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



const bigNumber = 7364897653689568976349853948538959834567n 
//adingg n converts the data type into big int



// Reefrence (Non primitive)

// Array, Objects, Functions


const animalName = ["tiger", "wolf", "gorilla"];
let personalInformation = {
    name: "John",
    age: 18,
}

// treating function as variable

const myFunction = function(){
    console.log('Hello World');
}




// Stack(Primitive data types are used in stack), Heap(Non-primitive data type)



let foodName = "Mango"

let anotherFood = foodName
anotherFood = "Watermelon"

console.log(foodName);
console.log(anotherFood);


let userOne = {
    email : "sandy@gmail.com",
    Esewa : "letitbex"
}
let userTwo = userOne

userTwo.email = "changingit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);