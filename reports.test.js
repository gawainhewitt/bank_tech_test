const Reports = require('./reports');

describe('Reports', () => {
  describe('.statement', () => {
    it('formats report ready for statement', () => {
      const reports = new Reports;
      const bankAccountReport = {
        date: "23/02/2022",
        credit: 1000.00,
        debit: 0.00,
        balance: 1000.00
      };
      const result = {date: "23/02/2022 ", credit: "1000.00 ", debit: "", balance: "1000.00 "};
      expect(reports.statement(bankAccountReport)).toEqual(result);
    })
  })
})