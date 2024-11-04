//all dom changes will go here

export const sidebarBody = document.querySelector("#sidebar-body");
export const newListBtn = document.getElementById("addNewList");
export const taskBody = document.querySelector(".task-body");
export const addTaskBtn = document.querySelector(".addTask-btn");
export const formContainer = document.querySelector(".form-container");
export const projectTitle = document.querySelector("#projectTitle");



export let addTaskForm = 
            `<form action="/" id="addTaskForm">
                <div class="form-body">
                    <label for="project-name">Title</label>
                    <input id="project-name" type="text">
                    <label for="project-date">Due Date</label>
                    <input id="project-date" type="date">
                    <label for="project-priority">Priority</label>
                    <select name="project-priority" id="project-priority">
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                    <label for="project-desc">Description</label>
                    <textarea name="project-desc" id="project-desc"></textarea>
                </div>
                <input type='submit' id='submit' value='Add Task'>
            </form>`



