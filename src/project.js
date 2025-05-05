export class Project {
    #title;
    #todoItems;
    #id;
    
    constructor(title, todoItems = [], id = crypto.randomUUID()){
        this.#title = title;
        this.#todoItems = Array.isArray(todoItems) ? todoItems : [];
        this.#id = id;
    }

    getId(){
        return this.#id;
    }

    getTitle(){
        return this.#title;
    }

    setTitle(title){
        if (typeof title !== "string" || title.trim() === ""){
            throw new Error("Project name must be a non-empty string.");
        }
        this.#title = title;
    }

    addTodoItem(todoItem){
        if (!todoItem || typeof todoItem.getId !== "function"){
            throw new Error("Invalid todo item: must have getId() method.")
        }
        this.#todoItems.push(todoItem);
    }

    deleteTodoItem(todoItemID){
        this.#todoItems = this.#todoItems.filter(item => item.getId() !== todoItemID);
    }

    getTodoItem(todoItemId){
        return this.#todoItems.find(todoItem => todoItem.getId() === todoItemId);
    }

    getTodoItems(){
        return this.#todoItems.map(item => item.clone());
    }

    clone(){
        return new Project(this.#title, this.getTodoItems(), this.#id);
    }

}