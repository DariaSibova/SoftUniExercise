function addItem() {
    const input = document.getElementById('newItemText');

    if(input.value.length == 0){
        return;
    }

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // Begin 03. ADD-Delete
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    liElement.appendChild(deleteBtn);

    //End 03.Add-Delete
    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = '';
}
function onDelete(event){
    const deleteBtn = event.target
    const liElement = deleteBtn.parentElement;
    liElement.remove();
}