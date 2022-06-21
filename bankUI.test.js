jest.mock('./bankAccount');
jest.mock('./transactions');
jest.mock('./reports');

const BankAccount = require('./bankAccount');
const Transactions = require('./transactions');
const Reports = require('./reports');
const BankUI = require('./bankUI');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe("BankUI", () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2022-02-23'))
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  describe(".printStatement", () => {
    it("console logs the headers for print statement", () => {
      const bankAccount = new BankAccount;
      const transactions = new Transactions;
      const reports = new Reports
      const bankUI = new BankUI(bankAccount, transactions, reports);
      const result = "date        ||  credit  ||  debit   ||  balance";
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(1, result);
    })
    it("console logs the amount and date when one deposit made", () => {
      const bankAccount = new BankAccount;
      const transactions = new Transactions;
      const reports = new Reports
      const bankUI = new BankUI(bankAccount, transactions, reports);
      let spy = jest.spyOn(bankAccount, 'deposit').mockImplementation(() => {
        return 1000.00.toFixed(2);
      });
      const result = "23/02/2022  ||  1000.00 ||          ||  1000.00";
      bankUI.deposit(1000.00);
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(2, result);
    })
  })
})
