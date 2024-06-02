// const languages = ["js", "ts", "java", "cpp"]
// const values = languages.forEach ( (item) => {
//     console.log(item);
// } )
// console.log(values);


const myNums = [1, 2, 3, 4, 5 ,6, 7 ,8]  
// const newNums = myNums.filter( (num) => num > 6 )
// const newNums = myNums.filter( (num) => {  // you should use return if you use create a scope
//    return num > 6 
// })
// console.log(newNums);


// const newNums = []
// myNums.forEach ( (num) => {
//     if ( num > 4) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);



const books = [
    {title: 'Book one',   genre: 'fiction',   publish: 1990, 
    edition: 2004},
    {title: 'Book two',   genre: 'fantasy',   publish: 1991,
    edition: 2005},
    {title: 'Book three', genre: 'Action',    publish: 1992, 
    edition: 2006},
    {title: 'Book four',  genre: 'History',   publish: 1993, 
    edition: 2007},
    {title: 'Book five',  genre: 'si-fi',     publish: 1994, 
    edition: 2008},
    {title: 'Book six',   genre: 'adventure', publish: 1995, 
    edition: 2009},
    {title: 'Book seven', genre: 'comedy',    publish: 1996, 
    edition: 2010},
    {title: 'Book eight', genre: 'fiction',     publish: 1997, 
    edition: 2011},
    {title: 'Book nine',  genre: 'fiction',   publish: 1998, 
    edition: 2012},
    {title: 'Book ten',   genre: 'horror',    publish: 1999, 
    edition: 20013}
];

let userBooks = books.filter( (bbok) => bbok.genre === 'fiction' )
userBooks = books.filter( (bbok) => {
    return bbok.publish >= 1994 && bbok.genre === 'fiction'
} )

console.log(userBooks);