// Object.create

// Object literals

const mySym = Symbol("specialSymbol")
// this is a non sinleton objects
const myObj = {

    name : "preeti",
    "full name" : "preeti pal",
    age : 20,
    mailId : "preetipal@pal.com",
    getsOnline :["sunday","monday"],
    [mySym]: "specialSymbols",
    clg : "chouksey",
    isLoggedIn : true
}

// ways to access object element
// console.log(myObj.mailId);
// console.log(myObj[mySym]); //used for symbols only
// console.log(myObj["clg"])
// console.log(myObj["full name"]); // only way to access this kind of value

// console.log(myObj)

myObj.mailId = "priyapal@42687.com";
// console.log(myObj)

// Object.freeze(myObj); 

myObj.mailId = "nehapal@3526.com";
// console.log(myObj);

myObj.greeting = function(){
    console.log("hello JS users");
}

myObj.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

// console.log(myObj.greeting());
// console.log(myObj.greeting2());


// singleton objects

const instaUser = {}

instaUser.name = "preeti";
instaUser.age = 20;
instaUser.email = "oabd@653.com";

// console.log(instaUser);

const currentUser = {

    emailId : "palpreeti3454@insta.com",
    userName :{
  
        fullName  :{
            firstName : "preeti",
            lastName :"pal"
        }
    }
}

// console.log(currentUser.userName.fullName.lastName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2); 
// const obj3 = {...obj1, ...obj2} // most used way to merge  two objects

// console.log(obj3);


const user =[
    {
        mailId :"palpreeti.com",
        age : 20,
        isLoggedIn : false
    },
    {
        mailId :"priya.com",
        age : 20,
        isLoggedIn : false
    },
    {
        mailId :"palnehaa.com",
        age : 20,
        isLoggedIn : false
    },
    {
        mailId :"palpreeti.com",
        age : 20,
        isLoggedIn : false
    },
    {
        mailId :"palpreeti.com",
        age : 20,
        isLoggedIn : false
    },
]

// console.log(user[2].mailId);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('mailId')); // checks wather the property is avail or not.


