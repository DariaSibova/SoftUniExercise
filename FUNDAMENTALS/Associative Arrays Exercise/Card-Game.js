//{Peter:['2C', 4H, 9H,] tomas: [ 3H,10S]}

function cardGame(arr) {
  let playersCards = {};
  let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14};
  let typesValues = { S: 4, H: 3, D: 2, C: 1};

  for (let playerDeck of arr) {
    let [playerName, cardsStr] = playerDeck.split(": ");
    let cards = cardsStr.split(", ");
    //    console.log(playerName);
    //    console.log(cards);
    if (playerName in playersCards) {
      playersCards[playerName].push(...cards);
    } else {
      playersCards[playerName] = cards;
    }

  }

  let entries = Object.entries(playersCards);

  for (let [name,desk] of entries){
    let uniqueDeck = new Set(desk);
    let deckValue = 0;

    for (let card of uniqueDeck){
        let power = card.slice(0, card.length - 1);
        // console.log(power)
        let type = card[card.length - 1];

        let cartValue = powerValues[power] * typesValues[type];
        deckValue += cartValue;
    }
    console.log(`${name}: ${deckValue}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
