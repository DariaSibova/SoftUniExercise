function deleteByEmail() {
//    select input
// select all table body rows
// iterate all rows and select last column
// compare column text with input value
// if there is a match -> remove current row
//select output div
// if a row was deleted,output "Deleted"
// outherwise, output "Not found"
const input = document.querySelector('[name="email"]');
const rows = Array.from(document.querySelectorAll('#customers tbody tr'));
let success = false;
for(let row of rows){
    if(row.children[1].textContent == input.value){
        row.remove();
        success = true;
    }
}
const output = document.getElementById('result');
if(success){
    output.textContent = 'Deleted.';

} else {
    output.textContent = 'Not found.';
}
}