const Reports = require('./reports');

describe('Reports', () => {
  describe('.statement', () => {
    it('formats report ready for statement', () => {
      const reports = new Reports;
      const bankAccountReport = [{
        date: "23/02/2022",
        credit: 1000,
        debit: 0,
        balance: 1000
      }];
      const result = [{date: "23/02/2022 ", credit: "1000.00 ", debit: "", balance: "1000.00 "}];
      expect(reports.statement(bankAccountReport)).toEqual(result);
    })
    it('formats a different report ready for statement', () => {
      const reports = new Reports;
      const bankAccountReport = [{
        date: "23/02/2022",
        credit: 1001,
        debit: 0,
        balance: 1000
      }];
      const result = [{date: "23/02/2022 ", credit: "1001.00 ", debit: "", balance: "1000.00 "}];
      expect(reports.statement(bankAccountReport)).toEqual(result);
    })
    it('formats 2 reports ready for statement', () => {
      const reports = new Reports;
      const bankAccountReport = [{
        date: "23/02/2022",
        credit: 1001,
        debit: 0,
        balance: 1000
      },
      {
        date: "22/02/2022",
        credit: 0,
        debit: 34,
        balance: 1000
      }];
      const result = [{
        date: "23/02/2022 ", 
        credit: "1001.00 ", 
        debit: "", 
        balance: "1000.00 "
      },
      {
        date: "22/02/2022 ",
        credit: "",
        debit: "34.00 ",
        balance: "1000.00 "
      }];
      expect(reports.statement(bankAccountReport)).toEqual(result);
    })
  })
})