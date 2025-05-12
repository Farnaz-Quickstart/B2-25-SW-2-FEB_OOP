// The JavaScript prototype property allows you to add new properties to object constructors.
// Car.prototype is a unique object created specifically for the Car class. It’s used as a blueprint for all instances of Car.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

let car1 = new Car ("b1", "M1", 2003)

Car.prototype.newProp = "prop1"

console.log (car1)