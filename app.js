// import
// var userName = prompt("userName")

// processing
// var welcomeMessage = "Hi!! " + userName

// output
// alert(welcomeMessage)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

console.log(txtInput);
console.log(outputDiv);

function clickHandler() {
    console.log("Clicked!!");
    console.log("input", txtInput.value);

    outputDiv.innerText = txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)
 