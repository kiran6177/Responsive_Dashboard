const hamburger = document.getElementById("ham-button")
const slidebar = document.getElementById("slide")


hamburger.addEventListener("click",()=>{
    if(!slidebar.style.display || slidebar.style.display === "none"){
        slidebar.style.display = "flex"
        slidebar.style.animation = "slide-in 200ms ease-in"
    }else{
        slidebar.style.animation = "slide-out 200ms ease-out"
        setTimeout(()=>slidebar.style.display = "none",150)
    }
})