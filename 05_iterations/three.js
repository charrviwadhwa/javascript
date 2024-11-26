//for of
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}
const str = "hello world"
for(const i of str)
{
   // console.log(`each char is ${i}`);
    
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for (const [element,value] of map) {
    //console.log(element , ':-', value);  
}
for (const key in map) { //this will not show any output
   console.log(key);
   
}

const obj={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [element,value] of obj) { //not iterable
    //console.log(element , ':-', value);  
}


