// let myVar = 5;


// console.log(myVar);
// modifyVar(myVar)
// console.log(myVar)

// function modifyVar(externalVar){
//     externalVar++;
//     console.log(externalVar)
// }
let person = {
    name:'Peter',
    age:23
};
console.log(person);
modify(person);
console.log(person)

function modify(obj){
    obj.name = 'George';
    console.log(obj);
}