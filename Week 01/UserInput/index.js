let userInput = prompt("Hello how are you?")
console.log(userInput);

if (userInput == "I am good") {
    console.log("T am glad. Your days seems fun?");

    userInput = prompt("Who do you work for?")

    if (userInput == "Deloitte") {
        deloitteEmployee();
    } else if ((userInput == "Firebrand")) {
        firebrandEmployee();
    }
} else {
    console.log("I am sorry to hear that");
}

function deloitteEmployee() {
    console.log("Welcome to Deloitte");
    userInput = prompt("What is your Staff ID?")
    console.log(`Welcome, Staff Number ${userInput}`);
}

function firebrandEmployee() {
    console.log("Ahh, you're an Instructor");
}

