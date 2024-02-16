function createPerson(firstName,lastName){
    const person = {
        firstName,
        lastName
    };
    Object.defineProperty(person,'lastName',{
        enumerable:true,
        configurable:true,
        get(){
            return `${person.firstName} ${person.lastName}`;
        },
        set(value){
            retirn `${person.firstName} ${person.lastName}`;
        },
       
    });
    return person;
}