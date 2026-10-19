export const todoTab = () => {
    console.log("To do");
};

export default class Todo {
    constructor(title, description, date, priority, notes) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.notes = notes;
        this.id = crypto.randomUUID();
    };
};

export const toDos = [];
