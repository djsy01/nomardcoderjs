const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let toDos = [];

const paintToDo = (contents) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = contents.value;
  const button = document.createElement("button");

  button.setAttribute("data-key", contents.key);
  button.addEventListener("click", deleteToDo);
  button.innerText = "🗑";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};
const deleteToDo = (e) => {
  const parent = e.target.parentNode;
  parent.remove();
  toDos = toDos.filter((todo) => todo.key != e.target.dataset.key);
  localStorage.setItem("todos", JSON.stringify(toDos));
};

const handleToDoSumit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  thing = { key: Date.now(), value: newTodo };
  toDos.push(thing);
  localStorage.setItem("todos", JSON.stringify(toDos));
  paintToDo(thing);
};
if (localStorage.getItem("todos")) {
  toDos = JSON.parse(localStorage.getItem("todos"));
  toDos.forEach(paintToDo);
}
todoForm.addEventListener("submit", handleToDoSumit);