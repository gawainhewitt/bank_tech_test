jest.mock('./bankAccount');
jest.mock('./transactions');
jest.mock('./reports');

// I wish I had something that would create a private bank account
const BankAccount = require('./bankAccount');

// I wish I had something that would handle the transactions for a bank account
const Transactions = require('./transactions');

// I wish I had something that would allow for reporting from a bank account
const Reports = require('./reports');


describe('setup', () => {
  it('creates instance of class bankAccount', () => {
    const transactions = new Transactions;
    const reports = new Reports
    const subject = new BankAccount(transactions,reports);

    expect(transactions).toBeInstanceOf(Transactions);
    expect(reports).toBeInstanceOf(Reports);
    expect(subject).toBeInstanceOf(BankAccount);
  })
})


