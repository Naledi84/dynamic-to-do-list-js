// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage
  loadTasks();

  // Function to add a new task
  function addTask(taskText, save = true) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task from DOM and localStorage
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeFromStorage(taskText);
    };

    // Append button to list item, then list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to localStorage if not loading from storage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = '';
  }

  // Function to load tasks from localStorage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Function to remove a task from localStorage
  function removeFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Add task on button click
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
    } else {
      addTask(taskText);
    }
  });

  // Add task on Enter keypress
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


