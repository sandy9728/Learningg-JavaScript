//  **** for each loop **** //
const languages = ["js", "ts", "java", "cpp"]

languages.forEach( function (val) {
    // console.log(val);
} )

languages.forEach( (items) => {
    // console .log(items);
})

function printMe (items){
    // console.log(items);
}
languages.forEach(printMe)


languages.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})