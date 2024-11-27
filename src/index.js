import "./styles.css";
import {sidebarBody, newListBtn, taskBody, addTaskBtn, formContainer, addTaskForm, projectTitle} from "./dom.js";
import {createListObject, assignListMethods, createList} from "./listUtils.js";


document.addEventListener("DOMContentLoaded", () =>{

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        
        sidebarBody.innerHTML += `<h3>${key}</h3>`
    }
    addListListener();

});


newListBtn.addEventListener("click", (e) =>{
    const inputField = document.createElement("input");
    inputField.type = 'text';
    inputField.placeholder = "New List";
    inputField.id = "AddNewList-input";
    inputField.value = '';
    sidebarBody.appendChild(inputField);
    newListBtn.disabled = true;

    
    //dynamicly created input field
    const addNewListField = document.getElementById("AddNewList-input");
    addNewListField.addEventListener("keyup", (e) =>{
    let newListText = addNewListField.value

        if(e.key === "Enter"){
            sidebarBody.innerHTML +=`<h3>${newListText}</h3>`;
            document.getElementById("AddNewList-input").remove();
            newListBtn.disabled = false;
            
            
            //create list object 
             const newListObj = createList(newListText); 
             console.log(newListObj);
             localStorage.setItem(newListText, JSON.stringify(newListObj));
            addListListener();

        }
    
    });


});

//TODO: Create a eventlistener for loading existing lists





function addListListener(){
    let myListsH3 = sidebarBody.querySelectorAll("h3");

    myListsH3.forEach((list) =>{


        list.addEventListener("click", (e) =>{
            //print lists
            let h3Target = e.target.closest("h3");
            projectTitle.textContent = h3Target.textContent;
            //clears previous tasks from body
            taskBody.innerHTML = '';

            
            //IF LIST IS IN LOCAL STORAGE
            if(localStorage.getItem(h3Target.textContent) != null){
                console.log("inside local storage if statement");
                //get list from local storage and parse it back into an object
                let List = JSON.parse(localStorage.getItem(projectTitle.textContent));
                assignListMethods(List);

                //print its contents
                List.printTasks();

            }

        });
    });
}



// myListsH3.addEventListener("click", (e) => {
//     console.log(e.target.value);

//     if (e.target === "h3"){
//         const listItem = e.target.closest("h3");
//         taskBody.textContent = '';
//         //find list
//         //print tasks 
//         console.log(listItem.textContent);
//         //myLists.find(h3.value)
//     }



// });




//Add New Task form button
addTaskBtn.addEventListener("click", () =>{
    
    addTaskBtn.style.display = 'none';
    formContainer.innerHTML = addTaskForm;
    const taskName = document.querySelector('#project-name');
    const taskDueDate = document.querySelector('#project-date');
    const taskPriority = document.querySelector('#project-priority');
    const taskDescription = document.querySelector('#project-desc');
    const submitBtn = document.querySelector("#submit");
    const listTitle = projectTitle.textContent;
    
    //get list from local storage
    let existingList = JSON.parse(localStorage.getItem(listTitle));
    assignListMethods(existingList);

    //submit button for "Add New Task"
    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        document.getElementById("addTaskForm").remove();

        addTaskBtn.style.display = 'block';
        
        //converts user input into an object to pass in the next function
        let taskData = existingList.getTaskData(taskName.value, taskDueDate.value, taskPriority.value, taskDescription.value);
        
        console.log("Before adding New task: " + JSON.stringify(existingList));
        //adds taskdata object to the array stored in the list object       
        existingList.addNewTask(taskData);
        localStorage.setItem(listTitle, JSON.stringify(existingList));
        console.log("After adding New task: " + JSON.stringify(existingList));
        
        //prints tasks to DOM
        existingList.printTasks();
       

        
    });



});

function AddDeleteBtn () {
    const delBtns = document.querySelectorAll('.taskDel-btn');
    const currentTaskTitle = document.

    delBtns.forEach((button) =>{
        delBtn.addEventListener('click', () =>{


        });
    })

}


