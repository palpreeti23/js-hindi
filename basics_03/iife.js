// we use iife to ignore the global scope polution also to immediately execute any function

// normal function
// function one(){
//     console.log("DB CONNECTED"); 
// }
// one()

// IIFE 
(function one(){
    // named IIFE function
 console.log(`DB CONNECTED`);
}) ();

// to run two IIFE function at the same time we need to put semicolumn at first function
// basic IIFE syntax
// (definition)(execution)


( () => {
    //simple IIFE function
    console.log(`DB CONNECTED TOO`)
})();

// IIFE function with argument and parameter
( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
}) ("PREETI")

