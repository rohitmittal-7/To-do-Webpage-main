// Function to add a note
function addNote() {
  // Get input values and elements
  const noteTitle = document.getElementById('noteTitle').value.trim();
  const noteInput = document.getElementById('noteInput').value.trim();
  const imageInput = document.getElementById('imageInput');
  const imageFile = imageInput.files[0];

  // Check if any input is filled
  if (noteTitle !== '' || noteInput !== '' || imageFile) {
    // Get note list and create list item
    const noteList = document.getElementById('noteList');
    const listItem = document.createElement('li');

    // Create elements based on input values
    if (noteTitle !== '') {
      const title = document.createElement('h3');
      title.textContent = noteTitle;
      listItem.appendChild(title);
    }

    if (noteInput !== '') {
      const noteText = document.createElement('p');
      noteText.textContent = noteInput;
      listItem.appendChild(noteText);
    }

    if (imageFile) {
      const image = document.createElement('img');
      image.src = URL.createObjectURL(imageFile);
      image.style.maxWidth = '100%';
      listItem.appendChild(image);
    }

    // Create delete button and define its functionality
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      noteList.removeChild(listItem);
    };

    // Append delete button to the list item and then to the note list
    listItem.appendChild(deleteButton);
    noteList.appendChild(listItem);

    // Reset input values
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteInput').value = '';
    imageInput.value = null;
  } else {
    alert('Please enter a title, note, or select an image!');
  }
}

// Function to add a to-do item
function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  // Check if input is filled
  if (todoText !== '') {
    // Get todo list and create list item
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');

    // Create checkbox, label, and delete button for the to-do item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = todoText;
    listItem.appendChild(label);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      listItem.remove();
    };
    listItem.appendChild(deleteButton);

    // Append the list item to the todo list and reset input value
    todoList.appendChild(listItem);
    todoInput.value = '';
  } else {
    alert('Please enter a to-do item!');
  }
}

// Dark Mode Toggle Functionality

// Get the dark mode toggle switch and body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Add event listener to the toggle switch
darkModeToggle.addEventListener('change', () => {
  // Toggle dark mode class based on the toggle state
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
