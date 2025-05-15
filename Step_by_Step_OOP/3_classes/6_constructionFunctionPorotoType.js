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
Car.prototype.drive = function () {
  console.log ("This car is driving")
}


let car1 = new Car ("brand1", "model1", "color1")
let car2 = new Car ("brand2", "model2", "color2")
let car3 = new Car ("brand3", "model3", "color3")

console.log (car1)
console.log (car2)
console.log (car3)

