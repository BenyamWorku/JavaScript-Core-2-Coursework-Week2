function shoppingList(arrayofGroceries) {
  let content = document.querySelector("#content");
  let listEl = document.createElement("ul");
 
  for (let item of arrayofGroceries) {
    let shoppingListElem = document.createElement("li")
    shoppingListElem.innerText = item;
    listEl.appendChild(shoppingListElem);

  }
  console.log(listEl);
  content.append(listEl);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
