const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);

// console.log(Math.PI);
//  Math.PI = 4
// console.log(Math.PI);

const names = {
    name: 'Purple',
    price: 5400,
    isAvailable: true,

    buyColor: function(){
        console.log("couldn't buy the color");
    }
}

console.log(Object.getOwnPropertyDescriptor(names, "price"));


Object.defineProperty(names, 'name', {
    // writable: false,
    enumerable: false   
})
console.log(Object.getOwnPropertyDescriptor(names, "name"));

for (let [key, value] of Object.entries(names)) {

    if (typeof value !== 'function') {
        
        console.log(`${key}:${value}`);
    }
}