const user = {
    username : "sandy",
    price : 2000,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Tom"
// user.welcomeMessage()

// console.log(this);

// console.log("Hello World");


// function tree(){
//     let treeName = "Mango"
//     console.log(this.treename);
// }
// tree()

// const tree  = function(){
//     let treeName = "Apple"
//     console.log(this.treeName);
// }
// tree()


const tree  = () => {
    let treeName = "Apple"
    // console.log(this);
    // console.log(this.treeName);
}
// tree()

// **** Basic Arrow Function **** //

// const addTwo = (num1, num2) => {   //Arrow syntax
//      return num1 + num2

// }
// console.log(addTwo(2, 4));

// **** Implicit Return **** //

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({name : "san"})


console.log(addTwo(2, 4));

