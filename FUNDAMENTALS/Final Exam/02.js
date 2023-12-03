function check(arr) {
  let num = arr.shift();
  let pattern =
    /([|])(?<bossName>[A-Z]+)\1:([#])(?<title>[A-Za-z]+\s[A-Za-z]+)\3/g;

  for (let item of arr) {
    if (item.match(pattern)) {
      let matches = item.matchAll(pattern);
      for (let match of matches) {
        let { bossName, title } = match.groups;
        console.log(`${bossName}, The ${title}
            >> Strength: ${bossName.length}
            >> Armor: ${title.length}`);
      }
    } else {
      console.log("Access denied!");
    }
  }
}

check([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
// check([
//   "3",
//   "|STEFAN|:#H1gh Overseer#",
//   "|IVAN|:#Master detective#",
//   "|KARL|: #Marketing lead#",
// ]);
