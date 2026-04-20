//ex by using constructor for this  and  its good way
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
  start() {
    return this.color + " " + "started";
  }
}

const car1 = new Car("red", "BMW");
const car2 = new Car("pink", "Toyota");
console.log(car1.start());
console.log(car2.start());
//ex for not create constructor  use this in method but not good way

// class Car {
//   //   constructor(color, brand) {
//   //     this.color = color;
//   //     this.brand = brand;
//   //   }
//   start(color, brand) {
//     this.color = color;
//     this.brand = brand;
//     return this.color + " " + "started";
//   }
// }

// const car1 = new Car();
// const car2 = new Car();
// console.log(car1.start("red", "BMW"));
// console.log(car2.start("pink", "Toyota"));
