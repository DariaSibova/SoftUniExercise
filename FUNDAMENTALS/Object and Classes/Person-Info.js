function solve(firstName,lastName,age){
    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;
    //--------------------------
    // let person = {};
    // person['firstName'] = firstName;
    // person['lastName'] = lastName;
    // person['age'] = age;
    //------------------------------
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}
let result = solve('Peter','Pan',20);
console.log(result)


solve("Peter",

"Pan",

"20")