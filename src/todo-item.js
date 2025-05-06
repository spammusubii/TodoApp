export class TodoItem {
    #title;
    #dueDate;
    #description;
    #id;
    #dateCreated;
    #hasFinished;

    constructor(title, description = "", dueDate = "", id = crypto.randomUUID(), dateCreated = new Date().toDateString(), hasFinished = false){
        this.#title = title;
        this.#dueDate = dueDate;
        this.#description = description;
        this.#id = id;
        this.#dateCreated = dateCreated;
        this.hasFinished = hasFinished;
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

    getHasFinished(){
        return this.#hasFinished;
    }

    setHasFinished(){
        this.#hasFinished = !this.#hasFinished;
    }

    clone(){
        return new TodoItem(this.#title, this.#description, this.#dueDate, this.#id, this.#dateCreated, this.#hasFinished);
    }
}