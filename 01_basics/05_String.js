const name = "sandip"
const repoCount = 8

// console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const brandName = new String('G-ym_Shark')

console.log(brandName[0]);
console.log(brandName.__proto__);
console.log(brandName.length);
console.log(brandName.toUpperCase());
console.log(brandName.charAt(7));
console.log(brandName.indexOf('S'));

const newString = brandName.substring(0, 3)
console.log(newString);

const anotherString = brandName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sandip    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandip.com/sandip%20wagle"
console.log(url.replace('%20','@'));

console.log(url.includes('sandy'));

console.log(brandName.split('-'));
