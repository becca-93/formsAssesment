const todoForm = document.getElementById('todoForm');
const todoList = document.querySelector('section');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const todoField = document.getElementById('todoField');
    const newTodo = document.createElement('ul');
    const newTodoItem = document.createElement('li');

    newTodoItem.textContent = todoField.value;

    newTodo.appendChild(newTodoItem);
    todoList.appendChild(newTodo);
    
    todoField.value = '';
});