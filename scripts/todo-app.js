"use strict";

let todos = getSavedTodos();
const inputNewTodo = document.querySelector("#new-todo");

inputNewTodo.placeholder = generatePlaceholder(placeholders || []);

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  let value = e.target[0].value.trim();
  if (value.length > 0) {
    todos.push({
      id: uuidv4(),
      text: value,
      completed: false,
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target[0].value = "";
  }
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
