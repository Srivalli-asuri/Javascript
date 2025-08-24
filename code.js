let user_data=document.getElementById("ip")
let local_container=document.getElementById("local_container")
let stored_data=localStorage.getItem("user_data")
local_container.textContent=stored_data

function adding(event){
    if (event.key=="Enter"){
        local_container.textContent=local_container.textContent+"  "+user_data.value
        localStorage.setItem("user_data",local_container.textContent)
        user_data.value=""
    }
    
}
user_data.addEventListener("keyup",adding)
