import { Project} from "../models/project.js"
import { TodoItem } from "../models/todo-item.js"

export const MOCK_PROJECTS = Array(5).fill(0)
                    .map((_, i) => new Project(`Project ${i+1}`))
                    .map( project => {
                            Array(3).fill(0)
                                    .map((_,i)=>new TodoItem(`Todo Item ${i+1}`, `This is a random task. This is a description of a random task. Do ASAP.`))
                                    .forEach(todoItem=>project.addTodoItem(todoItem))
                            return project;
                        })