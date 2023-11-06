class Person{
    constructor(name,age){
        //let this = {}
        this.name = name;
        this.age = age;

        // return this
    }

    sayHello (/* this */) {
        console.log(`${this.name} says hello!`);

    }
}

function createPerson(name,age){
    let result = {};

    result.name = name;
    result.age = age;

    return result
}

let myPerson = new Person('Peter',23);
console.log(myPerson instanceof Person)
console.log(myPerson )

let otherPerson = createPerson ('George', 31);
console.log(otherPerson instanceof Person)
console.log(otherPerson);
myPerson.age = 22;
console.log(myPerson);
myPerson.sayHello();

