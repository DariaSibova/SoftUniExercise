function solve() {
  const [ inputTextareaRef,resultTextAreaRef] = document.querySelectorAll("textarea");
  const [ generateBtnRef,buyBtnRef] = document.querySelectorAll("button");
  const tableBodyRef = document.querySelector("tbody");
  
  generateBtnRef.addEventListener("click",generateInputHandler);
  buyBtnRef.addEventListener("click",buyHandler)

  function generateInputHandler(e){
    let data = JSON.parse(inputTextareaRef.value);

    for(let item of data){
      createRowAndAppend(item);

    }

  }
  function createRowAndAppend(item){
    const tr = document.createElement("tr");
    tr.innerHTML += createTableData(`<img src=${item.img}>`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTableData(`<input type= 'checkbox'>`);
    tableBodyRef.appendChild(tr);

  }

  
}