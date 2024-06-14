class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is: ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const name = new Teacher("Robert", "Robert@gmail.com", "3496857")
name.logMe()

const modelName = new user("I-Phone")
modelName.logMe()

console.log(name instanceof user);