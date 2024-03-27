let name = "preeti";
// console.log(name);
// console.log(typeof (name));

let num = null;
let stringNum = Number(num)
console.log(stringNum);
console.log(typeof (stringNum));

// '33swdd' => NaN
//'33' => 33


let loggedIn = 0;
let booleanLoggedIn = Boolean(loggedIn);
console.log(booleanLoggedIn)
console.log(typeof booleanLoggedIn)

// 1 => true && 0 => false
// "preeti" => true && "" => false

let num1 = 33
let isString = String(num1)
console.log(isString);
console.log(typeof isString)

 /* 
  ----------------comparision---------------
 */
// console.log("2" > 1); 
// here javascript changes the datatype of 2 as number and compare 
//but this not gives the predictable result everytime

// console.log("2" ===2)
// now this is false bcoz it also checks for its datatype

console.log(null == 0)
// comparision operator and equality check operators work differently in javascript
// and both have different syntax

// console.log(null > 0)
// console.log(null >= 0) // it convert null to 0 then it will be right

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined >= 0)
