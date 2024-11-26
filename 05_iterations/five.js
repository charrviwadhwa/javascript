const arr1=["js","ruby","C++","java"]
// arr1.forEach( function (item){
//     console.log(item);
    
// })

// arr1.forEach( (val)=>{
//     console.log(val);
    
// })

// function printme(val)
// {
//     console.log(val);
    
// }
// arr1.forEach(printme)

// arr1.forEach((val,index,arr)=>{

//     console.log(val,index,arr);
    
// })

const myarr=[
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "java",
        filename: "java"
    },
    {
        language: "python",
        filename: "py"
    }
]

myarr.forEach( (item)=>{
    console.log(item.language);
})

