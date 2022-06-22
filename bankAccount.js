module.exports = class BankAccount {
  
  deposit() {

  }

  withdraw() {

  }

  report() {
    return {
      date: "23/02/2022",
      credit: 0.00,
      deposit: 1000.00,
      balance: 1000.00
    }
  };
}

//edge case of trying to withdraw more than the balance