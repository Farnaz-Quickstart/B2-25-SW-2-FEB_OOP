/*
    The extends keyword is used to create a subclass (child class) that inherits from parent class.
    super() is used inside a subclass constructor to call the parent class’s constructor.
    You must call super() before using this in a subclass.
    Car (Brand, Model, Color)
    ElectricCar (brand, model, color, batteryLevel)
    SportCar (brand, model, color, topSpeed)
    LuxuryCar (brand, model, color, soundSystem)
    Override mothods
*/

class Car {
  constructor (brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
  }
  drive() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} is driving`)
  }
  stop() {
    console.log (`Car class: ${this.brand}, ${this.model}, ${this.color} has stopped`)
  }
}

class ElectricCar extends Car {
  constructor (brand, model, color, batteryLevel) {
    super (brand, model, color)
    this.batteryLevel = batteryLevel
  }
}

class SportCar extends Car {
  constructor (brand, model, color, topSpeed) {
    super (brand, model, color)
    this.topSpeed = topSpeed
  }
}

class LuxuryCar extends Car{
  constructor (brand, model, color, soundSystem) {
    super (brand, model, color)
    this.soundSystem = soundSystem
  }
}

let car1 = new Car ("brand1", "Model1", "Color1")
let electicCar1 = new ElectricCar ("ECBrand1", "ECModel1", "ECColor1", "ECBatteryLevel1")
console.log (electicCar1)

