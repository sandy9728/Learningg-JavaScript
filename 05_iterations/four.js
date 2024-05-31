// for in loop is used in objects

const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    ex : 'Express'

}
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


const languages = ["js", "ts", "java", "cpp"]
for (const key in languages) {
    // console.log(languages[key]);
}


// const map = new Map()
// map.set('Nep', "Nepal")
// map.set('AU', "Australia")
// map.set('FR', "France")
// map.set('JP', "Japan")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
  
// }