// import
// var userName = prompt("userName")

// processing
// var welcomeMessage = "Hi!! " + userName

// output
// alert(welcomeMessage)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickHandler() {
    console.log("Clicked!!");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)
 