const arr=[1,2,3,4]

// const result = arr.reduce(function(acc,curr){
//     console.log(`acc : ${acc} and curr : ${curr}`);
    
//     return acc+curr
// },0)


const result = arr.reduce((acc,curr) => acc+curr,0)
console.log(result);


const cart =[
    {
    name : "js course",
    price: 2999
    },
    {
    name : "data science course",
    price: 12999
    },
    {
    name : "python course",
    price: 1999
    }
]

const total = cart.reduce((acc,item)=>acc+item.price,0)
console.log(total);
