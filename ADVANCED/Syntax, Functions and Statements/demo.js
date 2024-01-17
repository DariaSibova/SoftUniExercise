const MY_CONST = 5;

function star(){
    console.log('start of function', num);

    {
        let num = 8;
    }

    console.log('end of function',num);
}

console.log('global scope', num);