function solve(arr){
    let encryptedMsg = arr.shift();
    let command = arr.shift();

    while (command != 'Decode'){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action == 'Move'){
            let letterCount = Number(tokens.shift());
            let firstLetters = encryptedMsg.slice(0, letterCount);
            encryptedMsg = encryptedMsg.replace(firstLetters, '');
            encryptedMsg += firstLetters;
        } else if(action == 'Insert'){
            let idx = Number(tokens.shift());
            let val = tokens.shift();

            encryptedMsg = encryptedMsg.slice(0, idx) + val + encryptedMsg.slice(idx);
        } else {
            let [substring, replacement] = tokens;

            while(encryptedMsg.includes(substring)){
                encryptedMsg = encryptedMsg.replace(substring, replacement)

            }

        }

        command = arr.shift();
    }
    console.log(`The decrypted message is: ${encryptedMsg}`)
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    
    ])