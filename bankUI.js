module.exports = class BankUI {

  constructor(bankAccount, transactions, reports) {
    this.bankAccount = bankAccount;
    this.transactions = transactions;
    this.reports = reports;
  }

  deposit = (money) => {
    if(this.#countDecimals(money) > 2){
      return "error! too many decimal places";
    }else{
      this.bankAccount.deposit(money.toFixed(2));
    }
  }

  printStatement = () => {
    console.log(`date        ||  credit  ||  debit   ||  balance`);
    console.log(`${this.#getDate()}  ||  ${this.bankAccount.deposit()} ||          ||  1000.00`);
  }

  #getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  #countDecimals = (value) => {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
    }
}