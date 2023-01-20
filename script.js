// Select the form, input, and task list elements
const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Add event listener to the form to handle the "submit" event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the page from reloading

  // Get the task text from the input
  const taskText = taskInput.value;

  // Create a new list item and add the task text
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  taskItem.innerText = taskText;

  // Create a new button to delete the task
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  taskItem.appendChild(deleteBtn);

  // Create a new button to mark the task as completed
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.classList.add("complete-btn");
  taskItem.appendChild(completeBtn);

  // Add the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";

  // Add event listeners to the delete and complete buttons
  deleteBtn.addEventListener("click", function() {
    taskItem.remove();
  });

  completeBtn.addEventListener("click", function() {
    taskItem.classList.toggle("completed");
  });
});
