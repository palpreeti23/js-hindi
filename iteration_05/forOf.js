
// for of loop

let myArray = ["jyoti","preeti","priya","neha"];

for (const arr of myArray) {
    // console.log(arr);
}

const myArr = [2,4,7,6,8];
for (const arr of myArr) {
    // console.log(arr);
}

let map = new Map();
map.set('IN',"india");
map.set('USA',"united states of amerika");
map.set('FR',"france");

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,"=>",value);
}


// for of loop does not work on objects.
const myObj = {
    'name1':"preeti",
    'name2':"priya"
}

for (const value of myObj) {
    console.log(value);
}