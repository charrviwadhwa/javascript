let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);


// let newdate=new Date(2023,0,23)
// let newdate=new Date(2023,0,23,3,5)

let newdate=new Date("2023-01-12")
// console.log(newdate.toLocaleString());

let mytime=Date.now()
// console.log(mytime);
// console.log(newdate.getTime());

// console.log(Math.floor(Date.now()/1000));

let Newdate =new Date()
console.log(Newdate.getMonth());

Newdate.toLocaleString('default',{
    weekday:"long",
    
})

