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
    console.log(loginUserMessage("sandy"));
