import { domController } from "./controllers/domController.js"
import { projectController } from "./controllers/projectController.js";
import { MOCK_PROJECTS } from "./data/mockProjects.js";

import "./styles.css"

function init(){
    projectController.setProjects(MOCK_PROJECTS);
    domController.populateAppWithTodoProjects(projectController.getAllProjects());
}

init();