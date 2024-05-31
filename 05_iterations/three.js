// **** for of **** //
// for of loop is used in strings
// ["", "", ""]   
// [{}, {}, {}] //objects under array

const array = [1, 2, 3, 4, 5]
for (const num of array) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet !== ' ') {
        // console.log(`Each char is ${greet}`);
        
   }
    }

// **** Map **** //


const map = new Map()
map.set('Nep', "Nepal")
map.set('AU', "Australia")
map.set('FR', "France")
map.set('JP', "Japan")
map.set('FR', "France") // maps are known for unique valueand they override the same value. 
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
    
}


const myObj =   {
    Book1 : 'Think and grow rich',
    'Book2' : 'Atomic Habits',
    
}
// for (const [key, value] of myObj) {
//     console.log(key, ':', value);
    
// }

    

