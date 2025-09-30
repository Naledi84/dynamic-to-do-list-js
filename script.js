// Ensure code runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new li element and set textContent
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick event to remove the li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Attach event listener to button
    addButton.addEventListener("click", addTask);

    // Attach event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

