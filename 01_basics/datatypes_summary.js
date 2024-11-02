//Primitive
//String, Number, boolean, null, Undefined, Symbol,Bigint

const id=Symbol('123');
const id1=Symbol('123');

console.log(id==id1);


//reference
//array,objects,functions
const arr=[1,2,3]
let obj={
    name:"hello",
    age:12
}

const myfunction = function(){
    console.log("hello world");
    
}
console.log(typeof myfunction);



//*****************************************/

//Stack => primitive
//Heap => non primitive

let obj1={
    useremail:"heloo@google.com",
}
let obj2=obj1
obj2.useremail="hello@google.com"
console.log(obj1.useremail);
console.log(obj2.useremail);
