const userName = "";
if(userName){
    console.log("hello preeti welcome")
}
else{
    console.log("you are not welcomed here")
}

//falsy values
// false , 0 , -0,"", bigInt 0n, null, undefined, NaN

// truthy values
// "0", "false"," ", [], {}, function(){}

const myArray = [];
if(myArray.length === 0){
    console.log("array is empty");
}

const myObj = {};
if((Object.keys(myObj)).length === 0){
    console.log("object is empty")
}

// nullish coalescing operator (??) : null, undefined

 let val1 ;
//  val1 = 10 ?? 20
// val1 = null ?? 20
// val1 = undefined ?? 10 ?? 20
 console.log(val1);

 //terniary operator (?)

 // condition ? true : false;

 const price = 900;

 price <=500 ? console.log("you are right"): console.log("you are so wrong")