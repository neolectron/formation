const textInput = document.querySelector('.todos-input');
const todos = document.querySelector('.todos-list');
const form = document.querySelector('form');

const createTodo = function(txt) {
    const todo = document.createElement('div');
    todo.classList.add('todos-todo');

    const todoDelete = document.createElement('div');
    todoDelete.classList.add('todo-delete');
    todoDelete.innerText = '×';

    const todoCheckbox = document.createElement('div');
    todoCheckbox.classList.add('input-checkbox');
    todoCheckbox.innerHTML = `
    <input id="todo-${todos.childElementCount + 1}" type="checkbox">
    <label for="todo-${todos.childElementCount + 1}">
        <svg><use xlink:href="#not-check"></use></svg>
        <svg><use xlink:href="#check"></use></svg>
    </label>`;

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = txt;

    todo.appendChild(todoDelete);
    todo.appendChild(todoCheckbox);
    todo.appendChild(todoText);

    todoCheckbox.addEventListener('change', function() {
        todo.classList.toggle('done');
    });

    todoDelete.addEventListener('click', () => {
        removeTodo(todo);
    });

    return todo;
}

const addTodo = function(todo) {
    todos.prepend(todo);
}

const checkTodo = function(todo) {
    todo.classList.toggle('done');
}

const removeTodo = function(todo) {
    todo.remove();
}


form.addEventListener('submit', () => {
    const { value } = textInput;
    textInput.value = '';
    
    const todo = createTodo(value);
    addTodo(todo);
});