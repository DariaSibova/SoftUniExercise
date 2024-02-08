function lockedProfile() {

    let  btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(x=> x.addEventListener("click",onClickHandler));

    function onClickHandler(e){
        let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        let currnetRadioBtn = e.target.parentElement.querySelector("input[type='radio']:checked");
        if(currnetRadioBtn.value === "unlock"){
            if(e.currentTarget.textContent ==="Show more"){
                e.currentTarget.textContent = "Hide it";
                hiddenInfo.style.displey = "block";

            } else {
                e.currentTarget.textContent = "Show more";
                hiddenInfo.style.displey = "none";
            }
        }
    }
}