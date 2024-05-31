const userEmail = "san.abc.gmail.com"

// if (userEmail) {
    // console.log("Got user Email");
// } else {
    // console.log("No user Email");
// }


// Falsy values

// false, 0, _0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// "0", 'false', " ", [], { }, function(){} 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptobj = {}
if (Object.keys(emptobj).length === 0) {
    // console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 4 ?? 8
// val1 = null ?? 10

// val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

// console.log(val1);


// Terniary operator

// condition ? true : false

const iceBox = 10
iceBox >= 8 ? console.log("Less than 10") : console.log("More than 10");
