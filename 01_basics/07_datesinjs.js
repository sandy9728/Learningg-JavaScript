// *********Dates********//

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 4, 12, 8, 55)
// let myCreatedDate = new Date("2024-4-12")
let myCreatedDate = new Date("4-12-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/100));

let newDate = new Date
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());


console.log(`The date is ${newDate.getDate()} and the month is ${newDate.getMonth()}`);

newDate.toLocaleString('default',{
    weekday : "long"

})



