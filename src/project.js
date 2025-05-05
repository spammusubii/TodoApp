export class Project {
    constructor(title, todoItems = [], id = crypto.randomUUID()){
        this._title = title;
        this._todoItems = Array.isArray(todoItems) ? todoItems : [];
        this._id = id;
    }

    getId(){
        return this._id;
    }

    getTitle(){
        return this._title;
    }

    setTitle(title){
        if (typeof title !== "string" || name.trim() === ""){
            throw new Error("Project name must be a non-empty string.");
        }
        this._title = title;
    }

    addTodoItem(todoItem){
        if (!todoItem || typeof todoItem.getId !== "function"){
            throw new Error("Invalid todo item: must have getId() method.")
        }
        this._todoItems.push(todoItem);
    }

    deleteTodoItem(todoItemID){
        this._todoItems = this._todoItems.filter(item => item.getId() !== todoItemID);
    }

    getTodoItem(todoItemId){
        return this._todoItems.find(todoItem => todoItem.getId() === todoItemId);
    }

    getTodoItems(){
        return this._todoItems.map(item => item.clone());
    }

    clone(){
        return Project(this._title, this._todoItems, this._id);
    }

}