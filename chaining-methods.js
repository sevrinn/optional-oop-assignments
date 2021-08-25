class User {
  //constructor
  constructor(username, email) {
    //attributes, name and email are passed in as arguments and acctBal is hardcoded at 0
    this.name = username;
    this.email = email;
    this.acctBal = 0;
  }
  //methods

  makeDeposit(amount) {
    this.acctBal += amount;
    return this;
  }

  makeWithdrawal(amount) {
    this.acctBal -= amount;
    return this;
  }

  //BONUS method
  transferMoney(otherUser, amount) {
    this.acctBal -= amount;
    otherUser.acctBal += amount;
    console.log(
      "Transfer from " + this.name + " to " + otherUser.name + " has occured"
    );
    return this;
  }
  //display user balance
  displayBalance() {
    console.log("User: " + this.name + ", Balance: $" + this.acctBal);
    return this;
  }
}

//class instances
const user1 = new User("James Arnold", "james@caskstore.com");
const user2 = new User("Vince Nunez", "vince@casksore.com");
const user3 = new User("Brett Ryzula", "brett@caskstore.com");

user1
  .makeDeposit(100)
  .makeDeposit(100)
  .makeDeposit(400)
  .makeWithdrawal(50)
  .displayBalance();

user2
  .makeDeposit(300)
  .makeWithdrawal(5)
  .makeWithdrawal(5)
  .makeDeposit(23)
  .displayBalance();

user3
  .makeDeposit(1000)
  .makeWithdrawal(100)
  .makeWithdrawal(100)
  .makeWithdrawal(100)
  .displayBalance();

user1.transferMoney(user3, 13).displayBalance();
user3.displayBalance();
