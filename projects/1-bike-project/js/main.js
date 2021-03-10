
let btnEls = document.querySelectorAll(".colorButton");

var applyColour = function (e) {
    let jumbotronEl = document.querySelector(".jumbotron");
    let jumbotronBtnEl = document.getElementsByClassName("buttons")[0];

    console.log(jumbotronBtnEl.firstElementChild.nodeName);
    // firstElementChild returns the first child node as an element node (ignores text and comment nodes)
    //-----------------------------------------------

    let colorOfButton = e.target;
    if (colorOfButton.id === "blueBtn") {
        jumbotronEl.style.backgroundColor = `#588fbd`;
        jumbotronBtnEl.firstElementChild.style.background = `#ffa500`;
        jumbotronBtnEl.lastElementChild.style.background = "black"
        jumbotronBtnEl.lastElementChild.style.color = "white"

    }
    else if (colorOfButton.id === "orangeBtn") {
        jumbotronEl.style.backgroundColor = `#f0ad4e`;
        jumbotronBtnEl.firstElementChild.style.background = `#5751fd`;
        jumbotronBtnEl.lastElementChild.style.background = `#31b0d5`
        jumbotronBtnEl.lastElementChild.style.color = "white"
    }
    else {
        jumbotronEl.style.backgroundColor = `#87ca8a`;
        jumbotronBtnEl.firstElementChild.style.background = `black`;
        jumbotronBtnEl.lastElementChild.style.background = `#8c9c08`
    }
};

for (btn of btnEls) { btn.addEventListener("click", applyColour); }

// form validation section
let formEl = document.getElementsByTagName("form")[0];
formEl.id = "formId"; // assign id to a form element 
document.forms.id = "formId"; // assign id to a form element

console.log(formEl.firstElementChild.firstElementChild.textContent);

let inputEls = document.querySelectorAll("input");
let textAreaEl = document.querySelector("textarea");

document.getElementById("exampleInputEmail1").required = true;
document.getElementById("example-text-input").required = true;
document.getElementById("exampleTextarea").required = true;

let errorFlag = false // change this to true in the event of an error

function validator(e) {
    e.preventDefault();
    inputEls.forEach(function (anInput) {
        let inputType = anInput.getAttribute("type");
        if (anInput.value.length != 0) {
            if (inputType === "email") {
                // console.log(anInput.value.split("").includes("@"));
                if (!anInput.value.split("").includes("@")) {
                    errorFlag = true;
                    anInput.classList.add("make-red");
                }

            }

        }
        else {
            errorFlag = true;
            anInput.classList.add("make-red");
        }

    })
    // the inputs passed all the validation criteria
    if (!errorFlag) {
        alert("Thank you for filling out the form.");
        formEl.submit();
        formEl.reset();
    }
}

formEl.addEventListener("submit", validator);