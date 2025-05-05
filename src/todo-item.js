export class TodoItem {
    constructor(title, dueDate, description = "", id = crypto.randomUUID, dateCreated = new Date().toDateString()){
        this._title = title;
        this._dueDate = dueDate;
        this._description = description;
        this._id = id;
        this._dateCreated = dateCreated;
    }

    getId(){
        return this._id;
    }

    setDueDate(dueDate){
        this._dueDate = dueDate;
    }

    getDueDate(){
        return dueDate;
    }

    getTitle(){
        return this._title;
    }

    getDateCreated(){
        return this._dateCreated;
    }

    setTitle(title){
        this._title = title;
    }

    getDescription(){
        return this._description;
    }

    setDescription(description){
        this._description = description;
    }

    clone(){
        return TodoItem(this._title, this._dueDate, this._description, this._id, this._dateCreated);
    }
}