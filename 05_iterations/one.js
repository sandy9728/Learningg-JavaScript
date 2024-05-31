// **** for loop **** //    

    for (let i = 0; i < 10; i++) {
        const element = i;
        // console.log(element);
        
    }
    // console.log(element);   can't access element ouside of scope
    
    
    for (let i = 0; i < 10; i++) {
        const element = i;
        if (element == 5) {
            // console.log("The number is five");
        }
        // console.log(element);
        
    }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
    //  console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + "*" + j + ' = ' + i * j );   
            
    }
    
}
let myArr = ["Thor", "Groot", "Nebula", "Rocket"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// **** break and continue **** //



for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`Number five detected`);
        break  // Exits the loop after 5
    }
    // console.log(`Value of i is ${index}`);
    
}



for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Number five detected`);
        continue // Skips the iteration when i equals 5
    }
    console.log(`Value of i is ${index}`);
    
}