import "./style.css";
import showDialog from "./pages/add-task.js";
import todoTab from "./pages/todo.js";
import todayTab from "./pages/today.js";
import upcomingTab from "./pages/upcoming.js";
import projectsTab from "./pages/projects.js";

const addTask = document.querySelector(`#add-task`);
addTask.addEventListener('click', () => {
    showDialog();
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
