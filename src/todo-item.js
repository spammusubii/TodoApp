export class TodoItem {
    #title;
    #dueDate;
    #description;
    #id;
    #dateCreated;

    constructor(title, dueDate, description = "", id = crypto.randomUUID(), dateCreated = new Date().toDateString()){
        this.#title = title;
        this.#dueDate = dueDate;
        this.#description = description;
        this.#id = id;
        this.#dateCreated = dateCreated;
    }

    getId(){
        return this.#id;
    }

    setDueDate(dueDate){
        this.#dueDate = dueDate;
    }

    getDueDate(){
        return this.#dueDate;
    }

    getTitle(){
        return this.#title;
    }

    getDateCreated(){
        return this.#dateCreated;
    }

    setTitle(title){
        this.#title = title;
    }

    getDescription(){
        return this.#description;
    }

    setDescription(description){
        this.#description = description;
    }

    clone(){
        return new TodoItem(this.#title, this.#dueDate, this.#description, this.#id, this.#dateCreated);
    }
}