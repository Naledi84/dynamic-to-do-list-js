// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 2: Load tasks from localStorage when the page loads
  loadTasks();

  // Step 3: Function to add a task
  function addTask(taskText, save = true) {
    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Step 4: Remove task from DOM and localStorage
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeFromStorage(taskText);
    };

    // Append button to <li>, then <li> to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Step 5: Save task to localStorage (only if not loading from storage)
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskInput.value = '';
  }

  // Step 6: Load tasks from localStorage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
  }

  // Step 7: Remove task from localStorage
  function removeFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Step 8: Add task when button is clicked
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
    } else {
      addTask(taskText);
    }
  });

  // Step 9: Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
      } else {
        addTask(taskText);
      }
    }
  });
});
