module.exports = class Transactions {
  deposit(money, bankAccount) {
    if(this.#countDecimals(money) > 2){
      throw "too many decimal places";
    }else{
      bankAccount.deposit(money, this.#getDate());
    }
  }

  withdraw(money, bankAccount) {
    if(this.#countDecimals(money) > 2){
      throw "too many decimal places";
    }else{
      bankAccount.withdraw(money, this.#getDate());
    }
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

