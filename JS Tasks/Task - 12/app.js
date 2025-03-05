const addBtn = document.querySelector(".add-btn")
const doneBtn   = document.querySelector(".done-btn");
const editBtn   = document.querySelector(".edit-btn"); 
const deleteBtn = document.querySelector(".delete-btn"); 
let mainTodo = document.querySelector(".todo-main-div")
let todoDiv = document.querySelector(".todo-div");
let mainDiv = document.querySelector(".main-div")


function todoAdd() {
    // let a = prompt("Your task")
    mainTodo.innerHTML += `
    <div class="todoDiv" >
         <div class="todo-div">
            //
        </div>

        <div class="btn-div"> 
            <button class="done-btn" onclick="todoDone">Done</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn" >Dlete</button>
        </div>  
        </div>
    `
    // addBtn.addEventListener("click", todoAdd)

    // console.log("dsf");
    function todoDone() {
        console.log("d");
        
    }
}

// doneBtn.addEventListener("click", todoDone)

// deleteBtn.addEventListener("click", todoDelete())

addBtn.addEventListener("click", todoAdd)



    // let a = prompt("Add")
    // todoDiv.textContent = a
    // let a = prompt("--")

    // mainTodo.textContent = "asd"
    // todoDiv.innerHTML = a
    // if (mainTodo.hasChildNodes()) {
    //     // console.log('div имеет дочерние элементы');
    //     mainTodo.innerHTML += `

  
     
    //     `
    // } else {
    //     // console.log('div не имеет дочерних элементов');
    //     mainTodo.innerHTML += `
    //     <div class="todoDiv">
    //      <div class="todo-div">

    //     </div>

    //     <div class="btn-div"> 
    //         <button class="done-btn">Done</button>
    //         <button class="edit-btn">Edit</button>
    //         <button class="delete-btn">Dlete</button>
    //     </div>  
    //      </div>
    //     `
    //    }
