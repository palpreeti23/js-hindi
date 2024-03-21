
class user{
    constructor(username){
        this.username = username;
    }

    loguser(){
        console.log(`the name of the user is ${this.username.toUpperCase()}`)
    }
}

class teacher extends user{
    constructor(username, mailid, passward){
        super(username)
        this.mailid = mailid;
        this.passward = passward;
    }

    newCourse(){
        console.log(`the new course is added here by ${this.username} `)
    }
}

const pree = new teacher('preetipal','pal@346','5467');
console.log(pree);
pree.newCourse();
pree.loguser()

const newpree = new user('preetipal');
console.log(newpree);
newpree.loguser();
// newpree.newCourse()

// console.log(pree === newpree)
console.log(newpree === user)
console.log(newpree instanceof user)