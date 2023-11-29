const userAge = 30;
if(userAge >= 18){
    console.log("you can drive!!!");
}

const userName = "preeti" ;
if(userName == "preeti"){
    console.log("you can logg in to our channel");
}else{
    console.log("you can't logg in to our channel");
}

const emailLoggedIn = false;
const googleLoggedIN = true;
  if (emailLoggedIn || googleLoggedIN){
    console.log("you can purchase things now");
  }
else{
    console.log("you can not purchase things here..")
}


const instaId = true;
const instaPswrd = false;
if(instaId && instaPswrd){
    console.log("you are authorized to access this account")
}
else{
    console.log("you are not authorized to access this account")
}

const price = 999;
if(price <=300){
    console.log("less than 300")
}
else if (price <= 500){
    console.log("less than 500");
}
else{
    console.log("greater than 990")
}

const name = "preeti";
if (name == "preeti"){
    const power = "invisible";
    console.log(`the power of preeti is to be ${power}`)
}
// console.log(`the power of preeti is to be ${power}`)

const age = 20; 
if(age > 10) console.log("you can drive");