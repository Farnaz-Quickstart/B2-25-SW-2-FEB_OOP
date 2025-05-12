// this:
//     Refers to the Instance: Inside a class, this refers to the specific instance being created or acted upon.
//     also this is used to set up properties on the specific object being created
//     Uniqueness: Each new instance of a class has its own separate properties (like this.brand, this.model, etc.), 
//     so changing this.brand on one instance does not affect another instance.

class Mobile {
  constructor(brand, model, color) {
    // Assign values
    this.brand = brand
    this.model = model
    this.color = color
    console.log ("This is construction phase ")
  }

  mobileInformation () {
    console.log (`This is mobile: ${this.brand}, model: ${this.model}, color: ${this.color}`)
    return ("Mobile information")
  }

  make_call (number) {
    console.log ("call ${number}")
    return ("make a call")
  }

  send_text (number, textMessage) {
    console.log ("Send  ${textMessage} to ${number}")
    return ("send text")
  }
}

// Creating a new instance of the Mobile class, named mobile1.
let mobile1 = new Mobile("iphone", "225", "orange")
console.log (mobile1.mobileInformation())
