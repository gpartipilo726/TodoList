import "./styles.css";
import {sidebarBody, newListBtn, taskBody, addTaskBtn, formContainer, addTaskForm, myListsH3} from "./dom.js";
import {List} from "./listUtils.js";

let myLists = [];

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
    let newList = addNewListField.value

        if(e.key === "Enter"){
            sidebarBody.innerHTML +=`<h3>${newList}</h3>`;
            document.getElementById("AddNewList-input").remove();
            newListBtn.disabled = false;
            
            let listObj = new List(newList);
            myLists.push(listObj);

            console.log(myLists);
        }
    
    });


});


myListsH3.addEventListener("click", (e) => {
    console.log(e.target.value);

    if (e.target === "h3"){
        const listItem = e.target.closest("h3");
        taskBody.textContent = '';
        //find list
        //print tasks 
        console.log(listItem.textContent);
        //myLists.find(h3.value)
    }



});



addTaskBtn.addEventListener("click", () =>{
    
    addTaskBtn.style.display = 'none';
    formContainer.innerHTML = addTaskForm;
    const submitBtn = document.querySelector("#submit");

    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        document.getElementById("addTaskForm").remove();

        addTaskBtn.style.display = 'block';

        myListsH3.forEach((list) =>{
            list.addEventListener("click", (e) =>{
                //print lists
                let arraylocation = list.find(() => list.textContent) 
                //find clicked h3 in array
                //pull in the object stored in array
                //print object tasks to DOM   
            });
        });
        
    });



});


