let links = document.querySelector(".links");
let btn = document.querySelector(".toggle-btn")



btn.addEventListener("click",()=>{
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
})