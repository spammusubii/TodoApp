export class TodoApp{
    constructor(projects = []){
        this._projects = projects;
    }

    addProject(project){
        this._projects.push(project);
    }

    getProjects(){
        return this._projects.map(project => project.clone());
    }

    getProject(projectId){
        return this._projects.find(project => project.getId() === projectId);
    }

    addTodoItemToProject(projectId, item){
        this.getProject(projectId).addTodoItem(item);
    }

    deleteTodoItemFromProject(projectId, itemId){
        this.getProject(projectId).deleteTodoItem(itemId);
    }
}