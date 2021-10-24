const form = document.querySelector("form");
const input = document.querySelector("input")
input.setAttribute("placeholder", "Write your items!")
const container = document.querySelector("#container")
const body = document.querySelector("body")
const h1 = document.createElement("h1")
body.insertBefore(h1, form)
h1.innerText = "✏  ToDo List " 
h1.style.textAlign = "center"

// TESTING remove()
const remove = container.querySelector("div")
remove.remove()

const ul = document.createElement("ul")
ul.style.padding = "0px"
container.appendChild(ul)

function handlerSubmit(e) {
    e.preventDefault(); 

// NO EMPTY VALUE
const empty = (str) => !str.trim().length;
    if (empty(input.value)) {
        return
    }

// ITEM PROPERTIES
    const li = document.createElement("li")
    li.classList.add("task-container")
    li.innerText = input.value
    ul.appendChild(li)
    const del = document.createElement("button") 
    del.classList.add("btn")
    del.innerText = "❌"
    li.append(del)

//  DELETE ITEM
    function deleteDiv (e) {
       del.parentNode.remove(); 
    }
    del.addEventListener("click", deleteDiv)


// RESET INPUT TEXT
    if (e = "submit") {
    input.value=""
    }
}
   
form.addEventListener("submit", handlerSubmit)



