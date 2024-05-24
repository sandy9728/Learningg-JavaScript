// const xUser = new Object() //----> singleton object
const xUser = {} // ----> non singleton object


xUser.id = "123abc"
xUser.name = "sandip"
xUser.isLoggedIn = false

// console.log(xUser);

const quoraUser = {
    email: "abc.hurfs.haa.com",
    fullname: {
            userfullname: {
               firstname: "SANDIP",
               lastname: "WAGLE"
            }
    }
}

// console.log(quoraUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },  
    {
        id: 2,
        email: "abcd@gmail.com"
    },
    {
        id: 3,
        email: "abcde@gmail.com"
    },
]

users[1].email
// console.log(xUser);
// console.log(Object.keys(xUser));
// console.log(Object.values(xUser));
// console.log(Object.entries(xUser));

// console.log(xUser.hasOwnProperty('isLoggedIn'));
// console.log(xUser.hasOwnProperty('isLogged'));



// **** Destructuring ****//

const course = {
    coursename: "JavaScript",
    courseprice: "1000",
    courseinstructor: "xyz"
}

// course.courseinstructor

const {courseinstructor} = course
const {courseinstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);


// **** API's ****//

// {
//     "name": "sandip",
//     "coursename": "JavaScript",
//     "Price": "free"

// }

[
    {},
    {},
    {}
]