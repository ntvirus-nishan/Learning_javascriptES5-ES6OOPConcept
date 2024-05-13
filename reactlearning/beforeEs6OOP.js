//DEFINIG OR CREATING THE OBJECT

//FIRST APPRAOCH
let preson1 = {
  firstName: "Nishan",
  lastName: "Kumar",
  age: 25,
  gender: "Male",
  "user name": "ntvirus", //this optional (use [] notation to access)
  //Creating the methods is objects
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
//To accses the value
//use . notation
console.log(preson1.firstName);
//Accessing the fullName function
preson1.fullName();

//SECOND APPRAOCH
let car = {};
car.brand = "Toyata";
car.switchKey = function () {
  console.log("Switch ON");
};
console.log(car);
car.switchKey();

//THIRD APPROACH
let bag = new Object();
bag.type = "Hand Bag";
bag.color = "Black";
bag.weight = 3;
bag.showBagType = function () {
  console.log("School Bag");
};
console.log(bag);
bag.showBagType();

//USING CONSTRUCTOR
function Laptop(brand, size, ram) {
  //creating the variable or poperties
  this.brand = brand;
  this.size = size;
  this.ramSize = ram;

  //ADDING METHODS
  this.getBrand = function () {
    return `The laptop is ${this.brand}`;
  };

  this.changeBrandName = function (brandName) {
    this.brand = brandName;
  };
}

let laptop1 = new Laptop("Acer", 14, "8GB");
let laptop2 = new Laptop("Dell", 15, "16GB");
let laptop3 = new Laptop("HP", 12, "4GB");

laptop3.changeBrandName("Lenovo");

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

//Calling getBrand method
console.log(laptop1.getBrand());
console.log(laptop2.getBrand());
console.log(laptop3.getBrand());

let myObj = {};
console.log(myObj);
