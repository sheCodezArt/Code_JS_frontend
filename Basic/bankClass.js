class Bank {
  
  constructor(amount, collected, saved) {
    this.amount = amount;
    this.collected = collected;
    this.saved = saved;
  }
  
  checkBalance() {
    console.log(`Your total balance is ${this.amount}`);
  }
  
  deposit(addedAmount) {
    this.amount += addedAmount;
    
    console.log(`You deposited ${addedAmount}`);
  }
  
  withdraw(removedAmount) {
    
    if (removedAmount < this.amount) {
      this.amount -= removedAmount;
      console.log(`You have withdrawn ${removedAmount}`);
    }
    else if(removedAmount == this.amount) {
      console.log("You cannot withdraw all your money");
    }
    else {
      console.log("Insufficient balance");
    }
    
  }
  
}

let num1 = Number(prompt("Enter your account balance: "));
let num2 = Number(prompt("Enter the amount withdrawn: "));
let num3 = Number(prompt("Enter the amount deposited: "));

let money = new Bank(num1,num2, num3);

money.checkBalance();

money.deposit(num3);
money.checkBalance();

money.withdraw(num2);
money.checkBalance();


