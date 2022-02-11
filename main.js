const view = document.getElementById("view")

view.addEventListener("mouseover",()=> { 
    view.style.opacity = "1"
})
view.addEventListener("mouseout",()=> { 
    view.style.opacity = "0"
})

//model for the ntf view
//REQUESTED BY JEAN

const modal = document.createElement("DIV");
const fragment = document.createDocumentFragment()
const imageCont = document.createElement("DIV")
const closePreview = document.createElement("DIV")

modal.appendChild(closePreview)
modal.appendChild(imageCont)
fragment.appendChild(modal)
document.body.appendChild(fragment)

modal.classList.add("modal-image")
imageCont.classList.add("image-cont")
closePreview.classList.add("close")



view.addEventListener( "click", ()=> {
    modal.classList.add("closed-modal")
    
    if( modal.classList.contains("closed-modal")) { 
        modal.style.display = "grid";
        modal.style.height = "100%"
        modal.style.width = "100%"
        
        modal.classList.remove("closed-modal")
        modal.classList.add("open-modal")
    }
})

closePreview.addEventListener( "click", ()=> { 
    if( modal.classList.contains("open-modal")) { 
        modal.style.height = "0%"
        modal.style.width = "0%"
        
        modal.classList.remove("open-modal")
        modal.classList.add("close-modal")
    }
})