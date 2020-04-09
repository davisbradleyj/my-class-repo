function MiniBank(balance) {
    this.balance = balance;
    this.statement = [balance];
    this.setBalance = function () {
        
    },
    this.updateStatement = function () {

    },
    this.getStatement = function () {
        return this.statement;
    },
    this.getBalance = function () {
        return this.balance;
    },
    this.printBalance = function () {
        console.log(`Balance: ${this.getBalance()}`);
    },
}



// const danBank = new MiniBank(300);

// var transaction = function (deposit, withdrawal) {
//     let balance = 0
//     console.log("Balance: " + balance)
//     if (deposit !== 0) {
//         balance 
//         console.log()
//     }
// }

// transaction(300);
