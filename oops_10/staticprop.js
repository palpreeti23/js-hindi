class user{
    constructor(username){

        this.username= username;
    }

    logme(){
        console.log(`username is ${this.username}`)
    }

    
    static createid(){
        return`375`;
    }
}


const chai = new user('palpreeti');
console.log(chai)
// console.log(chai.createid());

class teacher extends user{
    constructor(username, mailid){
        super(username)
        this.mailid = mailid
    }
}

const phone = new teacher('iphone','i@phone.com');
console.log(phone.logme())
// console.log(phone.createid())