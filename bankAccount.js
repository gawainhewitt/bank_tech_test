module.exports = class BankAccount {
  balance = 0;
  #transactions = [];

  deposit(money, date) {
    this.balance += money;
    this.#transactions.push({date: date, credit: money, debit: 0.00, balance: this.balance})
  }

  withdraw(money, date) {
    this.balance -= money;
    this.#transactions.push({date: date, credit: 0.00, debit: money, balance: this.balance})
  }

  report() {
    console.log(this.#transactions);
    return this.#transactions;
  }
}