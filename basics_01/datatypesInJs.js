
// javascript is a dynamically typed language means variables datatypes is defined by its value at runtime
// and it can be changed by the value of the variable

//mainly there is only two types of data

// 1.primitive datatypes
/*
7 types => number, string, boolean, bigInt, null, undefined, symbol
*/
let number = 33;

let bigNumber = 465887729596562764629n;
// console.log(typeof bigNumber) // datatype of bigInt is gigInt

let isSent = true;
// console.log(typeof isSent)

const tempreture = null;
// console.log(typeof tempreture)
// const age;
let state  = "cg"

let id = Symbol("334");
let nextId = Symbol(334);
// console.log(id == nextId)
// console.log(typeof id)



//2. Reference (non primitive datatypes) 

// array, object, function // all non primitive datatype's return type is object

let array = ["preeti", "priya","neha","jyoti"]; // datatyoe of array is object

// console.log(typeof array)

let myObj = {
    name: "preeti",
    age: 20,
}
// console.log(typeof myObj) // datatyoe of object is object

let myFunction = function(){
    // console.log("preeti pal")
}
// console.log(typeof myFunction)  //datatyoe of function is function and called as object function


/* typeof val                 return type

number            =>             number
string            =>             string
boolen            =>             boolean   
bigInt            =>             bigInt
symbol            =>             symbol
null              =>             object     
undefined         =>             undefined
array             =>             object
object            =>             object
function          =>             function/object function

*/

//*******************stack and heep memory*********************

// stack memory (primitive datatypes ), heap (non-primitive/ reference)

let myEmail = "palpreeti@445"

let anotherEmail = myEmail; // in stack memory it gives the copy of main value

anotherEmail = "priyapal@23" // it will only change the copy value of data than original value

console.log(anotherEmail);
console.log(myEmail)


let myObject ={

    name : "palpreeti",
    mailId : "preeti223"
}

myObjectTwo = myObject

myObjectTwo.mailId = "priyapal"// in heap memory it gives the reference of original value so orignal value will be changed directly
console.log(myObject)
console.log(myObjectTwo)