// const insta=new Object()
const insta={}
insta.id="123"
insta.name="joey"
insta.isLoggedIn=false

// console.log(insta);

const user={
    email:"xyz@gmail.com",
    fullname:{
        userfullname:
        {
            firstname:"joey",
            lastname:"beta"
        }
    }

}
// console.log(user.fullname.userfullname.firstname);

const obj={
    1:"a",
    2:"b"
}
const obj1={
    3:"a",
    4:"b"
}
// const obj2={obj,obj1}
// const obj2=Object.assign({},obj,obj1)

const obj2={...obj,...obj1}
// console.log(obj2);


const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(insta);
// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));


// console.log(insta.hasOwnProperty('isLoggedIn'));

const course={
    name:"js",
    price:"999",
    instructor: "joey"
}

const{instructor:inst}=course
console.log(inst);

// {
//     "name":"js",
//     "price":"999",
//     "instructor": "joey"
// }

[
    {},
    {},
    {}
]



