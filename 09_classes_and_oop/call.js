function setUsername(username){
    // complex DB calls
    this.username = username
}


function createUser (username, email, password){

    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const details = new createUser("Shadow", "shadow.hrf.gg.com", "1234321")
console.log(details);