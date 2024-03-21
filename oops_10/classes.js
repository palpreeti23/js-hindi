
// class user{
//     constructor(username, mailid, passward){
//         this.username=username;
//         this.mailid=mailid;
//         this.passward=passward;
//     }

//     encrtyptpasscode(){
//         return`${this.passward}preeti23`
//     }

//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const pree = new user('preetipal','pal@234',4567);

// console.log(pree.encrtyptpasscode())
// console.log(pree.changeusername());


//without class

//function is also an object
function user(username, mailid, passward){
    
        this.username=username;
        this.mailid=mailid;
        this.passward=passward;
    }

    user.prototype.encrtyptpasscode = function(){
        return `${this.passward}preeti23`
    }

    user.prototype.changeusername = function(){
        return `${this.username.toUpperCase()}`
    }
    const pree = new user('preetipal','pal@234',4567);

    console.log(pree.encrtyptpasscode())
    console.log(pree.changeusername());