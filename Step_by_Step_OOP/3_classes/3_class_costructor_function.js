// Class Syntax with constructor (ES6+)
class Car {
  constructor (model, year) {
    this.model = model
    this.year = year
  }
  displayIndo() {
    return (`${this.model}, ${this.year}`)
  }
}

let car1 = new Car ("model1", 2004)

// Constructor Function (Pre-ES6)
function Car2 (model,year) {
  this.model = model
  this.year = year
}

Car2.prototype.displayInfo = function() {
  return "This is a return of method"
}



let car2 = new Car2("MM", "YY")
console.log (car2.model)





