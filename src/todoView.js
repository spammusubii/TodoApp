export const todoView = (function(){
    // function to create a todo item element
    // input: todo object
    // output: reference of todo item element
    function createTodoItemElement(todoItem){
        const todoItemElement = document.createElement("div");
        todoItemElement.classList.add("todo-item");

        const todoItemHeader = document.createElement("div");
        todoItemHeader.classList.add("todo-item-header")
        todoItemHeader.innerHTML = `${todoItem.getTitle()}`;

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("header-button-container")

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("description-button");
        checkBtn.innerHTML = "&#x2713;"
        btnContainer.appendChild(checkBtn);

        const descriptionToggleBtn = document.createElement("button");
        descriptionToggleBtn.classList.add("description-button");
        descriptionToggleBtn.innerHTML = "&#8681";
        btnContainer.appendChild(descriptionToggleBtn);

        const deleteTodoItemBtn = document.createElement("button");
        deleteTodoItemBtn.classList.add("description-button", "delete-button");
        deleteTodoItemBtn.textContent = "X";
        btnContainer.appendChild(deleteTodoItemBtn);

        todoItemHeader.append(btnContainer);
        todoItemElement.appendChild(todoItemHeader);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("hidden");

        const descriptionList = document.createElement("ul");
        descriptionList.classList.add("todo-item-description-container")
        const description = document.createElement("li");
        description.textContent = todoItem.getDescription();
        descriptionList.appendChild(description);
        descriptionDiv.appendChild(descriptionList);
        todoItemElement.appendChild(descriptionDiv);

        descriptionToggleBtn.addEventListener('click', (e) => {
            e.target.classList.toggle("opened");
            toggleDescriptionView(descriptionDiv);
        })

        checkBtn.addEventListener("click", (e) => {
            e.target.classList.toggle("finished");
            todoItem.setHasFinished();
        })

        deleteTodoItemBtn.addEventListener("click", (e) => {
            if(window.confirm("Are you sure you want to delete?")){
                todoItemElement.remove();
            }
        })
        
        return todoItemElement;
    }

    function toggleDescriptionView(descriptionDiv){
        descriptionDiv.classList.toggle("hidden");
    }

    return {
        createTodoItemElement,
    }

})();