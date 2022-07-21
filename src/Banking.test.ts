import { Banking } from "./Banking";

describe("Banking", () => {
  const banking = new Banking();

  // Test 1:
  describe("The bank does not contain anything", () => {
    it("returns empty acount", () => {
      expect(banking.printStatement()).toBe(
        "Date || Amount || Balance \n" + banking.rewriteDate() + " || 0 || 0"
      );
    });
  });

  // Test 2:
  describe("Deposite 500", () => {
    it("returns +500 amount and 500 balance", () => {
      banking.deposite(500);
      expect(banking.printStatement()).toBe(
        "Date || Amount || Balance \n" +
          banking.rewriteDate() +
          " || +500 || 500"
      );
    });
  });

  // Test 3:
  describe("Withdraw 100", () => {
    it("returns -100 amount and 400 balance", () => {
      banking.withdraw(100);
      expect(banking.printStatement()).toBe(
        "Date || Amount || Balance \n" +
          banking.rewriteDate() +
          " || -100 || 400"
      );
    });
  });
});
