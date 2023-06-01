class BankAccount {
  private _balance = 0;

  get balance() {
    return this._balance;
  }

  public deposit(amount: number) {
    this._balance += amount;
  }

  public withdraw(amount: number) {
    this._balance -= amount;
  }
}

const tylerAccount = new BankAccount();

tylerAccount.deposit(1000);

tylerAccount.withdraw(200);

console.log(tylerAccount.balance);
