const todoListView = document.querySelector("#todo-list");

const todoInput = document.querySelector('#todo-input input[type="text"]');
const todoSubmit = document.querySelector('#todo-input input[type="button"]');

const getTodoList = function () {
  const todoListString = window.localStorage.getItem("todoList");

  let todoList;

  if (todoListString == null) {
    todoList = [];
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    todoList = JSON.parse(todoListString);
  }

  return todoList;
};

const renderTodoList = function () {
  const todoList = getTodoList();

  todoListView.innerHTML = "";

  for (var i = 0; i < todoList.length; i++) {
    const todoItem = document.createElement("div");

    todoItem.className = "todo-item";

    const checkButton = document.createElement("div");

    checkButton.classList.add("check");

    if (todoList[i].checked) {
      checkButton.classList.add("checked");
    }

    todoItem.appendChild(checkButton);

    const textView = document.createElement("div");

    textView.textContent = todoList[i].text;

    todoItem.appendChild(textView);

    const deleteButton = document.createElement("input");

    deleteButton.setAttribute("type", "button");

    deleteButton.value = "X";

    deleteButton.addEventListener("click", function () {
      removeTodoList(i);
    });

    todoItem.appendChild(deleteButton);

    todoListView.appendChild(todoItem);
  }
};

const appendTodoList = function (text) {
  let todoList = getTodoList();

  todoList.push({ checked: false, text: text });

  window.localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();
};

const tickTodoList = function (index, tick = true) {
  let todoList = getTodoList();

  todoList[index].checked = tick;

  window.localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();
};

const removeTodoList = function (index) {
  let todoList = getTodoList();

  console.log(todoList);

  console.log(index);

  todoList.splice(index, 1);

  console.log(todoList);

  window.localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();
};

const todoSubmitHandler = function () {
  const todoContent = todoInput.value;

  if (todoContent == "") {
    alert("To-Do 내용을 입력해주세요.");

    return;
  }

  appendTodoList(todoContent);
};

todoSubmit.addEventListener("click", todoSubmitHandler);

renderTodoList();
