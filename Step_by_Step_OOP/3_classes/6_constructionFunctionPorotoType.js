/*
  Brand   Model     Color
  Toyota  Corolla   Red
  Honda   Civic     Blue
  Ford    Mustand   Black
  A constructor function is just a regular function used to create multiple similar objects.
*/

// Step 1: Keep constructor for data only
function Car (brand, model, color) {
  this.brand = brand
  this.model = model
  this.color = color
}

Car.prototype.drive= function () {
  console.log ("This car is driving")
}

let car1 = new Car ("Toyota", "Corolla", "red")
car1.drive()