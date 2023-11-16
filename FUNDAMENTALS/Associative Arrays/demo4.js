let myMap = new Map();

console.log(myMap);

myMap.set('Peter', '+1-554-4601');
myMap.set('John', '+1-555-4601');

console.log("--------------------------")
console.log(myMap);
console.log(myMap.has('Peter'));
console.log(myMap['Peter']);
console.log("--------------------------")
console.log(myMap.get('Peter'));
console.log(myMap.keys());
console.log("--------------------------")
console.log(myMap.entries());
console.log(JSON.stringify(myMap));




for(let entry of myMap){
    console.log(entry);
}


