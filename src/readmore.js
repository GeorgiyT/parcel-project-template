function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML=`Read more  <svg class="made-arrow">
        <use href="./images/sprite.svg#icon-arrow-more"></use>
    </svg>`;
        more.style.display="none";
    } else{
        dots.style.display="none";
        btn.innerHTML=`Cancel  <svg class="made-arrow">
        <use href="./images/sprite.svg#icon-arrow-more"></use>
    </svg>`;
        more.style.display="inline";
    }
}