
const myArr = [4,6,3,8,0,5,2];
// console.log(myArr[3]);

const newArr = new Array(2,5,7,4,8,9,3);
// console.log(newArr[5])

// array methods

// newArr.push(12);
// newArr.push(64); // add new element to the array from last index
// newArr.pop(); // delete the last element of the array
// console.log(newArr)

// newArr.unshift(909) // add new element in the starting of the array
// newArr.shift() // delete the starting element of the array
// console.log(newArr.includes(56))
// console.log(newArr.indexOf(8))

// const anotherArray = newArr.join() // convert the array into string

// console.log(typeof anotherArray)

//  concept of slice and splice

// const arr2 = newArr.slice(1,4); // slice creates a subarray of the main array it does not include the last range
// console.log("A ", newArr)
// console.log(arr2)

// const arr3 = newArr.splice(1,4);  // splice manipulate the main or original array also it prints the last  range
// console.log("B", newArr);
// console.log(arr3)


const heros  = ["ironman", "antman", "spiderman", "thor"];
const anotherHeros = ["shaktiman", "krishh", "chhotabhim"];

// heros.push(anotherHeros)
// console.log(heros);
// console.log(heros[4][2])
// console.log(heros.concat(anotherHeros))

// // spread method 
// const new_heros = ["damien", "cade","lex"]
// const all_heros = [...heros, ...anotherHeros, ...new_heros]
// console.log(all_heros)


// const num_array = [1,2,4,[5,7,[3,8,9,[5,8,6]]]];
// const real_num_array = num_array.flat(Infinity)
// console.log(real_num_array)


// console.log(Array.isArray("preeti"))
// console.log(Array.from("preeti"));
// console.log(Array.from({name : "preeti"}))// research on it

// let score1 = 46;
// let score2 =74;
// let score3 = 87;
// console.log(Array.of(score1,score2,score3))


// filter function and reverse function 
 const my_new_array = ["wrath","rage","courtesy","honorable","distinguish","hospitality"];
 const filteredArray = my_new_array.filter((my_new_array) => my_new_array.length > 6)
//  console.log(filteredArray);

 const another_new_array = [34,67,89,1,32,45,87,99,54];
 const another_filtered_array = another_new_array.filter( check);

 function check(another_new_array){
    return another_new_array >= 50
 }
//  console.log(another_filtered_array)

const my_new_array2 = another_new_array.reverse(); 
// console.log(my_new_array2)



// map function

const array_of_num = [ 3,5,4,8,9,1];
const new_array_of_num = array_of_num.map((element) => element * element);
// console.log(new_array_of_num);

const array = [
    {name:"preetipal",age:20,clg:"chouksey"},
    {name:"jyotipal",age:22,clg:"gni"},
    {name:"nehapal",age:15,clg:"school"},
    {name:"priyapal",age:18,clg:"chouksey"}
]
const new_array = array.map(checkArr);
function checkArr(ele){
    return [ele.name,ele.clg].join();//without join fun it will give output as array
}
// console.log(new_array);


