function createPerson(name,age){
    let result = {};

    result.name = name;
    result.age=age;
    result.sayHello = function(){
        console.log(`${result.name} says hello!`);
    };
    return result;
}

createPerson()