let myJson = ' { "name": "Peter","age": 21}';



console.log(myJson)
let parsed = JSON.parse(myJson);
console.log(parsed);
console.log(parsed.name)

parsed.name = 'George';
let encoded = JSON.stringify(parsed);
console.log(encoded)