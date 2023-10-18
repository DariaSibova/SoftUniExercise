function palidromeInts(arr){
    for(let num of arr){
        let reversedNumStr = num.toString().split('').reverse().join('');
    }
}





//----------------------------------------

// function palidromeInts(arr){
//     for (let num of arr){
//         let numStr = String(num);
//         let reversedNumStr = numStr.split('').reverse().join('');
//         console.log(numStr == reversedNumStr);
//     }
// }


//-------------------------------------
// function palidromeInts(arr){
//     for(let curNum of arr){
// let isPalidrome = checkIsPalidrome(curNum);
// console.log(isPalidrome)
//     }

//     function checkIsPalidrome(num){
//         let numStr = String(num);
//         let reversedNumStr = '';

//         for (let i = numStr.length - 1;i >= 0; i--){
//             let curChar = numStr[i];
//             reversedNumStr += curChar;
//         }
//         let isPalidrome = numStr == reversedNumStr;
//         return isPalidrome;
//     }
// }

palidromeInts([123,323,421,121]);
// palidromeInts([32,2,232,1010])