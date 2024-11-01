//new task logic goes here
import {taskBody} from "./dom.js";

 export class List {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    
    addNewTask (title, date, priority, description){
        let task = {
            title: title,
            date: date,
            priority: priority,
            description: description
        }
        this.tasks.push(task);
    }

    printTasks (){
        this.tasks.forEach((task) =>{
            taskBody.innerHTML +=
            `<div class="task">
                <h2 class="task-title">${task.title}</h2>
                <div class="task-details">
                    <h3>Due Date:</h3>
                    <h4>${task.date}</h4>
                    <h3>Priority:</h3>
                    <h4>${task.priority}</h4>
                </div>
                <h3 class="task-notes">Notes:</h3>
                <p>${task.description}</p>
                <div class="task-buttons">
                    <button class="taskEdit-btn">Edit</button>
                    <button class="taskDel-btn">Delete</button>
                </div>
            </div>`
        });
    }
}