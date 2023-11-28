//"this " refers to current context/value;

const user = {

    name : "preeti",
    age : 20,
    price : 599,

    wellcomeMag : function(){

      console.log(`${this.name}, just logged in`);
      console.log(this)
    }

}
// user.wellcomeMag();
// user.name = "nehapal";
// user.wellcomeMag()
// console.log(this)// this will give an empty object
//same thing in browser will give window object as it is a global object


//"this" keyword only works in objects and not in arrays
// function testfun(){
//     const name = "preetipal"
//     console.log(this.name)
// }

// testfun()

// arrow function

const newfun = (num1,num2) => {
    return num1+num2;
    // console.log(num1+num2)
}
// newfun(8,9)
// console.log(newfun(4,6));

//dont need to use return when there is no braces
const addTwo = (num1,num2) => num1+num2;
console.log(addTwo(5,8))

const addition = (num1,num2) => ( num1+num2);
console.log(addition(4,9))

const myobj = () => ({name : "preeti",age : 20})

console.log(myobj())
