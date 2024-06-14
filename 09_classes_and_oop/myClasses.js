// ** ES6 **//

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    encryptPassword(){
        return `${this.password} ***`
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}


const book = new User("The leader in you", "DaleCarnegie@witer.hf.com", "43276")
console.log(book.encryptPassword());
console.log(book.changeUserName());


// ** behind the scene **//

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password} ***` 
}
user.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}` 
}
const tech = new user("Artificial Intelligence", "technology.abc.google.com", "122886")
console.log(tech.encryptPassword());
console.log(tech.changeUserName());
 