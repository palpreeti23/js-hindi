// for in loop 

const myObj = {
    name:"preeti",
    surname:"pal",
    age:20
}

for (const key in myObj) {   
    // console.log(myObj[key]);
    // console.log(`${key} is the value of ${myObj[key]}`);
}

const language = ["java","python","cpp","ruby"];

for (const key in language) {
    
        // console.log(language[key]);
    
}

// map is not iterable

let map = new Map();
map.set('IN',"india");
map.set('USA',"united states of amerika");
map.set('FR',"france");

for (const key in map) {
   console.log(key)
}