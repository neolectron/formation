const hostname = 'http://localhost:8080';
const form = document.querySelector('form');
const todos = document.querySelector('.todos-list');

const getTodos = () => {
    return fetch(`${hostname}/todos`)
    .then((res) => res.json());
}

const postTodo = (todotext) => {
    return fetch(`${hostname}/todo`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: todotext, checked: false})
    })
    .then((res) => res.json());
}

const deleteTodo = (todo) => {
    return fetch(`${hostname}/todo/${todo.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json());
}

const patchTodo = (todo) => {
    return fetch(`${hostname}/todo/${todo.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    })
    .then((res) => res.json());
}

const createTodo = (todoJson) => {

    const { text, checked, id } = todoJson;

    const todo = document.createElement('div');
    todo.setAttribute('data-id', id);
    todo.classList.add('todos-todo');

    const todoDelete = document.createElement('div');
    todoDelete.classList.add('todo-delete');
    todoDelete.innerText = '×';

    const todoCheckbox = document.createElement('div');
    todoCheckbox.classList.add('input-checkbox');
    todoCheckbox.innerHTML = `
    <input id="todo-${todoJson.id}" type="checkbox">
    <label for="todo-${todoJson.id}">
        <svg><use xlink:href="#not-check"></use></svg>
        <svg><use xlink:href="#check"></use></svg>
    </label>`;

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = text;

    if(checked) {
        todo.classList.add('done');
        todoCheckbox.querySelector('input[type=checkbox]').checked = true;
    }

    todo.appendChild(todoDelete);
    todo.appendChild(todoCheckbox);
    todo.appendChild(todoText);

    todoCheckbox.addEventListener('change', function() {
        patchTodo({ ...todoJson, checked : !todoJson.checked }).then(() => {
            todo.classList.toggle('done');
        });
    });

    todoDelete.addEventListener('click', () => {
        deleteTodo(todoJson).then(() => {
            todo.remove();
        })
    });

    return todo;
}

const checkTodo = (todo) => {
    todo.classList.toggle('done');
}

const createAndRenderTodo = (jsonTodo) => {
    const todo = createTodo(jsonTodo);
    todos.prepend(todo);
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { todotext } = ev.target.elements;
    postTodo(todotext.value).then(createAndRenderTodo);
    todotext.value = '';
});

getTodos().then((jsonResponse) => {
    jsonResponse.filter(x => x).forEach(createAndRenderTodo);
});
