function todoList(todos) {
  let content = document.getElementById("content");
  let unorderedList = content.appendChild(document
    .createElement("ul"));

  for (let aTask of todos) {
    let listEl = document.createElement("li");
    // listEl.classList.add("classShoppingList");
    unorderedList.appendChild(listEl).textContent = aTask.todo;
  }
  

  let strikeToggler = function (e) {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    }
    else {
      e.target.style.textDecoration = "line-through";
    }

  };
  unorderedList.addEventListener("click", strikeToggler);
  
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);
console.log(content);
