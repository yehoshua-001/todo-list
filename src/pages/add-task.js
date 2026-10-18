const addTaskDialog = document.querySelector(`#add-task-dialog`);
export const showDialog = () => {
    addTaskDialog.showModal();
};

export const submitForm = () => {
    const title = document.querySelector(`#title`);
    const description = document.querySelector(`#description`);
    const date = document.querySelector(`#date`);
    const priority = document.querySelector(`#priority`);
    const notes = document.querySelector(`#notes`);

    console.log(title.value);
    console.log(description.value);
    console.log(date.value);
    console.log(priority.value);
    console.log(notes.value);
};
