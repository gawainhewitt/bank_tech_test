module.exports = class BankUI {

  constructor(bankAccount, transactions, reports) {
    this.bankAccount = bankAccount;
    this.transactions = transactions;
    this.reports = reports;
  }

  deposit = (money) => {
    this.transactions.deposit(money, this.bankAccount); 
  }

  withdrawal = (money) => {
    this.transactions.withdraw(money, this.bankAccount); 
  }

  printStatement = () => {
    console.log(`date || credit || debit || balance`);
    const arrayToPrint = this.reports.statement(this.bankAccount.report()).reverse();
    arrayToPrint.forEach(element => {
      console.log(`${element.date}|| ${element.credit}|| ${element.debit}|| ${element.balance}`);
    });
  }
}