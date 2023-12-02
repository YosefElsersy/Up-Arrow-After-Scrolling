let box = document.getElementById("box")


window.addEventListener("scroll",(e)=>{
    if( scrollY > 1000)
    {
        box.style.display = "block"
    }
    else
    {
        box.style.display = "none"
    }

})

box.addEventListener("click",(e)=>{

    scrollTo({
        top:0,

        left:0,

        behavior:"smooth",
    })
})


