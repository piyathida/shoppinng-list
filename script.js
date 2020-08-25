var enterBtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton;


function inputLength() {
    return input.value.length;
}

function createDeleteButton(parent) {
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("x"));
    deleteBtn.className = "delete";
    parent.appendChild(deleteBtn);
}

function toggleDoneClass() {
    this.classList.toggle("done"); //Use this to only the one you selected
}

function createListElement() {
    var li = document.createElement("li");

    li.className = "list";

    li.appendChild(document.createTextNode(input.value + " "));

    ul.appendChild(li);

    createDeleteButton(li);

    li.addEventListener("click", toggleDoneClass);

    input.value = "";
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function updateDeleteButton() {

    deleteButton = document.querySelectorAll(".delete");

    for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function() {
            this.parentNode.remove();
        });
    }
}


enterBtn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


updateDeleteButton();