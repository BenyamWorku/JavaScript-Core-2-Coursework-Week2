function listOfColours(colours) {
  let content = document.querySelector("#content");
  let selectEl = document.createElement("select");
  content.appendChild(selectEl);
  let paraEl = document.createElement("p");
  content.appendChild(paraEl);
  for (let aColour of colours) {
    let optionEl = document.createElement("option")
    selectEl.appendChild(optionEl);
    optionEl.textContent = aColour;

  }
  var setColour = function (e) {
    let paraEl=document.querySelector("p")
    paraEl.textContent = `You've selected: ${e.target.value}`;
    paraEl.style.color = e.target.value;
  };
  selectEl.addEventListener("click", setColour);
  
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
