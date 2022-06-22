module.exports = class BankAccount {
  
  deposit(money, date) {
    this.money = money;
    this.date = date;
  }

  withdraw() {

  }

  report() {
    return {
      date: this.date,
      credit: 0.00,
      deposit: this.money,
      balance: this.money
    }
  };
}

//edge case of trying to withdraw more than the balance