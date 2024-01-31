function addItem() {
    // select input
    // get input value
    // create new <li> element
    // set element text to input value
    // select list
    // append new li to list

    const input = document.getElementById('newItemText');
    if(input.value.length == 0){
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    const list = document.getElementById('items');  
    list.appendChild(liElement)
    input.value = '';
}