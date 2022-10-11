function checkPin() {
    if (authorized) {
        return true;
    }

    let inputPin = parseInt("1234", 10)
    let triesAllowed = 3;

    for (let i = triesAllowed; i > 0; i--) {
        if (inputPin == userPin) {
            authorized = true;
            return true;
        } else {
            inputPin = parseInt("5678", 10)
        }
    }
    return false;
}


function viewBalance() {
    console.log(`Your balance is: £ ${userBalance}`);
    return userBalance;
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

function depositMoney(despositAmmount) {
    despositAmmount = parseInt(despositAmmount, 10);
    return alterBalance(Math.abs(despositAmmount));
}

function withdrawMoney(withdrawalAmmount) {
    withdrawalAmmount = parseInt(withdrawalAmmount, 10);
    withdrawalAmmount = Math.abs(withdrawalAmmount) * -1;
    return alterBalance(withdrawalAmmount);
}


// clone of index without user prompts to allow for testing
function options() {
    let userInput = "1";
    
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
    let userInput = "n";
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

module.exports = {checkPin, viewBalance, depositMoney, withdrawMoney, alterBalance, userBalance, authorized};