// let solve = (input) => Object.entries(Object.fromEntries(input.map(item => item.split(''))))
// .map(entry => entry.join(' -> '))
// .join('\n')

// let result = solve([
//     "Tim 0834212554",
  
//     "Peter 0877547887",
  
//     "Bill 0896543112",
  
//     "Tim 0876566344",
//   ]);


function solve(input) {
  let phoneBook = {};

  for (let item of input) {
    let [name, phone] = item.split(" ");

    phoneBook[name] = phone;
  }
  let output = Object.entries(phoneBook)
    .map((entry) => entry.join(" -> "))
    .join("\n");
  console.log(output);

  // for(let entry of Object.entries(phoneBook)){
  //     console.log(entry.join( ' -> '));
  // }
}
//-------------------------------------------------
// function solve(input){
//     let phoneBook = {}
//     for(let item of input){
//         let tokens = item.split(' ');
//         console.log(tokens);
//         let [name,phone] = tokens;

//         phoneBook[name] = phone;
//     }

//     console.log(Object.entries(phoneBook));
// }

solve([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);

solve(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
