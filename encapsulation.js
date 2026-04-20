class Encap {
  #balance = 0;

  amount(addval) {
    if (addval > 0) {
      this.#balance += addval;
    }
    return console.log(this.#balance);
  }
  getbalance() {
    return this.#balance;
  }
}
//note: we can only acces the private value only inside the class if we use outside the class it show error
let rupees1 = new Encap();
rupees1.amount(1000);
console.log(rupees1.getbalance());
rupees1.amount(1000);
//console.log(rupees1.#balance);
