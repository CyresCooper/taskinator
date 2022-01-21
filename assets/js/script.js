var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
//create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  //create div to hol task info and add to list item
  var taskIntoEl = document.createElement("div");
  //give it as class name 
  taskIntoEl.className = "task-info";
  //add HTML content to the div 
  taskIntoEl.innerHTML = "<h3 calss= 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput +"</span>";
  
  listItemEl.appendChild(taskIntoEl);
  //add entire list item to list 
  tasksToDoEl.appendChild(listItemEl);
  
  }; 

  formEl.addEventListener("submit", createTaskHandler);