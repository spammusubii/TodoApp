import { Project } from "./project.js"
import { TodoItem } from "./todo-item.js"
import { domController } from "./domController.js"

import "./styles.css"

const MOCK_DATA = Array(5).fill(0)
                    .map((_, i) => new Project(`Project ${i+1}`))
                    .map( project => {
                            Array(3).fill(0)
                                    .map((_,i)=>new TodoItem(`Todo Item ${i+1}`, `This is a random task. This is a description of a random task. Do ASAP.`))
                                    .forEach(todoItem=>project.addTodoItem(todoItem))
                            return project;
                        })

console.log(MOCK_DATA);

function init(){
    domController.populateAppWithTodoProjects(MOCK_DATA);
}

init();