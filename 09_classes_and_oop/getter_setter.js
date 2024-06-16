class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }


    get password(){
        return this._password.toUpperCase()
        
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sandip = new user("sandip@.com", "abc123")
// console.log(sandip.password);
console.log(sandip.email);