// TODO: Create a test for each cash machine functions

const main = require("./main");

test("that the check pin function sets authorized to true for a matching pins", () => {
    main.authorized = main.checkPin();
    expect(main.authorized).toBe(true);
})

// set userInput to 5678
// test("that the check pin function sets authorized to false if pins don't match", () => {
//     main.authorized = main.checkPin();
//     expect(main.authorized).toBe(false);
// })

test("that the view balance function logs the users balance", () => {
    expect(main.viewBalance()).toBe(main.userBalance);
})

test("that withdraw function decreases user balance by specified amount", () => {
    let finalBalance = main.userBalance;
    finalBalance = main.withdrawMoney(5);
    expect(finalBalance).toBe(main.userBalance - 5);
})

test("that deposit function decreases user balance by specified amount", () => {
    let finalBalance = main.userBalance;
    finalBalance = main.depositMoney(5);
    expect(finalBalance).toBe(main.userBalance + 5);
})

test("that alter balance function changes user balance by specified amount", () => {
    let finalBalance = main.userBalance;
    finalBalance = main.alterBalance(5);
    expect(finalBalance).toBe(main.userBalance + 5);
})
