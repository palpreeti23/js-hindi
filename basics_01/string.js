const name = "preeti";
const lastName = "pal";
// console.log(name + lastName) // outdated method to concatenate string 

// console.log(`my name is ${name} ${lastName} and my age iss 20`);

let myName = new String("preetipal");
// console.log(myName.valueOf())

// console.log(myName.length)
// console.log(myName.charAt(3))
// console.log(myName.indexOf("p")) // this will return the first index no of p if there are several no of p

// console.log(myName.toUpperCase());

// console.log(myName.substring(0,3)) // or we can write it as

const newString =  myName.substring(0,3); //  last valuee does not include on this. it will only include the value of index 0,1 and 2
// console.log(newString); // substring() does not take neg no as argument

// const anotherString = myName.slice(-3); // we can give neg no as argument in slice()
// console.log(anotherString)



const anotherName = "   ramkumar  ";
// console.log(anotherName);
//  console.log(anotherName.trim());
// console.log(anotherName.trimEnd());
// console.log(anotherName.trimStart());

let url = "https://preetipal/@preeti%20pal"
// console.log(url.replace("preeti", "priya"))
// console.log(url.replaceAll('preeti','priya'))  
// this will also replace the first value found and not the all value

// console.log(url.replace('%20', '-'))

// console.log(url.includes('priyapal'))

const gameName = "cricket-world-cup-asia"

// console.log(gameName.split('-')) // this fun will make an array of this string in basis of -.

const newGameName = gameName.split('')
// console.log(newGameName[5]);

let index = 4;
// console.log(gameName.at(index))

const sentence = "My black is Very cute and I just love the dog"
let searchEle = sentence.match(/[A-Z]/g)
console.log(sentence.search(/cute/gi))
// console.log(searchEle)
// console.log(sentence.match(/dog/g)) // parameter g searches for all possible no of search item
// console.log(sentence.match(/dog/gi)) // parameter gi searches for all possible no of search item with case sensitive


const accountId = '884596204763';
const FourDigitId = accountId.slice(-4);
const maskId = FourDigitId.padStart(accountId.length, '*')
// console.log(FourDigitId);
// console.log(maskId);

const start4Digit = accountId.slice(0,4)
const maskId2 = FourDigitId.padEnd(accountId.length, '*')
// console.log(start4Digit);
//  console.log(maskId2);
// console.log(accountId);
