function solve (input){
    //take text from input
    // for every line from input, until 'Reveal' is reached;
    // - parse input line 
    // - check when command is issued and execute it 
    //  - print text
    //print result

    let message = input.shift();

    while (input[0] != 'Reveal'){
        let line = input.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command){
            case 'InsertSpace':
                let index = Number(tokens[1]);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index);
                message = firstHalf + ' ' + secondHalf;
                break;
            case 'Reverse':
                let substring = tokens[1];
                let firstIndex = message.indexOf(substring);
                if(firstIndex == -1){
                    console.log('error');
                    continue;
                }
                let left = message.slice(0, firstIndex);
                let right = message.slice(firstIndex + substring.length);
                message = left + right + substring.split('').reverse().join('');

                break;
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = message.split(match);
                message = parts.join(replacement);
                break;
        }
        console.log(message);
    }
    console.log(`You have a new text message: ${message}`);

    // # InsertSpace
    // split text at given index 
    //save first half + space + second half 

    // # Reverse 
    // check if substring exists in text
    // if found :
    // - find starting index
    // - ending index is start + substring length
    // - first half is from text start to substring starting index 
    // - second half is from substring ending index to text end 
    // - save first half + second half + reversed substring 
    // otherwise , print 'error'

    // # ChangeAll
    // split text by substring 
    // save joined text by replaxement 
}