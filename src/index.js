import "./style.css";
import { showDialog } from "./pages/add-task.js";
import searchTab from "./pages/search.js";
import { todoTab } from "./pages/todo.js";
import Todo from "./pages/todo.js";
import { toDos } from "./pages/todo.js";
import todayTab from "./pages/today.js";
import upcomingTab from "./pages/upcoming.js";
import projectsTab from "./pages/projects.js";
import { 
    storageAvailable, 
    saveData, 
    loadData 
} from "./pages/storage.js";

// Testing storage
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
    console.log("Storage is available");
} else {
  // Too bad, no localStorage for us
    console.log("Nah");
}

const addTask = document.querySelector(`#add-task`);
addTask.addEventListener('click', () => {
    showDialog();
});

const search = document.querySelector(`#search`);
search.addEventListener('click', () => {
    searchTab();
});

const todo = document.querySelector(`#to-do`);
todo.addEventListener('click', () => {
    todoTab();
});

const today = document.querySelector(`#today`);
today.addEventListener('click', () => {
    todayTab();
});

const upcoming = document.querySelector(`#upcoming`);
upcoming.addEventListener('click', () => {
    upcomingTab();
});

const projects = document.querySelector(`#projects`);
projects.addEventListener('click', () => {
    projectsTab();
});

const addTaskDialog = document.querySelector(`#add-task-dialog`);
const addTaskForm = document.querySelector(`.add-task-form`);
addTaskForm.addEventListener('submit', () => {
    const title = document.querySelector(`#title`);
    const description = document.querySelector(`#description`);
    const date = document.querySelector(`#date`);
    const priority = document.querySelector(`#priority`);
    const notes = document.querySelector(`#notes`);

    const newTask = new Todo(
        title.value,
        description.value,
        date.value,
        priority.value,
        notes.value
    );

    toDos.push(newTask);
    saveData(toDos);
    const task = loadData();
    console.log(task);

    addTaskForm.reset();
    addTaskDialog.close();
});

const addTaskCancelBtn = document.querySelector(`.cancel-btn`);
addTaskCancelBtn.addEventListener('click', () => {
    addTaskDialog.close();
});