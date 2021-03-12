
// starter to do array
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
let ulTag = document.createElement("ul");
ulTag.classList.add("list-group");
ulTag.setAttribute("id", "todo-list");
document.getElementById("content")
  .querySelector(".container")
  .querySelector(".row")
  .querySelector(".col-sm").appendChild(ulTag)
let inputEl = document.querySelector("input");


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.


function populateTodoList(todos) {
  for (let [i, chore] of todos.entries()) {
    console.log(ulTag);

    let liTag = document.createElement("li");
    liTag.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    liTag.appendChild(document.createTextNode(chore.task));

    let spanTag = document.createElement("span");
    spanTag.classList.add("badge", "bg-primary", "rounded-pill");
    liTag.appendChild(spanTag);

    let idiomCheckTag = document.createElement("i");
    idiomCheckTag.classList.add("fa", "fa-check", "spacer");
    idiomCheckTag.setAttribute("aria-hidden", "false")

    let idiomTrashTag = document.createElement("i");
    idiomTrashTag.classList.add("fa", "fa-trash", "spacer");
    idiomTrashTag.setAttribute("aria-hidden", "false");

    spanTag.appendChild(idiomCheckTag);
    spanTag.appendChild(idiomTrashTag);

    ulTag.appendChild(liTag);
  }

}

populateTodoList(todos);

function createListElement() {
  let liTag = document.createElement("li");
  liTag.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
  liTag.appendChild(document.createTextNode(inputEl.value));

  let spanTag = document.createElement("span");
  spanTag.classList.add("badge", "bg-primary", "rounded-pill");
  liTag.appendChild(spanTag);

  let idiomCheckTag = document.createElement("i");
  idiomCheckTag.classList.add("fa", "fa-check", "spacer");
  idiomCheckTag.setAttribute("aria-hidden", "false")

  let idiomTrashTag = document.createElement("i");
  idiomTrashTag.classList.add("fa", "fa-trash", "spacer");
  idiomTrashTag.setAttribute("aria-hidden", "false");

  spanTag.appendChild(idiomCheckTag);
  spanTag.appendChild(idiomTrashTag);

  ulTag.appendChild(liTag);

}

// console.log(ulTag.tagName);
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  
  let newTask = { task: inputEl.value, completed: false };
  if (inputEl.value.length > 0) {
    // console.log(inputEl.value);
    todos.push(newTask);
    createListElement();
  }
  // populateTodoList(newTask);
  inputEl.value = "";
  console.log(todos);

  console.log(todos);

}
//
// window.onload = populateTodoList(todos);


function removeTodo(event) {
  if (event.target.classList.contains("fa-trash"))
    event.target.parentElement.parentElement.remove();
}

function crossWhenDone(event) {
  if (event.target.classList.contains("fa-check"))
    event.target.parentElement.parentElement.classList.toggle("done");
}
//event listeners 
ulTag.addEventListener("click", crossWhenDone);
ulTag.addEventListener("click", removeTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
