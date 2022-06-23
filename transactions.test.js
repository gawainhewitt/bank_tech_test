jest.mock('./bankAccount');

const Transactions = require('./transactions');
const BankAccount = require('./bankAccount');

describe('Transactions', () => {
  date = '2022-02-23';
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(date))
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  describe('.deposit', () => {
    it("calls bankAccount.deposit with the money and the date when money deposited", () => {
      const transactions = new Transactions;
      const money = 300;
      const bankAccount = new BankAccount;
      transactions.deposit(money, bankAccount);
      expect(bankAccount.deposit).toHaveBeenCalledWith(money, "23/02/2022");
    })
    it("throws an error when a deposit is made with too many decimal places", () => {
      const transactions = new Transactions;
      expect(() => {
        transactions.deposit(2000.627);
      }).toThrow("too many decimal places");
    })
  })
  describe('.withdraw', () => {
    it("calls bankAccount.withdraw with the money and the date when money withdrawn", () => {
      const transactions = new Transactions;
      const money = 300;
      const bankAccount = new BankAccount;
      transactions.withdraw(money, bankAccount);
      expect(bankAccount.withdraw).toHaveBeenCalledWith(money, "23/02/2022");
    })
    it("throws an error when a withdrawal is made with too many decimal places", () => {
      const transactions = new Transactions;
      expect(() => {
        transactions.withdraw(500.627);
      }).toThrow("too many decimal places");
    })
  })
})
  