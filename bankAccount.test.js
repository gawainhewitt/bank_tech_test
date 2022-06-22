const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  describe('report', () => {
    it('returns amount, date and balance when deposit made', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(1000.00, "23/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "23/02/2022",
        credit: 1000.00,
        debit: 0.00,
        balance: 1000.00
      }])
    })
    it('returns amount, date and balance when a different deposit made', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(500.00, "23/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "23/02/2022",
        credit: 500.00,
        debit: 0.00,
        balance: 500.00
      }])
    })
    it('returns amount, date and balance when a different amount and date given', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(750.00, "24/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "24/02/2022",
        credit: 750.00,
        debit: 0.00,
        balance: 750.00
      }])
    })
    it('returns amount, date and balance when two deposits made', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(750.00, "24/02/2022");
      bankAccount.deposit(123.19, "26/02/2022");
      expect(bankAccount.report()).toEqual([
        {
        date: "24/02/2022",
        credit: 750.00,
        debit: 0.00,
        balance: 750.00
        },
        {
        date: "26/02/2022",
        credit: 123.19,
        debit: 0.00,
        balance: 873.19
        }
      ])
    })
    it('returns amount, date and balance when withdrawal made', () => {
      const bankAccount = new BankAccount;
      bankAccount.withdraw(1000.00, "23/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "23/02/2022",
        credit: 0.00,
        debit: 1000.00,
        balance: -1000.00
      }])
    })
    it('returns amount, date and balance when a different withdrawal made', () => {
      const bankAccount = new BankAccount;
      bankAccount.withdraw(500.00, "23/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "23/02/2022",
        credit: 0.00,
        debit: 500.00,
        balance: -500.00
      }])
    })
    it('returns amount, date and balance when a different amount and date given', () => {
      const bankAccount = new BankAccount;
      bankAccount.withdraw(750.00, "24/02/2022");
      expect(bankAccount.report()).toEqual([{
        date: "24/02/2022",
        credit: 0.00,
        debit: 750.00,
        balance: -750.00
      }])
    })
    it('returns amount, date and balance when two withdrawals made', () => {
      const bankAccount = new BankAccount;
      bankAccount.withdraw(750.00, "24/02/2022");
      bankAccount.withdraw(123.19, "26/02/2022");
      expect(bankAccount.report()).toEqual([
        {
        date: "24/02/2022",
        credit: 0.00,
        debit: 750.00,
        balance: -750.00
        },
        {
        date: "26/02/2022",
        credit: 0.00,
        debit: 123.19,
        balance: -873.19
        }
      ])
    })
    it('returns amount, date and balance when one deposit and one withdrawal made', () => {
      const bankAccount = new BankAccount;
      bankAccount.deposit(750.00, "24/02/2022");
      bankAccount.withdraw(123.19, "26/02/2022");
      expect(bankAccount.report()).toEqual([
        {
        date: "24/02/2022",
        credit: 750.00,
        debit: 0.00,
        balance: 750.00
        },
        {
        date: "26/02/2022",
        credit: 0.00,
        debit: 123.19,
        balance: 626.81
        }
      ])
    })
  })
})