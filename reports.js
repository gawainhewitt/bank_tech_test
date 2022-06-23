module.exports = class Reports {
  statement(report) {
    const reportToPrint = report.map((object) => {
       const creditToString = object.credit === 0.00 ? "" : `${object.credit.toFixed(2)} `;
       const debitToString = object.debit === 0.00 ? "" : `${object.debit.toFixed(2)} `;
       return {
         date: object.date + " ",
         credit: creditToString,
         debit: debitToString,
         balance: object.balance.toFixed(2) + " "
       }
    })
    return reportToPrint;
  }
}