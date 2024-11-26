//immediately invoked function expression (IIFE)

(function add(){
    //named IIFE
    console.log(`DB connected`);
    
})();

( (name) => {
    console.log(`hello ${name}`);    
})('joey')

