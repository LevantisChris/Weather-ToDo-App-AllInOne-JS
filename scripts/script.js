/// This script is for the To-Do app customization

const inputBox = document.getElementById("toDoApp-input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // (Unicode) add the X icon in the end of the note that has been created
        li.appendChild(span);
    }
    inputBox.value = ""; // empty the field
    saveData();
}

listContainer.addEventListener("click", function(e){
    console.log("LISTENER-CALLED");
    if(e.target.tagName === "LI") { // if we have clicked on a li element
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") { // if we have clicked on a span element
        e.target.parentElement.remove();
        saveData(); // when the note is deleted the new data will be stored
    }
}, false);

// Store notes in browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("STORED --> " + listContainer.innerHTML);
}

// Recreate the data from the browser storage and load them in the application
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();