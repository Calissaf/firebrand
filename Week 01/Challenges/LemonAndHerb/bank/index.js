function checkPin(userPin) {
    let inputPin = parseInt(prompt("Enter pin: "), 10)
    let triesAllowed = 3;

    for (let i = triesAllowed; i > 0; i--) {
        if (inputPin == userPin) {
            return true;
        } else {
            inputPin = parseInt(prompt((`Invalid pin ${i} tries remaining\n Enter pin: `)), 10)
        }
    }
    return false;
}


function viewBalance(userbalance) {
    alert(`Your balance is: £ ${userbalance}`);
    console.log(`Your balance is: £ ${userbalance}`);
}

function alterBalance(userBalance, changeAmmount) {
    let newBalance = userBalance + changeAmmount;
    if (newBalance > 0){
        alert("Transaction successful");
        console.log("Transaction successful");
        return newBalance;
    } else {
        alert("Error please try again");
        console.log("Error please try again");
        repeatOptions();
    }
}

function depositMoney(userBalance) {
    let despositAmmount = parseInt(prompt("How much would you like to deposit?"), 10);
    return alterBalance(userBalance, Math.abs(despositAmmount));
}

function withdrawMoney(userBalance) {
    let withdrawalAmmount = parseInt(prompt("How much would you like to withdraw?"), 10);
    withdrawalAmmount = Math.abs(withdrawalAmmount) * -1;
    return alterBalance(userBalance, withdrawalAmmount);
}


function options() {
    let userInput = prompt("Please select an option:\n 1.View balance\n 2.Deposit money\n 3.Withdraw money\n 4.Exit");
    
    if (userInput == "1" && checkPin(userPin) == true) {
        viewBalance(userBalance);
        repeatOptions();
    } else if (userInput == "2" && checkPin(userPin) == true) {
        userBalance = depositMoney(userBalance);
        repeatOptions();
    } else if (userInput == "3" && checkPin(userPin) == true) {
        userBalance = withdrawMoney(userBalance);
        repeatOptions();
    } else if (userInput == "4") {
        alert("Thanks for banking with us today!");
        console.log("Thanks for banking with us today!");
        return;
    } else {
        console.log("Input invalid");
        options();
    }
}

function repeatOptions() {
    let userInput = prompt("Would you like to select another option? (yes/no)");
    if (userInput == "yes" || userInput == "Yes") {
        options();
    } else if (userInput == "no" || userInput == "No") {
        alert("Thanks for banking with us today!");
        console.log("Thanks for banking with us today!");
        return;
    } else {
        alert("Input invalid");
        console.log("Input invalid");
        repeatOptions();
    }
}

let userPin = 1234;
let userBalance = 20;

options();