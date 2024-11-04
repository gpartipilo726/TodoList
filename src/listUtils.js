//new task logic goes here
import {taskBody} from "./dom.js";

 class List {
    constructor(name){
        this.name = name;
    }
    

}

const list = {
    tasks: [],
    printTest: function (){
        console.log("INSIDE LIST WHAT UP");
    },
    addNewTask: function (tasksObj){
        this.tasks.push(taskObj);
    },
    printTasks: function (){
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
    }, 
    getTaskData: function (){
        const taskName = document.querySelector('#projectName');
        const taskDueDate = document.querySelector('#project-date');
        const taskPriority = document.querySelector('#project-priority');
        const taskDescription = document.querySelector('#project-desc');

        return {
            taskName: taskName.value,
            dueDate: taskDueDate.value,
            priority: taskPriority.value,
            taskDescription: taskDescription.value,
        }
    }
}

export function assignListMethods(listObj){
    
    Object.assign(listObj, list);

}

export function createListObject(newListText){

    let listObj = new List(newListText);
    localStorage.setItem(newListText, JSON.stringify(listObj));
    return JSON.parse(localStorage.getItem(newListText));
}