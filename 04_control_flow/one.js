//  **** If **** //


if (2 == "2"){
    // console.log("Executed");

}
if (2 === "2"){
    // console.log("Executed");

}

const temperature = 52

if (temperature < 50 ){
    // console.log("The temperature is less than 50 degree");
}
else{
    // console.log("The temperature is greater than 50 degree");
}


const Score = 200
if(Score > 100) {
    const power = "Speed"
    // console.log(`user speed is ${power}`);
}
// console.log(`user speed is ${score}`);  //This can't be executed outside the scope 

// const balance = 1000
// if(balance > 5000) console.log("Test");


// if (balance < 500) {
//     console.log("The balance is less than 500");
    
    
// }
// else if (balance < 850) {
//     console.log("The balance is less than 850");    

// } else if (balance < 900) {
//     console.log("The balance is less than 850");    
// } else {
//     console.log("The balance is less than 1500");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitcard) {
    // console.log("Allowed");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("userLoggedIn");
    
}
