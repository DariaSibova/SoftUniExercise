function extractText() {
    // TODO
    // find the list in the page
    const list = document.getElementById('items');
    let result = [];
    //loop all children
    const items = Array.from(list.children);
    for(let item of items){
        result.push(item.textContent);
    }
    const textarea = document.getElementById('result');
    textarea.value = result.join('\n');
    //read their textContent
    //create resulting

    //find on the page the
    // change its content
}