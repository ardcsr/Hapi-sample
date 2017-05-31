var userInfo = {
    username: 'peeradachl',
    password: '123456',
    firstname: 'PEERADACH',
    lastname: 'LAORTUM',
    getID: function(username){
         username+this.username
    }

};

var a = ''
var b = null
var c

console.log(a)
console.log(b)
console.log(c)
console.log('-----------')
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof b == typeof c)
console.log('-----------')

if(a){
    console.log('a passed')
} else {
    console.log('a not passed')
}

if(b){
    console.log('b passed')
} else {
    console.log('b not passed')
}

if(c){
    console.log('c passed')
} else {
    console.log('c not passed')
}