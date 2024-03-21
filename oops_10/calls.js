
function setUserName(userName){
    this.setUserName = userName;
    console.log('called')
}

function createUser(userName, userId, passward){

//call here is used to hold the reference and this next to it is used to get the variable whatever we've declared there it is used as a reference 
    setUserName.call(this,userName);
    this.userId=userId;
    this.passward=passward;
}

const chai = new createUser('preeti',"pal@45470",4567)
console.log(chai)