import "./styles.css";
import {sidebarBody, newListBtn, taskBody, addTaskBtn, formContainer, addTaskForm, projectTitle} from "./dom.js";
import {createListObject, assignListMethods} from "./listUtils.js";


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
            
            
            addEventListener();

        }
    
    });


});






function addEventListener(){
    let myListsH3 = sidebarBody.querySelectorAll("h3");

    myListsH3.forEach((list) =>{
        // if(list.getAttribute('hasListener')){
        //     return;
        // }

        list.addEventListener("click", (e) =>{
            //print lists
            let h3Target = e.target.closest("h3");
            projectTitle.textContent = h3Target.textContent;
            taskBody.innerHTML = '';
            
            //find clicked h3 in array
            //pull in the object stored in array
            //print object tasks to DOM   
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
    const submitBtn = document.querySelector("#submit");

    //submit button for "Add New Task"
    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        document.getElementById("addTaskForm").remove();

        addTaskBtn.style.display = 'block';

        //create list object and adds it to local storage
        let listObj = createListObject(projectTitle.textContent);   
        //gets object and assigns methods to it
        assignListMethods(listObj);
        let taskData = listObj.getTaskData();
        listObj.addNewTask(taskData);
        listObj.printTasks();
        
    });



});


