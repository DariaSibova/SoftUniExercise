function solve(wordsStr,text){


    let words = wordsStr.split(', ');

    for(let word of words){
        let repeatCount = word.length;

        let starTemplate = '*'.repeat(repeatCount);
        text = text.replace(starTemplate,word);

    }

    console.log(text)
}



solve( 'great','softuni is ***** place for learning new programming languages')
// solve('great, learning','softuni is ***** place for ******** new programming languages')