
//getter and setter using class


// modern syntax of getter setter 

// setter sets the value and  getter gets the value. it works together if write get we need to write set too.
// we use this in scenarios like we don't want to give access to some perticular properties or things like passward or something or we want to give it in customize manner either encrypted or decrypted we use geetr and setter
class user{
    constructor(email, passward){
        this.email = email;
        this.passward = passward;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){

        this._email = value;
    }

    get passward(){
        // return `${this._passward}pree`;
        return "you can not get the passward"
    }

    set passward(value){
        // this._passward = value;
    }
}

const pree = new user()
console.log(pree.passward)








// getter setter using function or definePropert

function newuser(email, passward){

    this._email = email;
    this._passward = passward;

    Object.defineProperty(this,"email", {
        get: function(){
            return this._email.toUpperCase();
        },
    
        set : function(value){
            this._email = value;
        }
    })
    
    Object.defineProperty(this,"passward", {
        get: function(){
             return`${this._passward}@pffn`;
          
        },

        set : function(value){
            this._passward = value;
        }
    })

}


const pree2 = new newuser('pal@2455',34454);
console.log(pree2);







// getter setter using object 

const anotheruser = {
    _email : 'pree@12.com',
    _passward : 234,

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){

        this._email = value
    },

    get passward(){
        return `${this._passward}@pwjj`;
    },

    set passward(value){

        this._passward = value;
    }
}

console.log(anotheruser.passward)
