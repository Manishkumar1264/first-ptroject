// Get the necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task when the "Add Task" button is clicked
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="deleteBtn">Delete</button>
        `;

        // Add event listener for delete button
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Add event listener to mark task as completed when clicked
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
});

// Allow adding task by pressing "Enter" key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
