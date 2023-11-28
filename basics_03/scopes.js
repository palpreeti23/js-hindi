//global scope
var c = 3000;


// block scope
if (true){

    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(c)

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){

    const name = "preeti";

    function two (){
        const age = 20;
        console.log(name)
    }

    // console.log(age)
    two()
}

// console.log(name);
one()


if(true){

    const name = 'preeti';

    if(name === 'preeti'){

        const lastName = 'pal';
        console.log(name + lastName)
    }

    // console.log(lastName);
}

// console.log(name);
console.log(addOne(5)); // in this case we can access the function before initialization
function addOne (nums){

   return(nums + 1);
}


console.log(addTwo(7)); // in this case where we hold the fuction in a variable we cannot access the function before initialization
const addTwo = function(nums){

   return(nums + 2)
}

