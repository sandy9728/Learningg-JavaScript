// Immediately invoked function expression  (IIFE)
    

(function one(){  //This is named iife
    console.log(`DataBase connected`);
}) ();  // A semicolon should be added if you want to execute the code below it

( () => {
        console.log(`DataBase two connected`);
    }
)();

( (name) => {   //This is simple iife
        console.log(`DataBase two connected ${name}`);
    }
)('with server');