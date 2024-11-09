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
console.log(login("joey"));


