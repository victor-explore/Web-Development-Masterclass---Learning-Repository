const fs = require("fs"); // This is a module that allows us to read and write files.
const filePath = "./todos.json"; // This is the path to the file that contains the todos.

const loadTasks = () => {
  // This function loads the tasks from the file to the JSON object.
  try {
    const dataBuffer = fs.readFileSync(filePath, "utf-8"); // This reads the file and returns a buffer.
    const dataJSON = JSON.parse(dataBuffer); // This parses the buffer and returns a JSON object.
    return dataJSON; // This returns the JSON object.
  } catch (error) {
    return []; // This returns an empty array if the file does not exist.
  }
};

const saveTasks = (tasks) => {
  // This function saves the tasks to the file.
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2)); // This writes the array to the file.
};

const addTask = (task) => {
  // This function adds a task to the todos.
  const tasks = loadTasks(); // This is the object that contains the tasks loaded from the file.
  tasks.push(task); // This adds the task to the array.
  saveTasks(tasks); // This saves the tasks to the file.
  console.log("Task added successfully");
};

const listTasks = () => {
  // This function lists all tasks.
  const tasks = loadTasks(); // This is the object that contains the tasks loaded from the file.
  console.log(tasks); // This logs the tasks to the console.
};

const command = process.argv[2]; // This is the command that the user has entered.
const argument = process.argv[3]; // This is the argument that the user has entered.

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
