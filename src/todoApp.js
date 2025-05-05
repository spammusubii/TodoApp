export class TodoApp{
    #projects;

    constructor(projects = []){
        this.#projects = projects;
    }

    addProject(project){
        this.#projects.push(project);
    }

    getProjects(){
        return this.#projects.map(project => project.clone());
    }

    getProject(projectId){
        return this.#projects.find(project => project.getId() === projectId);
    }

    addTodoItemToProject(projectId, item){
        this.getProject(projectId).addTodoItem(item);
    }

    deleteTodoItemFromProject(projectId, itemId){
        this.getProject(projectId).deleteTodoItem(itemId);
    }
}