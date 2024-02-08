function sayHello(){
    console.log(this.name + ' says hi!');

}
sayHello();
const myObj = {
    name: 'Peter',
    sayHello
};
myObj.sayHello();
sayHello.call(myObj);