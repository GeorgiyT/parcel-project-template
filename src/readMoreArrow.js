document.querySelector(".pointer-button").addEventListener("click",readMore)
function readMore(){
    var add = document.getElementById("add");
    var muchMore = document.getElementById("muchMore");
    var myBtn = document.getElementById("myBtn");

    if(add.style.display === "none"){
        add.style.display="inline";
        myBtn.innerHTML =`<svg class="pointer-button-svg">
        <use href="./sprite.5ec50489.svg#icon-arrow"></use>
    </svg>`;
        muchMore.style.display = "none";
    } else {
        
        add.style.display="none";
        myBtn.innerHTML =`<svg class="pointer-button-svg">
        <use href="./sprite.5ec50489.svg#icon-close"></use>
    </svg>`;
        muchMore.style.display="inline";
    }
}