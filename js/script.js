const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = JSON.parse(localStorage.getItem('plans')) || [];

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function (item) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            ' <button class="todo-remove"></button>' +
            ' <button class="todo-complete"></button>' +
            ' </div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            toDoData = toDoData.filter(function (filterItem) { return filterItem !== item; });
            li.remove('todo-item')
            localStorage.removeItem('Name', JSON.stringify(item))
            // render()
        })
    })
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()
    if (headerInput.value !== '') {
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        toDoData.push(newToDo)
        localStorage.setItem('plans', JSON.stringify(toDoData))
        headerInput.value = ''
        render()
    }
})

render()