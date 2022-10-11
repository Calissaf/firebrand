const body = document.body;
const headerOne = document.getElementById("headerOne");
const buttonOne = document.getElementById("buttonOne");

let toggle = true;

// buttonOne.addEventListener("click", () => {
//     if (toggle == true) {
//         console.log("It is true");
//         body.style.backgroundColor = "black";
//         headerOne.style.color = "white";
//         toggle = false;
//     } else {
//         console.log("It is false");
//         body.style.backgroundColor = "white";
//         headerOne.style.color = "black";
//         toggle = true;
//     }
// })

function darkTheme() {
    body.style.backgroundColor = "black";
    headerOne.style.color = "white";
}

function lightTheme() {
    body.style.backgroundColor = "white";
    headerOne.style.color = "black";

}

buttonOne.addEventListener("click", () => {
    if (toggle == true) {
        darkTheme();
        buttonOne.textContent = "Light Theme";
        toggle = false;
    } else {
        lightTheme();
        buttonOne.textContent = "Dark Theme"
        toggle = true;
    }
    
})

console.log(typeof body);
console.log(typeof headerOne);
console.log(typeof buttonOne);