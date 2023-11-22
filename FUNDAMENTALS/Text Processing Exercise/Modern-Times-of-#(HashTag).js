function solve(text){
    let words = text.split(' ');
    let hasWords = words.filter(word => word.startsWith('#') && word.length > 1);

    for(let word of hasWords){
        word = word.slice(1);
        let isValid = true;

        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
                isValid = false;
                break;
            }
        }
        if(isValid){
            console.log(word);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')