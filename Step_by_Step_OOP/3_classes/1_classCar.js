// Brand   Model     Color
// Toyota  Corolla   Red
// Honda   Civic     Blue
// Ford    Mustand   Black
// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// "this" refers to the instance being created.

// Definition of Class
class Car {
  constructor (brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
  }
  drive() {
    console.log (`${this.brand}, ${this.model}, ${this.color} is driving`)
  }
  stop() {
    console.log (`${this.brand}, ${this.model}, ${this.color} has stopped`)
  }
}

let car1 = new Car ("Toyota", "Corolla", "Red")
let car2 = new Car ("Honda", "Civic", "Blue")
