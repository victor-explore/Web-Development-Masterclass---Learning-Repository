// When the page loads, the following code will run
document.addEventListener("DOMContentLoaded", () => {
  // Grabbing the elements from HTML
  const todoInput = document.getElementById("todo-input"); // Input field for adding new todos
  const addTaskButton = document.getElementById("add-task-btn"); // Button to add new tasks
  const todoList = document.getElementById("todo-list"); // Container for displaying todos

  // Initialize tasks with the tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Display the loaded tasks on the page
  tasks.forEach((task) => {
    // Create a new list item for each task
    const taskItem = document.createElement("li"); // Create a new list item
    taskItem.textContent = task.text; // Set the text of the list item to the task text
    todoList.appendChild(taskItem); // Add the list item to the todo list
  });

  // Add task to the array
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value; // Get the text from the input field
    if (taskText === "") return; // If the input field is empty, return
    const task = {
      id: Date.now(), // Unique ID for the task
      text: taskText, // Text of the task
      completed: false, // Initial completion status
    };
    tasks.push(task); // Add the new task to the tasks array
    saveTasksToLocalStorage(); // Save the tasks array to local storage
    todoInput.value = ""; // Clear the input field
    console.log(tasks); // Log the tasks array to the console
    renderTasks(task); // Render the new task on the page
  });

  // Helper function to save tasks to local storage
  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the tasks array to local storage
  }

  // Helper function to render the tasks on the page
  function renderTasks(task) {
    const li = document.createElement("li"); // Create a new list item but it is empty
    li.setAttribute("data-id", task.id); // Set the data-id attribute of the list item to the task id
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>
      <button class="complete-btn">Complete</button>
    `;
    li.addEventListener("click", (e) => {
      // Add an event listener to the list item
      if (e.target.classList.contains("delete-btn")) {
        // Check if the clicked element is the delete button
        const taskId = parseInt(li.getAttribute("data-id")); // Get the task ID from the list item
        deleteTask(taskId); // Call deleteTask function with the task ID
        li.remove(); // Remove the list item from the DOM
      } else if (e.target.classList.contains("complete-btn")) {
        // Check if the clicked element is the complete button
        const taskId = parseInt(li.getAttribute("data-id")); // Get the task ID from the list item
        const task = tasks.find((t) => t.id === taskId); // Find the task in the tasks array
        task.completed = !task.completed; // Toggle the completed status
        li.classList.toggle("completed"); // Toggle the completed class on the list item
        saveTasksToLocalStorage(); // Save the updated tasks to local storage
      }
    });
    todoList.appendChild(li); // Add the list item to the todo list
  }

  // Helper function to delete a task
  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id); // Filter out the task with the given id
    saveTasksToLocalStorage(); // Save the tasks array to local storage
  }
});
