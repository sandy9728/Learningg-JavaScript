// var c = 320
let a = 100
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner value : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);  


//  **** Nested scope **** //

function one(){
    const username = "sandy"

    function two(){
        const website = "Youtube"
        console.log(username);

    }
    // console.log(website);
    two()
    
}
// one()

if (true) {
    const username = "xyz "
    if (username === "xyz ") {
        const website = "Google"
        // console.log(username  + website);
    }
    // console.log(website);
}
// console.log(username);



//  **** Interesting  concept **** // 

console.log(addone(7));  // --> no error here 
function addone(num) {
        return num + 1
}
// console.log(addone(7));

// addtwo(8)   //error here. It depends on how the syntax is used
const addtwo = function(num) {
    return num + 2
}
console.log(addtwo(8));  