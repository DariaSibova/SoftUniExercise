// let peter = {
//     name: 'Peter',
//     age: 20,
//     height: 183
// };
// printDetails(peter);

// function printDetails(person){
//     // person.age = 21;
//     console.log(peter.age);
// }


//-----------------------------------

// let peter = {
//     name: 'Peter',
//     age: 20,
//     height: 183
// };
// console.log(peter);
// peter.hairColor = 'brown';
// console.log(peter);
// console.log(peter['name']);
//--------------------------------

// let peter = {
//     name: 'Peter',
//      age: 20,
//     height: 183,
//     sayHello:function(){
//         console.log('Hello!');
//     }
// };
// peter.name;
// peter.sayHello()
// -----------------------------------
// let peter = {
//     name: 'Peter',
//      age: 20,
//     height: 183
 
//     };
//     peter.sayHello = function(){
//         console.log('Hello!');
//     };
//     peter.sayHello();
    //-----------------------------
    // let peter = {
    //     name: 'Peter',
    //      age: 20,
    //     height: 183,
    //     sayHello: () =>{
    //         console.log('Hello!');
    //     }
     
    //     };
    //     peter.sayHello()
    //------------------------------
    let peter = {
        name: 'Peter',
         age: 20,
        height: 183,
        sayHello(){
            console.log('Hello!');
        }
     
        };
        // peter.sayHello()  
        let keys = Object.keys(peter);
        // console.log(keys)
        // console.log(keys[0]) 
        console.log(peter[keys[0]]) 
        let values = Object.values(peter);
        console.log(values);
        let entries = Object.entries(peter);
        // console.log(entries)
        // console.log(entries[0])
        console.log(entries[0][1])

        for (let key of Object.keys(peter)){
            console.log(key, '->',peter[key])
        }
