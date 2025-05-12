// Brand   Model     Color
// Toyota  Corolla   Red
// Honda   Civic     Blue
// Ford    Mustand   Black

// What is this in object: this refers to the object that is calling the method.
// It allows the method to access properties of the same object it belongs to.

let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
  drive() {
    console.log (`${this.brand}, ${this.model}, ${this.color} is driving`)
  }
}

