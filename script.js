// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task when button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button to list item, then list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter keypress
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
