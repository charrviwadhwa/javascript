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
