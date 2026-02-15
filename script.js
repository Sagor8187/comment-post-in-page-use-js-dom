let sections = document.getElementById("postmain")
let posts = document.getElementById("inputtext")
let btn = document.getElementById("post-btn")
// console.log(sections,posts,btn)

btn.addEventListener("click",()=>{
    let data = posts.value

    if(data !== ""){
        let newpost = document.createElement("p")
        newpost.classList.add("text")
        newpost.innerText = data
        sections.appendChild(newpost)
        

        posts.value = ""
    }else{
        alert("please add your comment")
    }

    
})