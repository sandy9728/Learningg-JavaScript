// **** SIngleton ****//


// **** objects literals ****//


const mySym = Symbol("Key1")


const JsUser = {
    name: "sandip",
    "full Name": "sandip wagle",
    [mySym]: "mykey1",
    age: 20,
    location: "kapan/kathmandu",
    email: "sandy@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["wednesday", "thursday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sandip.com.huf.ru"
// Object.freeze(JsUser)
JsUser.email = "sandip.ruhuh.ads.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
}
JsUser.greetingTwo = function(){
    console.log(`Hello World, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());