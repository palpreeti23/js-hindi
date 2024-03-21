

function createUser(username, score){
    this.username = username;
    this.score = score;
    // return this;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
console.log(`the price is ${this.score}`);
}

const chai = new createUser("chai", 30);
const tea = new createUser('tea',300);


chai.increment()
chai.printMe();
// tea.printMe()