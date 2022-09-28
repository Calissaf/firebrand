const headerOne = document.getElementById("headerOne")
const headerTwo = document.getElementById("headerTwo")
const headerThree = document.getElementById("headerThree")
const button = document.getElementById("button")
const toggle = document.getElementById("toggle")

// headerOne.style.color ="crimson";
 headerOne.style.fontSize = "80px";
// headerOne.style.textDecoration = "underline";

let counter = 0;

button.addEventListener("click", () => {
    if (counter < 10) {
        counter++;
    } else {
        counter = 0;
    }
    // if the counter gets to 10 clicks I want to reset the count to 0 then carry on
    headerThree.textContent = counter;
    // hiding a header when a button is clicked
})

toggle.addEventListener("click", () => {
    if (headerThree.style.display !== "none") {
        headerThree.style.display = "none";
        toggle.innerText = "Show counter"
    } else {
        headerThree.style.display = "block";
        toggle.innerText = "Hide counter"
    }
})
