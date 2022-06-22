module.exports = class BankAccount {
  balance = 0;
  #transactions = [];

  deposit(money, date) {
    this.money = money;
    this.date = date;
    this.balance += money;
    this.#transactions.push({date: this.date, credit: this.money, debit: 0.00, balance: this.balance})
  }

  withdraw() {

  }

  report() {
    console.log(this.#transactions);
    return this.#transactions;
  };

}

//edge case of trying to withdraw more than the balance