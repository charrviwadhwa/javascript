const arr=[0,1,2,3,4]

arr.push(5)
// console.log(arr);


arr.unshift(9)
// console.log(arr);

arr.shift()
// console.log(arr);

// console.log(arr.includes((19)));

const newarr=arr.join()
// console.log(newarr);

//slics splice
console.log("A",arr);
const myn=arr.slice(1,3);
console.log(myn);

console.log("b",arr);
const myn1=arr.splice(1,3)
console.log("c",arr);

console.log(myn1);





