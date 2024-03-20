// const user = {
//     username : "preeti pal",
//     age : 20,
//     isLoggedIn : true,

//     msg: function(){
//         console.log(`username ${this.username}`)
//         console.log(this)
//     }

// }

// console.log(user.username);
// console.log(user.msg())
// console.log(this)


 function user(username, age, isLoggedIn,){

   this.username=username;
    this.age=age;
    this.isLoggedIn=isLoggedIn;

    this.msg = function(){
        console.log(`hello${this.username}`)
    }

     return this;
}

//new is a constructor
//constuctor creates new instance 

const userOne = new user('preeti',20,true);
const userTwo = new user("nehapal",16,false);

//constructor is reference of itself
console.log(userOne.constructor);
// console.log(userTwo)

// new create empty objects or instence
//then this new calls a constructor 
//all the arguments are injected into this keyword
//finally we get the output

