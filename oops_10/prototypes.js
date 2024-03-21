
const name = "preeti";
console.log(name.length);

const heros =['shaktiman','hanuman'];

const heropower={
    shaktiman:"speed",
    hanuman:"strength"
}

Object.prototype.printIt = function(){
    console.log(`this is avail for everything`)
}

heropower.printIt();
heros.printIt()
Array.prototype.showMe = function(){

    console.log("this avail for array only")
}

heros.showMe()
// heropower.showMe()

String.prototype.trueLength = function(){

    console.log(this)
    console.log(`the true length is ${this.trim().length}` )
}

"preetiii".trueLength();
'javascript'.trueLength();