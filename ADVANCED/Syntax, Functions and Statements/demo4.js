'use strict';

f1();
console.log(num);
var num = 5;
console.log(num);

function f1(){
    f2();
    console.log('f1');
}

function f2(){
   
    console.log('f2');
}