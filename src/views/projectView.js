import { todoView } from "./todoView";

export const projectView = (function(){
    const modal = document.querySelector(".add-todo-item-modal");

    // function to create a project element
    // input: project object
    // output: reference to project element
    function createProjectElement(project){
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-container")
        projectElement.id = project.getId();
        populateProjectElement(project, projectElement);
        return projectElement;
    }

    // function to create a todo item element for each todo item in the project
    // input: reference to project element
    // output: reference to project element with todo item elements
    function populateProjectElement(project, projectElement){
        const header = document.createElement("div");
        header.classList.add("project-header");

        const title = document.createElement("h2");
        title.textContent = project.getTitle();
        header.appendChild(title);

        const projectDeleteButton = document.createElement("button");
        projectDeleteButton.classList.add("project-delete-button");
        projectDeleteButton.textContent = "X";
        projectDeleteButton.addEventListener("click", () => {
            if (window.confirm("Are you sure you want to delete the project?")){
                projectElement.remove();
            }
        })
        header.appendChild(projectDeleteButton);
        projectElement.appendChild(header);

        const todoItemsContainer = document.createElement("ul");
        todoItemsContainer.classList.add("todo-items-container");

        project.getTodoItems().forEach((item) => {
            const li = document.createElement("li");
            li.id = item.getId();
            const todoItemElement = todoView.createTodoItemElement(item);
            li.appendChild(todoItemElement);
            todoItemsContainer.appendChild(li);
        })

        const li = document.createElement("li");
        li.id = project.getId() + "-delete-btn";
        li.appendChild(todoItemButton(project.getId()));
        li.classList.add("todo-item")
        todoItemsContainer.appendChild(li);

        projectElement.appendChild(todoItemsContainer);
    }

    function todoItemButton(projectId){
        const addTodoItemButton = document.createElement("button");
        addTodoItemButton.textContent = "+ Todo Item";
        addTodoItemButton.addEventListener("click", () => {
            modal.style.display = "block";
            document.querySelector("#projectId").value = projectId;
        });
        return addTodoItemButton;
    }

    function refreshProject(project, projectId){
        const projectElement = document.querySelector("#projectId");
        clearProject(projectElement);
        populateProjectElement(project, projectId);
    }

    function clearProject(projectElement){
        projectElement.innerHTML = "";
    }

    return {
        createProjectElement,
        refreshProject,
    }
})();