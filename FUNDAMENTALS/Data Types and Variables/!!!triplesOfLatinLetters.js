function solve(nAsString) {
  //convert input to number
  let n = Number(nAsString);
  //determine letters to use in combination

  //use three nasted loops to print characters from 0 to n
let chars = 'abcdefghijklmnopqrstuvwzyz';

  for (let k = 0; k < n; k++) {

    for (let j = 0; j < n; j++) {

      for (let i = 0; i < n; i++) {
        console.log(chars[k],chars[j],chars[i]);
      }
    }
  }
}

solve("3");
