

document.querySelector("#newfile").addEventListener("click",function(){
    bothoff()
    document.querySelector("#form").style.display = "initial"
})
document.querySelector("#newfolder").addEventListener("click",function(){
    bothoff()
    document.querySelector("#form3").style.display = "initial"
})


var files = document.querySelector(".files")
files.addEventListener("click",function(dets){
    if(dets.target.id === "editicon"){
        document.querySelector("#overlay").style.display = "flex"
        var action = document.querySelector("#renameform").setAttribute("action",`/update/${dets.target.dataset.placeholder}`)
        document.querySelector("#overlay #renameinput").setAttribute("placeholder",`${dets.target.dataset.placeholder}`)
    }
})
document.querySelector("#closebtn").addEventListener("click",function(){document.querySelector("#overlay").style.display = "none"})

function bothoff(){
    document.querySelector("#form").style.display = "none"
    document.querySelector("#form3").style.display = "none"
}
window.addEventListener("keydown",function(dets){
    if(dets.keyCode === 27){
        bothoff()
    }
})

document.querySelector("#savebtn").addEventListener("click",function(){
    document.querySelector("#saveform").submit()
})