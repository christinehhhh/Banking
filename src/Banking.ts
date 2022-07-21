export class Banking {
  amount = "0";
  balance = 0;
  deposite(into: number): void {
    this.amount = "+" + into;
    this.balance += into;
  }
  withdraw(outfrom: number): void {
    this.amount = "-" + outfrom;
    this.balance -= outfrom;
  }
  printStatement(): string {
    return (
      "Date || Amount || Balance \n" +
      this.rewriteDate() +
      " || " +
      this.amount +
      " || " +
      this.balance
    );
  }

  rewriteDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    return date + "." + month + "." + year;
  }
}
