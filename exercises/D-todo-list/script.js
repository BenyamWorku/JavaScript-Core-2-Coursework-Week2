function todoList(todos) {
  let content = document.getElementById("content");
  let unorderedList = content.appendChild(document
    .createElement("ul"));

  for (let aTask of todos) {
    let listEl = document.createElement("li");
    unorderedList.appendChild(listEl).textContent = aTask.todo;
  }
  
  // callback to be triggered when the list elements are clicked on
  let strikeToggler = function (e) {
    e.target.classList.toggle("adderClass");// the adderClass css 
  };
  // make use of event bubling where the <ul> listens the event on behalf of its children i.e <li>
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
