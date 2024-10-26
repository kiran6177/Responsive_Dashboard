const hamburger = document.getElementById("ham-button")
const slidebar = document.getElementById("slide")


hamburger.addEventListener("click",()=>{
    console.log(slidebar.style.display)
    if(!slidebar.style.display || slidebar.style.display === "none"){
        slidebar.style.display = "flex"
    }else{
        slidebar.style.display = "none"
    }
})