const user={
    username:"joey",
    price:999,
    message: function(){
        console.log(`${this.username} welcome to website`);
       // console.log(this);
    }

}
// user.message()
// user.username="sam"
// user.message()

//console.log(this);

// function add(){
//     let name="joey"
//     console.log(this.name); //undefined
// }
// add()

const add= ()=>{
    let name="joey"
    console.log(this.name); 
}
//add()
 
// const add2 = (num1,num2)=>{
//     return num1+num2
// }

// const add2 = (num1,num2)=> (num1+num2)

const add2 = (num1,num2)=> ({username:"joey"})
console.log(add2(3,4));


const arr=[1,2,3,4,5]

// arr.forEach(()=>())

    