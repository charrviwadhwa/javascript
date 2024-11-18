function one(){
    const username="joey"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username="joey"
    if(username=="joey")
    {
        const  website=" youtube"
       // console.log(username+website);
        
    }
   // console.log(website);
    
}
//console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(add1(5))//can access before initialization
function add1(val)
{
    return val+1
}


add2(5) //can't access before initialization
const add2=function(val)
{
    return val+2
}
