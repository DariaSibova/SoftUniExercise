function create(words) {
   const contentRef = document.getElementById("content");
   for(let word of words){
      let divEl = document.createElement("div");

      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = 'none'

      divEl.addEventListener("click",clickMandler);

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);

   }

   function clickMandler(event){
      let target = event.currentTarget;
      let children = target.children;
      let p = children[0];
      p.style.display = "block";
   }
}