function charactersInRange(char1,char2){
let code1 = char1.charCodeAt(0);
let code2 = char2.charCodeAt(0);

let minCode = Math.min(code1,code2);
let maxCode = Math.max(code1,code2);
printResult(minCode,maxCode);

function printResult(startCode,endCode){
    let result = '';

    for(let curCode = startCode + 1;curCode < endCode;curCode++){
        let curChar = String.fromCharCode(curCode);
        result += curChar + ' ';
       
    }
    console.log(result)
}

}



// charactersInRange('a','d');
// charactersInRange('#',':')
charactersInRange('C','#')