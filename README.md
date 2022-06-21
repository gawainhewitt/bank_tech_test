# bank tech test for makers academy


# Specification

Requirements

* You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

 # Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```
date        ||  credit  ||  debit   ||  balance
14/01/2023  ||          ||  500.00  ||  2500.00
13/01/2023  ||  2000.00 ||          ||  3000.00
10/01/2023  ||  1000.00 ||          ||  1000.00
```


# Inputs and outputs table

```
input                                             ||          bankAccount.printStatement
--------------------------------------------------------------------------------------------------------------
no input                                          ||          date         ||  credit  ||  debit   ||  balance
                                                              
bankAccount.credit(1000.00)                       ||          date         ||  credit  ||  debit   ||  balance
                                                              (date)       ||  1000.00 ||          ||  1000.00

bankAccount.credit(2000.00)                       ||          date         ||  credit  ||  debit   ||  balance
                                                              (date)       ||  2000.00 ||          ||  3000.00
                                                              (date)       ||  1000.00 ||          ||  1000.00

bankAccount.debit(500)                            ||          date         ||  credit  ||  debit   ||  balance
                                                              (date)       ||          ||  500.00  ||  2500.00
                                                              (date)       ||  2000.00 ||          ||  3000.00
                                                              (date)       ||  1000.00 ||          ||  1000.00

bankAccount.debit(300.234)                        ||          returns error "too many decimal points"
bankAccount.debit("500")                          ||          returns error "input is not a number"

```