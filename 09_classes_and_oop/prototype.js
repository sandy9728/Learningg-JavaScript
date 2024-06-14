// let myName = "sandip  "
// let myFullName = "sandip wagle  "


// console.log(myName.trueLength);
// console.log(myName.trimEnd().length);


let heroesName = ["Moonknight", "Deadpool"]

let heroPower = {
    Moonknight: "Split personality",
    Deadpoool: "Regeneration",

    getDeadpoolPower: function(){
        console.log(`The power of deadpool is ${this.Deadpoool}`);

    }

}

Object.prototype.heroes = function(){
    console.log(`heroes is present in all objects`);
}

Array.prototype.hero = function(){
    // console.log(`hero is present `);
}


// heroPower.heroes()
// heroPower.heroes()
// heroesName.hero( )
// heroPower.hero( )

// **** Inheritance **** //


const user = {
    name: "bliss",
    email:"bliss@smth.gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailabe: false
}


const TASupport = {
   makeAssignment: 'js tutorial',
   fullTime: false,
   __proto__: teachingSupport
}

teacher.__proto__ = user

//** modern syntax **//
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = 'snakeShadow   ' 
String.prototype.trueLength = function(){
        console.log(`${this}`);
        // console.log(`${this.name}`);
        console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"sandy".trueLength()
"Gym".trueLength()
