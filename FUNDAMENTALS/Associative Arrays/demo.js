// let myAssocArray = {};

// let key = 'John Smith';
// myAssocArray[key] = '+1-555-813784 ';

let myAssocArray = {
'John Smith' : "+1-2456-88857",
'Ana Peters': '+6365-6767-41442',
'Ivan Petrov':'+1-2545-677',
};

console.log(myAssocArray);

// for(let [key,value] of Object.entries(myAssocArray)){
//     console.log(key, ' -> ', value);
// }

for(let [contactName,phoneNumber] of Object.entries(myAssocArray)){
    console.log(contactName, ' -> ', phoneNumber);

}
delete myAssocArray['Ivan Petrov']



// for (let key in myAssocArray){
//     // console.log(key);
//     console.log(key,'->',myAssocArray[key]);

// }
//-------------------------------------------

// let keys = Object.keys(myAssocArray);
// for(let key of keys){
//     console.log(key,'->',myAssocArray[key]);
    
// }
// for(let key of Object.keys(myAssocArray)){
//     console.log(key, '->',myAssocArray[key]);
// }
// for(let entry of Object.entries(myAssocArray)){
//     console.log(entry, '->',myAssocArray[entry]);

// }
