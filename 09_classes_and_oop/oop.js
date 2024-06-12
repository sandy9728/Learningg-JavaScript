// const user = {
//     userName : 'sandy',
//     loginCount : '7',
//     signedIn : 'true',

//     getUserDetails: function(){
//         console.log("Got user data from the database");
//          console.log(`username: ${this.userName}`);
//         console.log(this);
//     }
// }
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()  //The new key is the constructor function.

function user (userName, loginCount, isLoggedIn){
    this.userName = userName;       
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn; 

    this.greetings = function(){
        console.log(`welcome ${this.userName}`);
    }
    
    return this

}


//whenever you use new keyword then one empty object is created which is called instance
const userOne = new user("sandy", 8, true)
const userTwo = new user("namechange", 12, false)
console.log(userOne.constructor);
// console.log(userTwo);
   
