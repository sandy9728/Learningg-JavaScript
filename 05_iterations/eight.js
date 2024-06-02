const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curvval: ${curval}`);
//     return acc + curval
// }, 0 )
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'chicken Meat',
        price: 500
    },
    {
        itemName: 'oats',
        price: 350
    },
    {
        itemName: 'Monitor',
        price: 30000
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);