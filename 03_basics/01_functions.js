function name()
{
    console.log("hello");
    console.log("world");
    
}
// name();

function addnumbers(number1, number2)
{
    let result= number1+number2
    return result
}
const result = addnumbers(3,4)
// console.log(result); //undefined

function login(username)
{
    if(!username)
    {
        console.log("enter username");
        return
        
    }
    return `${username} logged in`
}
// console.log(login("joey"));


function price(val1,val2,...num)
{
    return num
}
console.log(price(100,200,300));

const user={
    name:"joey",
    price:100
}
function object(any)
{
    console.log(`username ${any.name} and price is ${any.price}`);
    
}
// object(user)
object(
    {
        name:"angela",
        price:200
    }
)

const arr=[200,300,400]
function value(arr)
{
    return arr[1]
}
console.log(value(arr));
