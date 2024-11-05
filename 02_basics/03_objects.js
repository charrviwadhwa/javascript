//singleton
//Object.create

//object literals

const sym=Symbol("key1")

const jsuser={
    name:"joey",
    age:23,
    [sym]:"mykey1",
    location:"delhi",
    isLoggedIn:false,
    arr:["monday","Saturday"],
    "fullname":"Joey"

}

// console.log(jsuser.name);
// console.log(jsuser["name"]);
// console.log(jsuser["fullname"]);
// console.log(jsuser[sym]);

// Object.freeze(jsuser)
// jsuser.name="angela"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello user");
    
}
jsuser.greeting1=function(){
    console.log(`hello user, ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting1());



