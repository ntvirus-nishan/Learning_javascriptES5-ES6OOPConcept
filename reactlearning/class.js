"use strict";
const test = document.getElementById("test");
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}
const myCar = new Car("Audi", "red");
// const myCar1 = new Car("Nishan", "white");
// const myCar2 = new Car("Ferrari", "black");
// console.log(myCar);

class Perosn {
  constructor(name, birthYear, occupation) {
    this.name = name;
    this.birthYear = birthYear;
    this.occupation = occupation;
  }
  getOccupation() {
    return this.occupation;
  }
  getName() {
    return this.name;
  }
  getage(currentYear) {
    return currentYear - this.birthYear;
  }
  greet() {
    return `hello my name is ${this.name} and my birthYear is ${this.birthYear}`;
  }
}
const person1 = new Perosn("Nishan", 1990, "Developer");
const currentYear = new Date().getFullYear();
const age = "Age:" + person1.getage(currentYear);
const greeting = person1.greet();
test.innerText = greeting + " and my " + age;
// console.log(person1.getName());
// console.log(person1.getOccupation());

class Bag {
  //The items parameter of the Bag constructor expects an array.
  constructor(items) {
    this.items = items;
  }
  //To map over the array of items within the Bag class, we can define a method that iterates over each item in the array and performs some operation on each item.
  map(callBack) {
    return this.items.map(callBack);
  }
}

let myarr = ["Red", 200, "Hand Bag"];
let bag = new Bag(myarr); //you can directly passyour arr here[]
// console.log(bag);
//// Define a callback function to apply to each item
const callBack = (item, index) => {
  return `${index} : ${item}`;
};
const mappedItem = bag.map(callBack);
console.log(mappedItem);

//for object
class Luggage {
  constructor(items) {
    this.items = items;
  }
  map(callback) {
    return Object.entries(this.items).map(([key, value]) =>
      callback(key, value)
    );
  }
}
let myObj = {
  color: "red",
  size: "large",
  price: 200,
};
let luggage = new Luggage(myObj);
const callback = (key, value) => {
  return `${key} : ${value}`;
};
const objMapped = luggage.map(callback);
console.log(objMapped);
