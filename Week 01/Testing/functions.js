let balance = 1000;

const withdraw = (amount) => {
    balance -= amount;
    return balance;
}

module.exports = {withdraw, balance}