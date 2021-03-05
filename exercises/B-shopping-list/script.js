function shoppingList(arrayofGroceries) {
  let content = document.querySelector("#content");
  let listEl = document.createElement("ul");
  content.appendChild(listEl);
  for (let item of arrayofGroceries) {
    listEl.appendChild(document.createElement("li")).textContent=item;
  }

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
