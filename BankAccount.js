class BankAccount {
  constructor(interestRate = 0.01, balance = 0) {
    this.acctBal = balance;
    this.interestRate = interestRate;
  }

  deposit(amount) {
    this.acctBal += amount;
    return this;
  }

  withdraw(amount) {
    this.acctBal -= amount;
    return this;
  }

  displayAccountInfo() {
    console.log("Balance: $" + this.acctBal);
    return this;
  }

  yieldInterest() {
    if (this.acctBal > 0) {
      const interest = this.acctBal * this.interestRate;
      console.log("interest calculated as: $" + interest);
      this.acctBal += interest;
    }
    return this;
  }
}

const account1 = new BankAccount(0.05, 1000);
const account2 = new BankAccount(0.01, 600);
console.log("Starting balance for account1 is: $" + account1.acctBal);

account1
  .deposit(500)
  .deposit(100)
  .deposit(400)
  .withdraw(300)
  .yieldInterest()
  .displayAccountInfo();

account2
  .deposit(500)
  .deposit(5000)
  .withdraw(45)
  .withdraw(57)
  .withdraw(3)
  .withdraw(17)
  .yieldInterest()
  .displayAccountInfo();
