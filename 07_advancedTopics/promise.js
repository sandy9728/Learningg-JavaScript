const promiseOne = new Promise(function(resolve, reject){
    // Do and async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username: "sandy", email:"sandy@au.com.ruf"})
    }, 1000)

})
promiseThree.then(function(user){
    console.log(user);
})    

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"anonymous", location: "Earth"})
            
        }else{
            reject("ERROR: Something is wrong")
        }
    }, 1000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return  user.username
})
.then((user) => {
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"arcade", price: "500"})
            
        }else{
            reject("ERROR: Arcade is wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response =  await promiseFive
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

