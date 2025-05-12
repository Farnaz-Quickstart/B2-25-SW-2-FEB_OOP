// Defining Object 

let car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "red",
  drive() {
    console.log (`${this.brand}, ${this.model}, ${this.color} is driving`)
  }
}

// Object.keys
// Reference: https://www.w3schools.com/jsref/jsref_object_keys.asp

// Object.values
// Reference: https://www.w3schools.com/jsref/jsref_object_values.asp

// Using for...in Loop, 
// Reference: https://www.w3schools.com/js/js_loop_forin.asp
for (key in car1) {
  console.log (key)
}


// 2- Using for...of loop
// Reference: https://www.w3schools.com/js/js_loop_forof.asp
// for (carValues of car1) {
//   console.log (carValues)
// }



// 3- Using Object.values() with for...of
// Accessing object Properties
// Adding properties to object
// Deleting properties from object
// Accessing object methods
// Adding a Method to an Object

