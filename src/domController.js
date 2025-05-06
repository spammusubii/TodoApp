import { projectView } from "./projectView.js";

export const domController = (function(){
    const todoAppContainer = document.querySelector(".todo-app-container");
    
    function clearTodoProjects(){
        todoAppContainer.innerHTML = "";
    }

    function populateAppWithTodoProjects(projects){
        projects.forEach(project => {
            const projectElement = projectView.createProjectElement(project);
            todoAppContainer.appendChild(projectElement);
        })
    }

    return {
        clearTodoProjects,
        populateAppWithTodoProjects,
    }
})();