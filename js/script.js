let inputbox = document.querySelector(".input_box");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let ul = document.querySelector(".ul");
let ulerror = document.querySelector(".ul_error");

let todoarr = []
let arrindex ;

btn.addEventListener("click", function(){
    if(inputbox.value == ""){
        error.innerHTML = "to-do list add now."
    }else{
        if(btn.innerHTML == "Add"){
            error.innerHTML = ""
            todoarr.push(inputbox.value);
            inputbox.value = ""
            todo()
        }else{
            todoarr[arrindex] = inputbox.value
            todo()
            btn.innerHTML = "Add"
            inputbox.value = ""
        } 
    }
})

window.addEventListener("load", function(){
    todo()
})
todo()

function todo(){
    ul.innerHTML = ""

    if(todoarr.length > 0){
        todoarr.map((item)=>{
            ul.innerHTML += `<li>${item}<button class="edit"><i class="fa-solid fa-pen-to-square"></i></button><button class="delete"><i class="fa-solid fa-delete-left"></i></button></li>`
            let deletebtn = document.querySelectorAll(".delete")
            let deletebtnArr = Array.from(deletebtn)
            deletebtnArr.map((deleteitem,index)=>{
                deleteitem.addEventListener('click', function(){
                    // console.log(deleteitem,index);
                    todoarr.splice(index,1)
                    todo()
                })    
            })
    
            let editbtn = document.querySelectorAll(".edit")
            let editbtnArr = Array.from(editbtn)
            editbtnArr.map((edititem,index)=>{
                edititem.addEventListener('click', function(){
                    btn.innerHTML = "update"
                    inputbox.value = todoarr[index]
                    arrindex = index
                })
            })
        })
        ulerror.innerHTML = ""
    }else{
        ulerror.innerHTML = "Nothing have, write something....."
    } 
}