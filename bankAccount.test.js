const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  describe('report', () => {
    it('returns amount, date and balance when deposit made', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(1000.00, "23/02/2022");
      expect(bankAccount.report()).toEqual({
        date: "23/02/2022",
        credit: 0.00,
        deposit: 1000.00,
        balance: 1000.00
      })
    })
  })
})