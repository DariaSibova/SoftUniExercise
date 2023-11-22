function solve([input]){
     let pattern = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;

let match = pattern.exec(input);

while(match != null){
    console.log(match);

    match = pattern.exec(input);
}
}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
  ]
  )