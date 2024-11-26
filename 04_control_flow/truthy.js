const email=[]
if(email)
{
    console.log("got");  
}
else{
    console.log("didn't get");  
}

//falsy value
//false, 0, -0, Bigint 0n, "", null, undefined,NaN

//truthy values
//"0" , 'false', " " , [], {}, function(){}

// if(email.length===0)
// {
//     console.log("array is empty");
// }

const emptyobj={}
if(Object.keys(emptyobj).length===0)
{
    console.log("onject is empty");
    
}

//Nullish Coalescing operator (??):null undefined
let val1;
///val1=5 ?? 10
//val1=null??10

val1=undefined??10
console.log(val1);

//Ternary Operator
const price =100
price<=80 ? console.log("less than 80"):console.log("more than 80");

 