const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = myNums.map( (num) => num + 2)

const newNums = myNums
               .map((num) => num * 2)
               .map( (num) => num / 2 )
               .filter( (num) => num >= 4)
console.log(newNums);
