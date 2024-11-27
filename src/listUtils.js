//new task logic goes here
import {taskBody} from "./dom.js";

    // export function List (name) {

    //     this.name = name;
    //     this.tasks = [];
    // }

    export function createList (name){

        return {
            name: name,
            tasks: [],
            
        }
    }

const ListMethods = {
    addNewTask: function (tasksObj){
        this.tasks.push(tasksObj);
    },
    printTasks: function (){
        taskBody.innerHTML = '';
        this.tasks.forEach((task) =>{
            taskBody.innerHTML +=
            `<div class="task">
                <h2 class="task-title">${task.title}</h2>
                <div class="task-details">
                    <h3>Due Date:</h3>
                    <h4>${task.dueDate}</h4>
                    <h3>Priority:</h3>
                    <h4>${task.priority}</h4>
                </div>
                <h3 class="task-notes">Notes:</h3>
                <p>${task.description}</p>
                <div class="task-buttons">
                    <button class="taskDel-btn">Delete</button>
                </div>
            </div>`
        });
    },
    getTaskData: function (taskName, taskDueDate, taskPriority, taskDescription){

        return {
            title: taskName,
            dueDate: taskDueDate,
            priority: taskPriority,
            description: taskDescription,
        }
    }
}


export function assignListMethods(listObj){
    
    Object.assign(listObj, ListMethods);

}

