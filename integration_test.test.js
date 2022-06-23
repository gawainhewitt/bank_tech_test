// jest.mock('./bankAccount');
// jest.mock('./transactions');
// jest.mock('./reports');
// jest.mock('./bankUI')

// I wish I had something that would create a private bank account
const BankAccount = require('./bankAccount');

// I wish I had something that would handle the transactions for a bank account
const Transactions = require('./transactions');

// I wish I had something that would allow for reporting from a bank account
const Reports = require('./reports');

// I wish I had a place to control the user interaction
const BankUI = require('./bankUI');


describe('setup', () => {
  it('creates instance of class bankAccount', () => {
    const bankAccount = new BankAccount;
    const transactions = new Transactions;
    const reports = new Reports;
    const subject = new BankUI(bankAccount, transactions, reports);
    
    expect(bankAccount).toBeInstanceOf(BankAccount);
    expect(transactions).toBeInstanceOf(Transactions);
    expect(reports).toBeInstanceOf(Reports);
    expect(subject).toBeInstanceOf(BankUI);
  })
})

// describe('acceptance test', () => {
//   it('passes the acceptance criteria set for the tech test', () => {
//     const bankAccount = new BankAccount;
//     const transactions = new Transactions;
//     const reports = new Reports;
//     const subject = new BankUI(bankAccount, transactions, reports);

//     subject.deposit(1000);
//     subject.deposit(2000);
//     subject.withdrawal(500);
//     expect(console.log).toHaveBeenNthCalledWith(2, "blah");
//   })
// })


