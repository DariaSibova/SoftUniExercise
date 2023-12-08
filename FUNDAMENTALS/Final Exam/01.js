function solve(arr) {
  let str = arr.shift();
  let command;

  for (let item of arr) {
    command = item.split(" ")[0];

    switch (command) {
      case "Translate":
        let char = item.split(" ")[1];
        let replacement = item.split(" ")[2];
        let translateResult = [];
        for (let item of str.split(" ")) {
          if (item.includes(char)) {
            translateResult.push(item.replace(char, replacement));
          } else {
            translateResult.push(item);
          }
        }
        console.log(translateResult.join(" "));
        str = translateResult.join(" ");
        break;
      case "Includes":
        let includeSsubstring = item.split(" ")[1];
        console.log(str.includes(includeSsubstring) ? "True" : "False");
        break;
      case "Start":
        let startSubstring = item.split(" ")[1];
        console.log(str.startsWith(startSubstring) ? "True" : "False");
        break;
      case "Lowercase":
        str = str.toLowerCase();
        console.log(str.toLowerCase());
        break;
      case "FindIndex":
        let findIndexChar = item.split(" ")[1];
        console.log(str.lastIndexOf(findIndexChar));
        break;
      case "Remove":
        let startIndex = item.split(" ")[1];
        let count = item.split(" ")[2];
        let result = str.replace(str.substr(startIndex, count), "");
        console.log(result);
        break;
      case "End":
        return;
    }
  }
}

solve([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);

solve([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
