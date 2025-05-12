class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getCarInfo () {
    return (`summary parent ${this.brand}, ${this.model}, ${this.year}`)
  }
}

let car1 = new Car ("b1", "M1", 2000)






let car2 = new Car ("b2", "M2", 2002)
let car3 = new Car ("b3", "M3", 2003)