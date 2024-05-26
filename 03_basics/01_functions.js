    function sayMyName(){
        console.log("S");
        console.log("a");
        console.log("n");
        console.log("d");
        console.log("i");
        console.log("p");
    }
    // sayMyName()

    // function addTwoNumbers(num1, num2){
    //     console.log(num1 + num2);

    // }

    function addTwoNumbers(num1, num2){
        // let result = num1 + num2
        // return result  // Any code written after the return statement will not be executed.

        return num1 + num2

    }
    // addTwoNumbers(4, 8)
    // Storing under variable

    const result = addTwoNumbers(4, 8)
    // console.log("result:", result);


    function loginUserMessage(username = "xyz"){
        // if(username === undefined){
        //     console.log("please enter your username");
        //     return
        // }
        if(!username){
            console.log("please enter your username");
            return
        }
        return `${username} Just Logged In`
    }

    // console.log(loginUserMessage("Sandip Wagle"));
    // console.log(loginUserMessage("sandy"));


    function calculatecartprice(val1, val2, ...num1){
        return num1
    }
// console.log(calculatecartprice(200, 300, 400));

const user ={
    username: "sandip",
    price: 200
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
    // handelobject(user)
    handelobject({
        username: "sandy",
        price: 100
    })


const myNewArray = [200, 300, 400, 500]


function returnsecondvalue(getArray){
    return getArray[3]

}
// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200, 300, 400, 500]));
