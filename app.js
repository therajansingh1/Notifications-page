const markButton = document.getElementById("mark-button");
const number = document.getElementById("num");

markButton.addEventListener("click",function(){
    document.querySelectorAll(".singal-line").forEach( function(e){
        e.classList.remove("unseen");
    })
    document.querySelectorAll(".dot").forEach( function(e){
        e.classList.remove("dot");
    })
    number.innerText="0";
})
