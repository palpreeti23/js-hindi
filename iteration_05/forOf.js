
// for of loop

let myArray = ["jyoti","preeti","priya","neha"];

for (const arr of myArray) {
    // console.log(arr);
}

const myArr = [2,4,7,6,8];
for (const arr of myArr) {
    // console.log(arr);
}


//  Maps are particularly advantageous when dealing with large datasets that require frequent changes than objects

let map = new Map();
map.set('IN',"india");
map.set('USA',"united states of amerika");
map.set('FR',"france");

// console.log(map);
for (const [key,value] of map) {
    console.log(key,"=>",value);
}


// for of loop work better on objects.

// in objects we cant user object name directly we use object.entries(objname)

const myObj = {
    name1:"preeti",
    age : 19
}

for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}:${value}`)
}