class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const name = new user("Sandip")
// console.log(name.createId());

class teacher extends user {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const apple = new teacher("I-phone", "apple@gmail.com")
console.log(apple.createId());