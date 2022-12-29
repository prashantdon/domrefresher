const inputBox = document.getElementById("inputBox");
        const addBtn = document.getElementById("addBtn");
        const todoList = document.getElementById("todo");
        let arr = []
        window.addEventListener('load',()=>{
            
            arr = JSON.parse(localStorage.getItem("todoData")) || []
            arr.forEach(element=>{
            todoList.innerHTML += `<li>${element}<button onclick="deleteFn('${element}' , this)">remove</button></li>`
        })
        })
        

        addBtn.addEventListener("click", (e)=>{
            e.preventDefault()
            todoList.innerHTML = `<li>${inputBox.value}<button onclick="deleteFn('${inputBox.value}' ,this)">remove</button></li>`
            
            arr.push(inputBox.value)
            let store = localStorage.setItem("todoData" ,JSON.stringify(arr));
            inputBox.value = ""
        })

        function deleteFn(todo,element){
            let index = arr.indexOf(todo);
            console.log(index)
            arr.splice(index,1);
            element.parentElement.remove();
            localStorage.setItem("todoData" , JSON.stringify(arr))
        }
        