let x  = document.querySelector(".x");
let button = document.querySelector(".button_left_side")
let search = document.querySelector(".search")


button.addEventListener("click", () => {
    console.log("ok")
    search.classList.toggle("active")
})

x.addEventListener("click", () => {

    search.classList.remove("active")

})

