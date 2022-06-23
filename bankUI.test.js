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
      let spy = jest.spyOn(reports, 'statement').mockImplementation(() => {
        return [];
      });
      const result = "date || credit || debit || balance";
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(1, result);
    })
    it("console logs the amount and date when one deposit made", () => {
      const bankAccount = new BankAccount;
      const transactions = new Transactions;
      const reports = new Reports
      const bankUI = new BankUI(bankAccount, transactions, reports);
      let spy = jest.spyOn(reports, 'statement').mockImplementation(() => {
        return [{date: "23/02/2022 ", credit: "1000.00 ", debit: "", balance: "1000.00 "}];
      });
      const result = "23/02/2022 || 1000.00 || || 1000.00 ";
      bankUI.deposit(1000.00);
      expect(transactions.deposit).toHaveBeenCalledWith(1000.00, bankAccount)
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(2, result);
    })
    it("console logs the amount and date when a different deposit made", () => {
      const bankAccount = new BankAccount;
      const transactions = new Transactions;
      const reports = new Reports
      const bankUI = new BankUI(bankAccount, transactions, reports);
      let spy = jest.spyOn(reports, 'statement').mockImplementation(() => {
        return [{date: "23/02/2022 ", credit: "2000.67 ", debit: "", balance: "2000.67 "}];
      });
      const result = "23/02/2022 || 2000.67 || || 2000.67 ";
      bankUI.deposit(2000.67);
      expect(transactions.deposit).toHaveBeenCalledWith(2000.67, bankAccount)
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(2, result);
    })
    it("console logs the amount and date when one withdrawal made", () => {
      const bankAccount = new BankAccount;
      const transactions = new Transactions;
      const reports = new Reports
      const bankUI = new BankUI(bankAccount, transactions, reports);
      let spy = jest.spyOn(reports, 'statement').mockImplementation(() => {
        return [{date: "23/02/2022 ", credit: "", debit: "500.00 ", balance: "1000.00 "}, {date: "23/02/2022 ", credit: "1500.00 ", debit: "", balance: "1500.00 "}];
      });
      const depositResult = "23/02/2022 || 1500.00 || || 1500.00 "
      const withdrawalResult = "23/02/2022 || || 500.00 || 1000.00 ";
      bankUI.deposit(1500);
      bankUI.withdrawal(500);
      expect(transactions.deposit).toHaveBeenCalledWith(1500.00, bankAccount);
      expect(transactions.withdraw).toHaveBeenCalledWith(500, bankAccount);
      bankUI.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(2, depositResult);
      expect(console.log).toHaveBeenNthCalledWith(3, withdrawalResult);
    })
  })
})
