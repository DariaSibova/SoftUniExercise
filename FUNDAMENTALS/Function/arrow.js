let get = function(a,b){
    return a * b;
};
let arrowGet = (a,b) => a * b;
console.log(get(5,3));
console.log(arrowGet(5,3));

//--------------------------------------
// let get = function(){
//     return 5;
// };

// let arrowGet = () => 5;
// console.log(get());
// console.log(arrowGet());
//------------------------------------
// let get = function(x){
//     return x + 1;
    
// };
// let arrowGet = (x) => x + 1;
// console.log(arrowGet(5));
// console.log(get(5));