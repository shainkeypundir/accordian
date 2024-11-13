
const btn = document.querySelectorAll(".open-btn");
const ans = document.querySelectorAll(".answer");

btn.forEach((button,index) => {
    button.addEventListener("click", function(){
        ans[index].classList.toggle("hidden");
    })
})