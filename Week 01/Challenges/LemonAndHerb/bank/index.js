function checkPin() {
    if (authorized) {
        return true;
    }

    let inputPin = parseInt(prompt("Enter pin: "), 10)
    let triesAllowed = 3;

    for (let i = triesAllowed; i > 0; i--) {
        if (inputPin == userPin) {
            authorized = true;
            return true;
        } else {
            inputPin = parseInt(prompt((`Invalid pin ${i} tries remaining\n Enter pin: `)), 10)
        }
    }
    return false;
}


function viewBalance() {
    console.log(`Your balance is: £ ${userBalance}`);
}

function alterBalance(changeAmmount) {
    let newBalance = userBalance + changeAmmount;
    if (newBalance > 0){
        console.log("Transaction successful");
        return newBalance;
    } else {
        console.log("Error transaction unsuccessfull");
        return userBalance;
    }
}

function depositMoney() {
    let despositAmmount = parseInt(prompt("How much would you like to deposit?"), 10);
    return alterBalance(Math.abs(despositAmmount));
}

function withdrawMoney() {
    let withdrawalAmmount = parseInt(prompt("How much would you like to withdraw?"), 10);
    withdrawalAmmount = Math.abs(withdrawalAmmount) * -1;
    return alterBalance(withdrawalAmmount);
}


function options() {
    let userInput = prompt("Please select an option:\n 1.View balance\n 2.Deposit money\n 3.Withdraw money\n 4.Exit");
    
    if (userInput == "1" && checkPin()) {
        viewBalance();
        repeatOptions();
    } else if (userInput == "2" && checkPin()) {
        userBalance = depositMoney();
        repeatOptions();
    } else if (userInput == "3" && checkPin()) {
        userBalance = withdrawMoney();
        repeatOptions();
    } else if (userInput == "4") {
        console.log("Thanks for banking with us today!");
        authorized = false;
        return;
    } else {
        console.log("Input invalid");
        options();
    }
}

function repeatOptions() {
    let userInput = prompt("Would you like to select another option? (y/n)");
    if (userInput == "y" || userInput == "Y") {
        options();
    } else if (userInput == "n" || userInput == "N") {
        console.log("Thanks for banking with us today!");
        authorized = false;
        return;
    } else {
        console.log("Input invalid");
        repeatOptions();
    }
}

let userPin = 1234;
let userBalance = 20;
let authorized = false;

options();