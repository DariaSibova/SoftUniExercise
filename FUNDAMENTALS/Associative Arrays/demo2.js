let myObj ={
    name: 'Peter'
};

console.log(Object.hasOwn(myObj, 'name'));
console.log(Object.hasOwn(myObj, 'age'));

console.log(Object.hasOwnProperty('name'));
console.log(Object.hasOwnProperty('age'));


myObj.name = 'John';

let {name} = myObj;

console.log(name)

