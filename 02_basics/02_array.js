const arr=["ben","Joy","angela"]
const arr1=["tom","michael","joey"]

// arr.push(arr1)
// console.log(arr);

const all=arr.concat(arr1)
// console.log(all);

const all_names=[...arr,...arr1]
// console.log(all_names);


const new_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array=new_arr.flat(Infinity)
// console.log(array);


console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name:"hello"})); //interesting

const a=1
const b=2
const c=3
console.log(Array.of(a,b,c));

