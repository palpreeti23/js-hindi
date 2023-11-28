// function 

function addTwoNum (num1,num2){

//    let result = num1+num2;
//     return result;
    return num1+num2;
}

// const result = addTwoNum(4,6);
// console.log(result);
// console.log(addTwoNum(2,3));

function greetings(userName ="sam")//this will print sam if there is no argument but it wont show undefined at any cost. if we add argument then that will over write the sam/ default value
{

    if(!userName){
          return `please enter a name first`
}
    // if(userName===undefined){
    //     return`please enter a name first`
    // }
 return  `${userName} just logged in`;
}
// console.log(greetings("preeti"));
// console.log(greetings())// it wii show undefined ;

// rest operator
// function calculatePrice(...nums){
//  return nums;
// }

// console.log(calculatePrice(3,5,7,8))

function calculatePrice(val1,val2,val3,...nums){
    return nums;
}

// console.log(calculatePrice(34,56,89,234,56,3222,57)) // first second and third value will be occupy by val1,2,3.


const user ={
    name : " preeti",
    age : 20,
    price : 73937
}


function userDetails(anyObjests){

    console.log(`user name is ${anyObjests.name} and the age is ${anyObjests.age} and also the price is ${anyObjests.price}`);
}

// userDetails({

//     name : "nehapal",
//     age :15,
//     price :3827476
// })

// console.log(userDetails(user))


const myArray = [200,4000,599,4956];

function selectSecondNum(getArray){

   return getArray[1];
}

console.log(selectSecondNum(myArray))
// console.log(selectSecondNum([200,300,44000,5000,6970]));







