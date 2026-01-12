let tasks = [];

// CREATE
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);
    taskInput.value = "";
    displayTasks();
}

// READ
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// UPDATE
function editTask(index) {
    const newTask = prompt("Edit task:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        displayTasks();
    }
}

// DELETE
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
