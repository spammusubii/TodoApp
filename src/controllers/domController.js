import { projectView } from "../views/projectView"
import { projectController } from "./projectController";
import { TodoItem } from "../models/todo-item";

export const domController = (function(){
    const todoAppContainer = document.querySelector(".todo-app-container");
    const addTodoItemForm = document.querySelector(".add-todo-item-form");
    const addTodoItemModal = document.querySelector(".add-todo-item-modal");
    const addTodoItemFormCloseBtn = document.getElementById("add-todo-item-form-close-btn");
    const addProjectBtn = document.getElementById("add-project-btn");
    const addProjectForm = document.querySelector(".add-project-form");
    const addProjectModal = document.querySelector(".add-project-modal")
    const addProjectFormCloseBtn = document.getElementById("add-project-form-close-btn");
    
    function clearTodoProjects(){
        todoAppContainer.innerHTML = "";
    }

    function populateAppWithTodoProjects(projects){
        projects.forEach(project => {
            const projectElement = projectView.createProjectElement(project);
            todoAppContainer.appendChild(projectElement);
        })
    }

    const today = new Date().toISOString().split("T")[0];
    addTodoItemForm.elements["due-date"].min = today;
    addTodoItemForm.elements["due-date"].value = today;

    addTodoItemForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = addTodoItemForm.elements["title"].value;
        const description = addTodoItemForm.elements["description"].value;
        const dueDate = addTodoItemForm.elements["due-date"].value;
        const projectId = addTodoItemForm.elements["projectId"].value;

        const newTodo = new TodoItem(title, description, dueDate);

        projectController.addTodoToProject(projectId, newTodo);

        const updatedProjects = projectController.getAllProjects();

        clearTodoProjects();
        populateAppWithTodoProjects(updatedProjects);

        addTodoItemModal.style.display = "none";
        clearAddTodoItemForm();
    })

    const clearAddTodoItemForm = () => {
        addTodoItemForm.elements["title"].value = "";
        addTodoItemForm.elements["description"].value = "";
        const today = new Date().toISOString().split("T")[0];
        addTodoItemForm.elements["due-date"].value = today;
        addTodoItemForm.elements["projectId"].value = "";
    }

    addTodoItemFormCloseBtn.addEventListener("click", () => {
        addTodoItemModal.style.display = "none"
        clearAddTodoItemForm();
    })

    addProjectBtn.addEventListener("click", () => {
        addProjectModal.style.display = "block";
    })

    addProjectFormCloseBtn.addEventListener("click", () => {
        addProjectModal.style.display = "none";
        clearAddProjectForm();
    })

    const clearAddProjectForm = () => {
        addProjectForm.elements["title"].value = "";
    }

    window.onclick = function(event) {
        if (event.target == addTodoItemModal || event.target == addProjectModal) {
            addTodoItemModal.style.display = "none";
            addProjectModal.style.display = "none";
        }
    }

    return {
        clearTodoProjects,
        populateAppWithTodoProjects,
    }
})();