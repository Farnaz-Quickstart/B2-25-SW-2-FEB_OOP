class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getCarInfo () {
    return (`summary parent ${this.brand}, ${this.model}, ${this.year}`)
  }

  test () {
    return "test"
  }
}

class Window  {
  constructor (size) {
    this.size = size
  }

  printWindow() {
    return "summary Window"
  }
}

// Defining Sub class of Car Class
class ElectricCar extends Car  {
  constructor (brand, model, year, EnginePrower) {
    super (brand, model, year)

    this.EnginePrower = EnginePrower
  }

  getElectricCarInfo () {
    return (`summary ${this.brand}, ${this.model}, ${this.year}, ${this.EnginePrower}`)
  }
}

let ElectricCar1 = new ElectricCar("EB1", "EM1", 2024, "EP1")
console.log (ElectricCar1.getElectricCarInfo())
console.log (ElectricCar1.test())



