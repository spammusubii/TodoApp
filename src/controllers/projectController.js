let projects = [];

function setProjects(initialProjects){
    projects = initialProjects;
}

function addProject(project){
    projects.push(project);
}

function removeProject(projectId){
    projects = projects.filter(project => project.id !== projectId);
}

function getAllProjects() {
    return projects;
}

function getProjectById(projectId) {
    return projects.find(p => p.getId() === projectId);
}

function addTodoToProject(projectId, todo){
    const project = getProjectById(projectId);
    if (project){
        project.addTodoItem(todo);
        return true;
    }
    return false;
}

export const projectController = {
    setProjects,
    addProject,
    removeProject,
    getAllProjects,
    getProjectById,
    addTodoToProject,
}