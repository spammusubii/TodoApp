import { todoView } from "./todoView";

export const projectView = (function(){
    // function to create a project element
    // input: project object
    // output: reference to project element
    function createProjectElement(project){
        const projectElement = document.createElement("div");
        populateProjectElement(project, projectElement);
        return projectElement;
    }

    // function to create a todo item element for each todo item in the project
    // input: reference to project element
    // output: reference to project element with todo item elements
    function populateProjectElement(project, projectElement){
        projectElement.classList.add("project-container")
        projectElement.id = project.getId();

        const title = document.createElement("h2");
        title.textContent = project.getTitle();
        projectElement.appendChild(title);

        const todoItemsContainer = document.createElement("ul");
        todoItemsContainer.classList.add("todo-items-container");

        project.getTodoItems().forEach((item) => {
            const li = document.createElement("li");
            li.id = item.getId();
            const todoItemElement = todoView.createTodoItemElement(item);
            li.appendChild(todoItemElement);
            todoItemsContainer.appendChild(li);
        })

        projectElement.appendChild(todoItemsContainer);
    }

    return {
        createProjectElement,
    }
})();